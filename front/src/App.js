import './index.css';
// import * as Api from "./apis/api";

import Header from "./components/Layout/Header";
import Navbar from "./components/Layout/Navbar";

import PoiPage from "./pages/PoiPage";
import WeatherPage from "./pages/WeatherPage";
import InfographicPage from "./pages/InfographicPage";
import MyPage from "./pages/MyPage";
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />

      <Routes>
        <Route path="/PoiPage" element={<PoiPage />}></Route>
        <Route path="/WeatherPage" element={<WeatherPage />}></Route>
        <Route path="/InfographicPage" element={<InfographicPage />}></Route>
        <Route path="/Mypage" element={<MyPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
