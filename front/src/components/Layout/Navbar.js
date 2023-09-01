import { React, useState, useContext, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import UserStateContext from "../../contexts/UserStateContext";
import DispatchContext from "../../contexts/DispatchContext";

function Navbar() {

  const dispatch = useContext(DispatchContext);
  const userState = useContext(UserStateContext);

  const [isLoggedIn, setIsLoggedin] = useState('false');

  useEffect(() => {
    if(userState.user){
      setIsLoggedin(true);
    }
    if(!userState.user){
      setIsLoggedin(false);
    }
  }, [userState])


  // 상태값에 따라, 활성화된 메뉴의 버튼에는 밑줄을 추가해줍니다.
  // [REFACTORED] NavLink 컴포넌트를 사용해서, 활성화된 메뉴에는 특정 class를 부여해 CSS style을 적용해줍니다.

  const activeStyle = 'mx-6 underline decoration-4 underline-offset-8';
  const pendingStyle = 'mx-6'

  const LoggedInMenu = () => {
    return (
      <div>
        <NavLink to="/" id="logout-menu-btn" 
                 className="mx-6 text-slate-500"
                 onClick={handleClick}>
          로그아웃
        </NavLink>
        <NavLink to="/mypage" id="mypage-menu-btn" 
                 className={({ isActive, isPending }) => isPending ? pendingStyle : isActive ? activeStyle : "mx-6"}>
          마이페이지
        </NavLink>

      </div>
    );
  }
    
  const LoggedOutMenu = () => {
    return (
      <NavLink to="/login" id="login-menu-btn" className={({ isActive, isPending }) => isPending ? pendingStyle : isActive ? activeStyle : "mx-6"}>
        로그인
      </NavLink>
    );
  }

  const navigate = useNavigate();

  // 로그아웃 버튼을 클릭할 때 실행됩니다.
  const handleClick = (event) => {
    // sessionStorage에 저장되어있던 JWT Token을 삭제합니다.
    sessionStorage.removeItem("userToken");
    
    // dispatch 함수를 사용해 userState를 로그아웃 상태로 바꿔줍니다.
    dispatch({ type: "LOGOUT" });

    alert('로그아웃 되었습니다.');

    navigate("/", { replace: true });
  }
  

  const handleShelterClick = () => {
    window.alert("쉼터로 대피하세요!!🥕🥕🥕");
  };

  return (
    <div className="flex flex-row w-full h-20 items-center">

      <div className="flex flex-row w-full justify-between items-center px-2 font-bold text-lg">
        <div>
          <NavLink to="/poi" id="poi-menu-btn" className={({ isActive, isPending }) => isPending ? pendingStyle : isActive ? activeStyle : "mx-6"}>
          <a href="/" onClick={handleShelterClick}>극한날씨 쉼터</a>
          </NavLink>
          <NavLink to="/weather" id="weather-menu-btn" className={({ isActive, isPending }) => isPending ? pendingStyle : isActive ? activeStyle : "mx-6"}>
            기상정보
          </NavLink>
          <NavLink to="/infographic" id="infographic-menu-btn" className={({ isActive, isPending }) => isPending ? pendingStyle : isActive ? activeStyle : "mx-6"}>
            인포그래픽
          </NavLink>
        </div>
        <div>
          { isLoggedIn ? <LoggedInMenu /> : <LoggedOutMenu /> }
        </div>  
      </div>
      
    </div>
  )
}

export default Navbar;