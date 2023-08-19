import { Link, Route, Routes } from 'react-router-dom';

import './index.css';
// import * as Api from "./apis/api";

import LayoutPage from "./pages/LayoutPage";

function App() {
  return (
    <div className="App flex flex-col w-full h-full">
      {/* 지금은 일단 React App 컴포넌트에다가 너비 100% 높이 100%의 CSS를 적용시켜 뷰포트로 잡아주었습니다. */}
      {/* 나중에 HTML 차원에서 meta viewport를 지정하는것으로 해결해야 합니다. */}

      <Routes>
        <Route path="/" element={<LayoutPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
