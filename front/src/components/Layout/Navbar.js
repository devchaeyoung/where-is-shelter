import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {

  const activeStyle = 'mr-12 underline decoration-4 underline-offset-8';
  const pendingStyle = 'mr-12'

  // 상태값에 따라, 활성화된 메뉴의 버튼에는 밑줄을 추가해줍니다.
  // [REFACTORED] NavLink 컴포넌트를 사용해서, 활성화된 메뉴에는 특정 class를 부여해 CSS style을 적용해줍니다.

  return (
    <div className="flex flex-row w-full h-20 items-center">

      <div className="flex flex-row w-full justify-between items-center px-8 font-bold text-lg">
        <div>
          <NavLink to="/poi" id="poi-menu-btn" className={({ isActive, isPending }) => isPending ? pendingStyle : isActive ? activeStyle : "mr-12"}>
            극한날씨 쉼터
          </NavLink>
          <NavLink to="/weather" id="weather-menu-btn" className={({ isActive, isPending }) => isPending ? pendingStyle : isActive ? activeStyle : "mr-12"}>
            기상정보
          </NavLink>
          <NavLink to="/infographic" id="infographic-menu-btn" className={({ isActive, isPending }) => isPending ? pendingStyle : isActive ? activeStyle : "mr-12"}>
            인포그래픽
          </NavLink>
        </div>
        <div>
          <NavLink to="/mypage" id="mypage-menu-btn" className={({ isActive, isPending }) => isPending ? pendingStyle : isActive ? activeStyle : "mr-12"}>
            마이페이지
          </NavLink>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar;