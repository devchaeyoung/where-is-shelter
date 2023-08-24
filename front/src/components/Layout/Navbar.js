import { React, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

function Navbar() {

  const [activeMenu, setActiveMenu] = useState('poi-menu-btn')

  // 사용자가 메뉴를 선택하면 해당 메뉴가 활성화되었다는 상태값을 지정해줍니다.
  function handleActiveMenu (event) {
    setActiveMenu(event.target.id)
  } 

  // 상태값에 따라, 활성화된 메뉴의 버튼에는 밑줄을 추가해줍니다.
  return (
    <div className="flex flex-row w-full h-20 items-center">

      <div className="flex flex-row w-full justify-between items-center px-8 font-bold text-lg">
        <div>
          {activeMenu == 'poi-menu-btn'
              ? <Link to="/poi" id="poi-menu-btn" className="mr-12 underline decoration-4 underline-offset-8" onClick={handleActiveMenu}>극한날씨 쉼터</Link>
              : <Link to="/poi" id="poi-menu-btn" className="mr-12" onClick={handleActiveMenu}>극한날씨 쉼터</Link>
          } 
          {activeMenu == 'weather-menu-btn'
              ? <Link to="/weather" id="weather-menu-btn" className="mr-12 underline decoration-4 underline-offset-8" onClick={handleActiveMenu}>기상정보</Link>
              : <Link to="/weather" id="weather-menu-btn" className="mr-12" onClick={handleActiveMenu}>기상정보</Link>
          }
          {activeMenu == 'infographic-menu-btn'
              ? <Link to="/infographic" id="infographic-menu-btn" className="mr-12 underline decoration-4 underline-offset-8" onClick={handleActiveMenu}>인포그래픽</Link>
              : <Link to="/infographic" id="infographic-menu-btn" className="mr-12" onClick={handleActiveMenu}>인포그래픽</Link>
          }
        </div>
        <div>
          {activeMenu == 'mypage-menu-btn'
              ? <Link to="/mypage" id="mypage-menu-btn" className="underline decoration-4 underline-offset-8" onClick={handleActiveMenu}>마이페이지</Link>
              : <Link to="/mypage" id="mypage-menu-btn" onClick={handleActiveMenu}>마이페이지</Link>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar;