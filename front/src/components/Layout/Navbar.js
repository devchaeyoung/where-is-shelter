import { React } from 'react';
import { Link, Route, Routes} from 'react-router-dom';
import PoiPage from "../../pages/PoiPage";
import WeatherPage from "../../pages/WeatherPage";
import InfographicPage from "../../pages/InfographicPage";
import MyPage from "../../pages/MyPage";


function Navbar () {
    return (
        <div className="flex flex-row w-full h-20">

            <Link to="/PoiPage">극한날씨 쉼터</Link>
            <Link to="/WeatherPage">기상정보</Link>
            <Link to="/InfographicPage">인포그래픽</Link>
            <Link to="/Mypage">마이페이지</Link>df

            <Routes>
                <Route path="/PoiPage" element={<PoiPage />}></Route>
                <Route path="/WeatherPage" element={<WeatherPage />}></Route>
                <Route path="/InfographicPage" element={<InfographicPage />}></Route>
                <Route path="/Mypage" element={<MyPage />}></Route>
            </Routes>

        </div>
    )
}

export default Navbar;