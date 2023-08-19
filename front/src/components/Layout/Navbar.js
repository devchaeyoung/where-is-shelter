import { React } from 'react';
import PoiPage from "../../pages/PoiPage";
import WeatherPage from "../../pages/WeatherPage";
import InfographicPage from "../../pages/InfographicPage";
import MyPage from "../../pages/MyPage";

function Navbar () {
    return (
        <div className="flex flex-row w-full h-20 items-center">

            <div className="flex flex-row w-full h-20 justify-between items-center px-8 font-bold text-lg">
                <div>
                    <a href="/Poi" className="mr-12 underline decoration-solid decoration-4 underline-offset-8">극한날씨 쉼터</a>
                    <a href="/Weather" className="mr-12">기상정보</a>
                    <a href="/Infographic" className="mr-12">인포그래픽</a>
                </div>
                <div>
                    <a href="/Mypage">마이페이지</a>
                </div>
            </div>
        </div>
    )
}
/*
<Routes>
<Route path="/PoiPage" element={<PoiPage />}></Route>
<Route path="/WeatherPage" element={<WeatherPage />}></Route>
<Route path="/InfographicPage" element={<InfographicPage />}></Route>
<Route path="/Mypage" element={<MyPage />}></Route>
</Routes>
*/
export default Navbar;