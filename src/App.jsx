import { useState } from "react";
import "./App.css";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="w-screen fixed top-0 z-10 scroll-smooth">
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
