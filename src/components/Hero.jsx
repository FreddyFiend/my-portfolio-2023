import React from "react";

// import EvanImg from "../../assets/evan.jpg";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
// import "./index.css";
const Hero = () => {
  const name = "";
  return (
    <div className=" mx-auto sm:flex-row flex flex-col justify-center h-screen items-center max-w-2xl">
      <div className="sm:bg-slate-300 rounded-md p-4">
        {/* <img
          className="h-48 w-48 rounded-full "
          src={EvanImg}
          alt="face"
          srcset=""
        /> */}
      </div>
      <div className="text-center sm:text-start max-w-md ">
        <h3 className="rotator font-mono pt-4 sm:pt-0 pl-4 text-3xl font-bold ">
          Full-Stack Web Developer
        </h3>
        <p className="font-mono pl-4 pt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, qui cum
          enim autem rerum, dolor ad nihil accusantium blanditiis officiis
          perferendis voluptatibus dolores laudantium esse repellat dolorem
          suscipit earum corrupti?
        </p>
        <div className="flex justify-center sm:justify-start">
          <BsFacebook className="mt-4 mx-4" size={24} />
          <BsTwitter className="mt-4 mx-4" size={24} />
          <BsInstagram className="mt-4 mx-4" size={24} />
          <BsYoutube className="mt-4 mx-4" size={24} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
