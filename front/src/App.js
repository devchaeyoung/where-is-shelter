import { Routes, Route, Link, Outlet } from 'react-router-dom';

import './index.css';
// import * as Api from "./apis/api";

import LayoutPage from "./pages/LayoutPage";
import PoiPage from "./pages/PoiPage";
import WeatherPage from "./pages/WeatherPage";
import InfographicPage from "./pages/InfographicPage";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path="/poi" element={<PoiPage />}></Route>
          <Route path="/weather" element={<WeatherPage />}></Route>
          <Route path="/infographic" element={<InfographicPage />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
        </Route>
      </Routes>
    
    </div>
  );
}

export default App;
