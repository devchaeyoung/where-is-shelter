import Header from "../components/Layout/Header";
import Navbar from "../components/Layout/Navbar";

const LayoutPage = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <nav>
        <Navbar />
      </nav>
      <main>
        {children}
      </main>
    </div>
  );
};

export default LayoutPage;