import { Link, Route, Routes } from 'react-router-dom';

import './index.css';
// import * as Api from "./apis/api";

import Header from "./components/Layout/Header";
import Navbar from "./components/Layout/Navbar";
import PoiPage from "./pages/PoiPage";
import WeatherPage from "./pages/WeatherPage";
import InfographicPage from "./pages/InfographicPage";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <div className="App flex flex-col w-full h-full">
      {/* 지금은 일단 React App 컴포넌트에다가 너비 100% 높이 100%의 CSS를 적용시켜 뷰포트로 잡아주었습니다. */}
      {/* 나중에 HTML 차원에서 meta viewport를 지정하는것으로 해결해야 합니다. */}

      {/* 헤더가 최상단에 고정적으로 위치합니다.*/}
      <Header />

      {/* 그 아래에 내비게이션 바가 고정적으로 위치합니다.*/}
      <Navbar />

      {/* 실제 페이지가 여기에 표시됩니다. */}
      {/* Navbar 컴포넌트에서 링크를 통해 해당 페이지에 접근할 수 있습니다. */}
      <Routes>
        <Route path="/Poi" element={<PoiPage />}></Route>
        <Route path="/Weather" element={<WeatherPage />}></Route>
        <Route path="/Infographic" element={<InfographicPage />}></Route>
        <Route path="/Mypage" element={<MyPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
