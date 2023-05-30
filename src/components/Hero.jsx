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
      className=" mx-auto  h-screen flex justify-center items-center max-w-2xl"
    >
      <div className="hero-section sm:flex-row flex flex-col justify-center items-center gap-11">
        <div className="text-center sm:text-start max-w-md pl-4">
          <h3 className="rotator font-mono pt-4 sm:pt-0 text-3xl font-bold ">
            Full-Stack Web Developer
          </h3>
          <p className="font-mono  pt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, qui
            cum enim autem rerum, dolor ad nihil accusantium blanditiis officiis
            perferendis voluptatibus dolores laudantium esse repellat dolorem
            suscipit earum corrupti?
          </p>
          <div className="flex justify-center sm:justify-start pt-2 gap-1">
            <div className="btn">CONTACT</div>
            <div className="btn  btn-cyan">SEE PROJECTS</div>
          </div>
        </div>

        <div className="sm:bg-cyan-300 dark:text-black flex flex-col justify-center items-center  rounded-full p-12">
          {" "}
          <BsPersonFill size={48 + 24 + 24} className="" />
          {/* <img
          className="h-48 w-48 rounded-full "
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
