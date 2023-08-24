import { React, useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";

import LoginForm from "../components/MyPage/LoginForm";
import UserInfo from "../components/MyPage/UserInfo";

const MyPage = () => {
  
  const [isLogin, setIsLogin] = useState(false);
  
  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      {isLogin
        ? <UserInfo />
        : <LoginForm />
      }
    </div>
  );
};

export default MyPage;