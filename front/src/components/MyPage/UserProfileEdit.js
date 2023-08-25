import React, { useState, useEffect } from "react";
import * as Api from "../../apis/api";
// import { DispatchContext } from "../../App";

function UserProfileEdit({ user, setIsEditing, setUser }) {
  const [profileImage, setProfileImage] = useState(null);

  //useState로 name 상태를 생성함.
  const [name, setName] = useState(user.name);
  //useState로 email 상태를 생성함.
  const [email, setEmail] = useState(user.email);
  //useState로 description 상태를 생성함.
  const [description, setDescription] = useState(user.description);
  const [error, setError] = useState(null);
  // const dispatch = useContext(DispatchContext);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setError(null);
      //유저 편집
      await Api.putData(`user/${user._id}`, {
        name,
        email,
        description,
      });

      // 유저 정보는 response의 data임.
      const response = await Api.getData(`user/${user?.id}`);
      const newData = response.data;
      setUser(newData);
      // 해당 유저 정보로 user을 세팅함.
      setIsEditing(false);

      const formData = new FormData();

      const uploadFile = profileImage ? profileImage : user.profileImage;

      formData.append("profileImage", uploadFile);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("description", description);

      // "users/유저id" 엔드포인트로 PUT 요청함.
      const res = await Api.putMulter(`user/${user?._id}`, formData);

      if (res.status === 201) {
        setUser(res.data);
        // dispatch({ type: "UPDATE", payload: res.data });
      }
    } catch (e) {
      setError(e);
    }

    if (error) {
      return <div>{error.message}</div>;
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    try {
      if (file) {
        console.log(file);
        fileReader.onload = (e) => {
          setProfileImage(e.target.result);
        };
        fileReader.readAsDataURL(file);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log(profileImage);
  }, [profileImage]);
  return (
    <div>
      <div>
        <div onSubmit={handleSubmit}>
          <img
            src={profileImage ? profileImage : user.profileImage}
            style={{ width: "18rem" }}
            alt="변경할 이미지"
          />
          <div controlId="useEditName">
            프로필 업로드
            <div type="file" onChange={handleFileChange} />
          </div>
          <div controlId="useEditName">
            이름
            <div
              type="text"
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div controlId="userEditEmail">
            이메일
            <div
              type="email"
              placeholder="이메일을 입력해주세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div controlId="userEditDescription">
            한줄 소개
            <div
              type="text"
              placeholder="정보, 인사말"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <span>
              <input
                type="submit"
                onClick={(e) => {
                  handleSubmit(e);
                  setIsEditing(false);
                }}
              >
                확인
              </input>
              <input onClick={() => setIsEditing(false)}>취소</input>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserProfileEdit;
