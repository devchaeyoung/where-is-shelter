import { Routes, Route, Link, Outlet } from 'react-router-dom';

import Header from "../components/Layout/Header";
import Navbar from "../components/Layout/Navbar";

const LayoutPage = () => {
  return (
    <div>
      <div className="flex flex-col">
        <header>
          <Header />
        </header>
        <nav>
          <Navbar />
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LayoutPage;