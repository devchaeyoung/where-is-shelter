import React, { useState, useContext } from "react";

import * as Api from "../../apis/api";

function LoginForm() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    
    event.preventDefault();

    setEmail(event.target.email.value)
    setPassword(event.target.password.value)

    try {
      const res = await Api.postData("user/login", {
        email,
        password,
      });

      const user = res.data;
      
      // 서버로부터 전달받은 사용자 정보에 있는 JWT 토큰 정보를 클라이언트측에서 사용하고자 합니다.
      const jwtToken = user.token;

      // sessionStorage에 "userToken"이라는 이름으로 JWT 토큰을 저장합니다.
      sessionStorage.setItem("userToken", jwtToken);

      // dispatch 함수를 이용해 로그인 성공 상태로만 보관하면 되는지???
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: user,
      });

      // 기본 페이지로 이동함.
      navigate("/", { replace: true });
    } catch (err) {
      console.log("로그인을 시도하다가 오류가 발생했습니다. \n", err);
    }
  };

  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <div className="flex flex-col w-[50%] h-[80%] bg-slate-100 rounded-xl items-center justify-center">
        <form className="flex flex-col h-[50%] items-center justify-evenly">
          <h1 className="font-bold text-xl">로그인을 해주세요!</h1>
          <div className="flex flex-row h-32">
            <div className="flex flex-col justify-evenly text-right mr-5">
              <p>이메일:</p>
              <p>비밀번호:</p>
            </div>
            <div className="flex flex-col justify-evenly">
              <input className="p-2 rounded-xl" type="text" id="email" required></input>
              <input className="p-2 rounded-xl" type="password" id="password" required></input>
            </div>
          </div>
          <button className="bg-green-400 p-3 rounded-xl">로그인</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
