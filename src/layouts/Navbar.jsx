import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineCrown, AiOutlineMenu } from "react-icons/ai";
import { GrMoon, GrSun } from "react-icons/gr";
import { BsFillSunFill } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [l, setL] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setL(true);
    } else {
      setL(false);

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
    // Whenever the user explicitly chooses light mode

    // Whenever the user explicitly chooses dark mode
  };
  return (
    <div className="dark:bg-black dark:text-slate-200">
      <div className="flex flex-wrap justify-between items-center flex-col sm:flex-row     backdrop-blur      ">
        <div className=" px-2 flex flex-1 justify-center items-center sm:items-stretch sm:justify-start">
          <AiOutlineCrown size={48} />
        </div>

        <ul
          className={`

          ${isOpen ? "flex flex-col" : "hidden"}
          sm:flex-row sm:flex p-2 list-none items-center gap-4  sm:text-lg font-semibold uppercase hover:cursor-pointer
          `}
        >
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              to="projects"
              smooth={true}
              duration={500}
            >
              Projects{" "}
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills{" "}
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              to="education"
              smooth={true}
              duration={500}
            >
              Education{" "}
            </Link>{" "}
          </li>
          <li onClick={changeTheme} className="pr-2">
            {l ? <BsFillSunFill size={30} /> : <GrMoon size={30} />}
          </li>
        </ul>
        <button
          className=" sm:hidden absolute right-1 top-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {" "}
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>{" "}
    </div>
  );
};

export default Navbar;
