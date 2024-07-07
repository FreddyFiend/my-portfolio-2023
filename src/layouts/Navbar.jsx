import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import {
  AiOutlineClose,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineMenu,
} from "react-icons/ai";
import { GrMoon } from "react-icons/gr";
import { BsFillSunFill } from "react-icons/bs";
import { LiaToolsSolid } from "react-icons/lia";
import { PiStudentBold } from "react-icons/pi";

const navItems = [
  {
    to: "home",
    toolTipContent: "Homepage",
    icon: AiOutlineHome,
  },
  {
    to: "projects",
    toolTipContent: "Projects",
    icon: AiOutlineFundProjectionScreen,
  },
  {
    to: "skills",
    toolTipContent: "Skills",
    icon: LiaToolsSolid,
  },
  {
    to: "education",
    toolTipContent: "Education",
    icon: PiStudentBold,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isThemeDark, setIsThemeDark] = useState(false);

  useEffect(() => {
    isThemeDark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [isThemeDark]);
  const changeTheme = () => {
    setIsThemeDark((prev) => !prev);
  };

  return (
    <div className="dark:bg-black dark:text-slate-200">
      <div className="flex flex-col flex-wrap items-center justify-center w-full mt-2 sm:flex-row md:px-12">
        <ul
          className={`
          ${isOpen ? "flex " : "hidden"}
          sm:flex-row sm:flex  shadow-sm rounded-lg  shadow-black list-none  justify-center items-center   sm:text-lg font-semibold uppercase hover:cursor-pointer bg-white
          `}
        >
          {navItems.map((item, index) => (
            <li
              key={index}
              className="p-2 border-r border-gray-300 hover:bg-slate-200"
              data-tooltip-id="my-tooltip"
              data-tooltip-content={item.toolTipContent}
              data-tooltip-place="bottom"
            >
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
              >
                <item.icon size={24} />
              </Link>
            </li>
          ))}

          <li
            onClick={changeTheme}
            className="p-2 hover:bg-slate-200"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Night mode"
            data-tooltip-place="bottom"
          >
            {isThemeDark ? <BsFillSunFill size={24} /> : <GrMoon size={24} />}
          </li>
        </ul>
        <button
          className="absolute sm:hidden right-1 top-1"
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
