import { useState } from "react";
import "./App.css";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import { Outlet } from "react-router-dom";
import { Tooltip } from "react-tooltip";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Tooltip id="my-tooltip" className="z-30 " />
      <header className="fixed top-0 z-10 w-screen scroll-smooth">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
