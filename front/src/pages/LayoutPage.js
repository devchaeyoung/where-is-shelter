import { Routes, Route, Link, Outlet } from 'react-router-dom';

import Header from "../components/Layout/Header";
import Navbar from "../components/Layout/Navbar";

// 모바일 뷰포트에서의 실제 innerHeight를 뷰포트의 높이로 지정해줍니다.
const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
}

window.addEventListener("resize", documentHeight);
documentHeight();

const LayoutPage = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh]">
      {/* 지금은 일단 React App 컴포넌트에다가 너비 100% 높이 100%의 CSS를 적용시켜 뷰포트로 잡아주었습니다. */}

      <header className="flex-none">
        <Header />
      </header>
      <nav className="flex-none">
        <Navbar />
      </nav>
      <main className="grow overflow-y-auto">
        <Outlet />
      </main>

    </div>
  );
};

export default LayoutPage;