import { Link, Route, Routes } from 'react-router-dom';

import { React } from 'react';

function Navbar() {
  return (
    <div className="flex flex-row w-full h-20 items-center">

      <div className="flex flex-row w-full h-20 justify-between items-center px-8 font-bold text-lg">
        <div>
          <Link to="/poi" className="mr-12 underline decoration-solid decoration-4 underline-offset-8">극한날씨 쉼터</Link>
          <Link to="/weather" className="mr-12">기상정보</Link>
          <Link to="/infographic" className="mr-12">인포그래픽</Link>
        </div>
        <div>
          <Link to="/mypage">마이페이지</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;