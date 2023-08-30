import { useState } from "react";

function UserProfile({
  user,
  setReviewLevel,
  isEdit,
  handleChangeEdit,
  fetchUserUpdate,
  reviewLevel,
  reviewLength,
}) {
  /** 변경할 닉네임 상태를 관리합니다. */
  const [nickname, setNickname] = useState(user ? user.nickname : "");

  /** 변경할 주소 상태를 관리합니다. */
  const [description, setDescription] = useState(user ? user.description : "");

  /** 변경할 주소 상태를 관리합니다. */
  const [address, setAddress] = useState(user ? user.address : "");

  /** 변경할 프로필 이미지를 상태를 관리합니다. */
  const [profileImage, setProfileImage] = useState(
    "https://velog.velcdn.com/images/xiu_8/post/1fe5206b-f226-46b1-8f8a-6ed9d29a55bf/image.png"
  );

  /** 유저 프로필 업로드하는 핸들러 함수입니다. */
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

  const handleSubmit = () => {
    fetchUserUpdate({ nickname, description, address, profileImage });
  };
  return (
    <>
      {isEdit ? (
        <>
          <p className="text-xl h-12 font-bold mt-0">
            {user?.name}님 반갑습니다!
          </p>
          <ul className="marker:text-green-400 list-disc pl-5 space-y-3 text-slate-400">
            <li className="mt-0 pt-0">
              쉼터 리뷰를 작성 시 ㅇㅇ등급이 올라갑니다.
            </li>
            <li className="mt-0">
              현재 {user?.name}님의 쉼터 리뷰작성 횟수는 {reviewLength}회
              입니다.
            </li>
          </ul>
          <div className="flex items-center space-x-6 mt-8">
            <div className="shrink-0">
              <img
                className="h-16 w-16 object-cover rounded-full"
                src={profileImage ? profileImage : user?.profileImage}
                alt={user?.nickname}
              />
            </div>
            <label className="block">
              <span className="sr-only">Choose profile photo</span>
              <input
                type="file"
                onChange={handleFileChange}
                accept="image/gif, image/jpeg, image/png, image/svg"
                className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-green-50 file:text-green-700
      hover:file:bg-green-100
    "
              />
            </label>
          </div>
          <div className="flex w-full">
            <div className="w-full h-full mt-10">
              <div className="flex items-center space-x-7 mt-8">
                <p className="grow-0 w-16 font-bold text-slate-400">별명</p>
                <input
                  type="text"
                  className="grow w-120 h-10 border-2 border-solid border-slate-400 rounded-xl mr-24 mt-1"
                  placeholdere={user?.nickname}
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                />
              </div>
              <div className="flex items-center space-x-7 mt-8">
                <p className="grow-0 w-16 mt-5 font-bold text-slate-400">
                  한줄소개
                </p>
                <input
                  type="text"
                  className="grow w-120 h-10 border-2 border-solid border-slate-400 rounded-xl mr-24 mt-1"
                  placeholdere={user?.description}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="flex items-center space-x-7 mt-8">
                <p className="grow-0 w-16 mt-5 font-bold text-slate-400">
                  주소 변경
                </p>
                <input
                  type="text"
                  className="grow w-120 h-10 border-2 border-solid border-slate-400 rounded-xl mr-24 mt-1"
                  placeholdere="변경할 주소를 입력해주세요"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="rounded-full w-80 h-80 flex items-center justify-center overflow-hidden mb-8">
            <img
              src={user?.profileImage}
              alt={user?.nickname}
              className="w-full h-full"
            />
          </div>
          <div className="flex w-full justify-center">
            <div className="w-full h-full ">
              <p className="text-xl h-10 font-bold">{user?.nickname}</p>
              <p className="text-slate-400 mt-0">{user?.name}</p>
              <p className="text-m font-semi mt-2">{user?.description}</p>
              <p className="text-m font-bold mt-2">
                Lv. {reviewLevel.title}
                {reviewLevel.icon}
              </p>
            </div>
          </div>
        </>
      )}
      <div className="flex w-full relative">
        {isEdit ? (
          <form className="flex mt-3 text-center">
            <div className="absolute right-0">
              <button
                className="grow text-l font-bold mt-0 p-3 rounded-xl bg-green-300 hover:bg-green-600 mr-3"
                onClick={() => {
                  handleSubmit();
                  handleChangeEdit();
                }}
              >
                저장하기
              </button>
              <button
                className="grow text-l font-bold mt-0 p-3 rounded-xl bg-red-300 hover:bg-slate-400 "
                onClick={handleChangeEdit}
              >
                돌아가기
              </button>
            </div>
          </form>
        ) : (
          <button
            className="text-l font-bold mt-0 p-3 rounded-xl bg-green-300 hover:bg-green-600 absolute right-0"
            onClick={handleChangeEdit}
          >
            내 정보
          </button>
        )}
      </div>
    </>
  );
}

export default UserProfile;
