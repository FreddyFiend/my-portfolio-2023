import React from "react";

// import EvanImg from "../../assets/evan.jpg";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsYoutube,
  BsPersonFill,
} from "react-icons/bs";
// import "./index.css";
const Hero = () => {
  const name = "";
  return (
    <div
      name="home"
      className="flex items-center justify-center h-screen max-w-2xl mx-auto "
    >
      <div className="flex flex-col items-center justify-center hero-section sm:flex-row gap-11">
        <div className="max-w-md pl-4 text-center sm:text-start">
          <h3 className="pt-4 font-mono text-3xl font-bold rotator sm:pt-0 ">
            Full-Stack Web Developer
          </h3>
          <p className="pt-2 font-mono">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, qui
            cum enim autem rerum, dolor ad nihil accusantium blanditiis officiis
            perferendis voluptatibus dolores laudantium esse repellat dolorem
            suscipit earum corrupti?
          </p>
          <div className="flex justify-center gap-1 pt-2 sm:justify-start">
            <div className="btn">CONTACT</div>
            <div className="btn btn-cyan">SEE PROJECTS</div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-12 rounded-full sm:bg-cyan-600 dark:text-black">
          {" "}
          <BsPersonFill size={48 + 24 + 24} className="" />
          {/* <img
          className="w-48 h-48 rounded-full "
          src={EvanImg}
          alt="face"
          srcset=""
        /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
