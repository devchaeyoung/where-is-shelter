import { React, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

function menuStyleToggle () {
}

function Navbar() {
  return (
    <div className="flex flex-row w-full h-20 items-center">

      <div className="flex flex-row w-full justify-between items-center px-8 font-bold text-lg">
        <div>
          <Link to="/poi" id="1" className="mr-12">극한날씨 쉼터</Link>
          <Link to="/weather" id="2" className="mr-12">기상정보</Link>
          <Link to="/infographic" id="3" className="mr-12">인포그래픽</Link>
        </div>
        <div>
          <Link to="/mypage" id="4">마이페이지</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;