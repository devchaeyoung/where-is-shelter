import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as Api from "../apis/api";

import UserStateContext from "../contexts/UserStateContext";
import DispatchContext from "../contexts/DispatchContext";

function RegisterPage() {

  // 사용자 정보를 담고 있는 전역 context를 dispatch로 사용합니다.
  const dispatch = useContext(UserStateContext);
  const userState = useContext(UserStateContext);

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  useEffect(() => {
    if (userState.user) {
      navigate("/", { replace: true });
      return;
    }
  }, [userState.user, navigate]);


  const handleSubmit = async (event) => {
    
    event.preventDefault();

    setName(event.target.name.value)
    setEmail(event.target.email.value)
    setPassword(event.target.password.value)

    const endpoint = '/user';

    const params = '/register';

    try {
      const res = await Api.postData({
        "name": name,
        "nickname": name,
        "email": email,
        "password": password,
        "description": "test",
        "profile_image": "test",
        "count_visit": 0,
      }, endpoint, params);

      if(res.data.email){
        alert("회원 가입이 성공적으로 처리되었습니다.");
        console.log("회원 가입 성공: ", res.data.email);  
        navigate("/login", { replace: true });
      }

      if(!res.data.email){
        alert("사용자 계정을 만드는 도중 오류가 발생했습니다.");
        console.log("사용자 계정을 만드는 도중 오류가 발생했습니다.", res.data);
        navigate("/register", { replace: true });
      }
      
    } catch (err) {
      alert("사용자 계정을 만드는 도중 오류가 발생했습니다.", err);
      console.log("사용자 계정을 만드는 도중 오류가 발생했습니다.", err);
      navigate("/register", { replace: true });
      return;
    }
  };

  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <div className="flex flex-col w-[50%] h-[80%] bg-slate-100 rounded-xl items-center justify-center">
        <form className="flex flex-col h-[70%] items-center justify-evenly" onSubmit={handleSubmit}>
          <h1 className="font-bold text-xl">회원가입</h1>
          <div className="flex flex-row h-48">
            <div className="flex flex-col justify-evenly text-right mr-5">
              <p>이름:</p>
              <p>이메일:</p>
              <p>비밀번호:</p>
              <p>비밀번호 확인:</p>
            </div>
            <div className="flex flex-col justify-evenly">
              <input className="p-2 rounded-xl" type="text" id="name" required></input>
              <input className="p-2 rounded-xl" type="text" id="email" required></input>
              <input className="p-2 rounded-xl" type="password" id="password" required></input>
              <input className="p-2 rounded-xl" type="password" id="password-confirm" required></input>
            </div>
          </div>
          <button className="bg-green-400 p-3 rounded-xl">회원가입</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
