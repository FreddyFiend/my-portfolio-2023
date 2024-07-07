import React from "react";

// import EvanImg from "../../assets/evan.jpg";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsYoutube,
  BsPersonFill,
} from "react-icons/bs";
import { Link } from "react-scroll";
// import "./index.css";
const Hero = () => {
  const name = "";
  return (
    <div>
      <div
        name="home"
        className="flex items-start justify-center w-full h-screen "
      >
        <div className="absolute w-full ">
          <img
            src="vynl.svg"
            alt=""
            srcset=""
            className="absolute object-cover scale-50 -right-64 -top-4 "
          />{" "}
        </div>
        <div className="flex flex-col items-center justify-center h-full hero-section sm:flex-row gap-11">
          <div className="flex flex-col justify-between h-64 max-w-md py-4 text-center sm:text-start ">
            <div className="text-start">
              <h3 className="pt-4 text-3xl font-bold rotator sm:pt-0 ">
                Mohsin Raza
              </h3>
              <p className="pt-2 ">
                Creating scalable, efficient web applications with user-focused
                UX and robust security
              </p>
            </div>
            <div className="flex justify-center gap-1 pt-2 justify-self-end sm:justify-start">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="duration-150 border border-gray-300 rounded-lg shadow-sm cursor-pointer shadow-gray-500 hover:bg-gray-200"
              >
                <div className="px-3 py-1">CONTACT</div>
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="text-white transition-colors duration-150 bg-gray-900 border border-gray-400 rounded-lg shadow-sm cursor-pointer shadow-gray-500 hover:bg-gray-700 "
              >
                <div className="px-3 py-1 ">SEE PROJECTS</div>
              </Link>
            </div>
          </div>
          <div className="flex">
            <img
              src="profile.png"
              alt=""
              srcset=""
              className="w-64 h-64 bg-gray-200 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
