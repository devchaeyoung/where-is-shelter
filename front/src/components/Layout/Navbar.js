import { React, useState, Link, Route, Routes } from 'react';

function Navbar () {
    const [showPoi, setShowPoi] = useState()
    return (
        <div className="w-full h-20">
            <Routes>
                <Route path="../page/PoiPage" element={<PoiPage />}></Route>
                <Route path="../page/WeatherPage" element={<WeatherPage />}></Route>
                <Route path="../page/InfographicPage" element={<InfographicPage />}></Route>
                <Route path="../page/Mypage" element={<MyPage />}></Route>
            </Routes>
            <Link to="/PoiPage">극한날씨 쉼터</Link>
            <Link to="/WeatherPage">기상정보</Link>
            <Link to="/InfographicPage">인포그래픽</Link>
            <Link to="/Mypage">마이페이지</Link>
        </div>
    )
}

export default Navbar;