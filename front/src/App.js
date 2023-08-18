import './index.css';
// import * as Api from "./apis/api";
import PoiPage from "./pages/PoiPage";
import WeatherPage from "./pages/WeatherPage";
import InfographicPage from "./pages/InfographicPage";
import MyPage from "./pages/MyPage";
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/PoiPage">극한날씨 쉼터</Link>
        <Link to="/WeatherPage">기상정보</Link>
        <Link to="/InfographicPage">인포그래픽</Link>
        <Link to="/Mypage">마이페이지</Link>
      </nav>

      <Routes>
        <Route path="/PoiPage" element={<PoiPage />}></Route>
        <Route path="/WeatherPage" element={<WeatherPage />}></Route>
        <Route path="/InfographicPage" element={<InfographicPage />}></Route>
        <Route path="/Mypage" element={<MyPage />}></Route>
      </Routes>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
