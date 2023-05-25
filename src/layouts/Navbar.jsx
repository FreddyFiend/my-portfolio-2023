import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const [l, setL] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Whenever the user explicitly chooses to respect the OS preference
    // localStorage.removeItem('theme')
  }, [l]);
  const changeTheme = () => {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
    setL(!l);
    console.log("yeah bpo");
    // Whenever the user explicitly chooses light mode

    // Whenever the user explicitly chooses dark mode
  };
  return (
    <div>
      <div className="flex justify-between h-10 bg-white">
        <div className=" px-2 text-2xl flex flex-1 justify-center sm:items-stretch sm:justify-start">
          King
        </div>

        <ul className="hidden sm:flex p-2 list-none items-center gap-2">
          <li onClick={changeTheme}>Certificates</li>
          <li>Skills</li>
          <li>Games</li>
          <li>Plugins </li>
          <li>Contact </li>
        </ul>
        <button
          className=" sm:hidden absolute right-1 top-2"
          onClick={toggleNavbar}
        >
          {" "}
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>{" "}
      <ul
        className={`sm:hidden  ${
          isOpen ? "block" : "hidden"
        }  p-2 list-none flex-col gap-2 `}
      >
        <li>Certificates</li>
        <li>Skills</li>
        <li>Games</li>
        <li>Plugins </li>
        <li>Contact </li>
      </ul>
    </div>
  );
};

export default Navbar;
