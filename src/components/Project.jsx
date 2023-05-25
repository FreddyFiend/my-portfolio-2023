import React from "react";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import Separator from "./Separator";
const Project = ({ title, desc, techs, image }) => {
  return (
    <div>
      <div className="flex flex-col bg-white shadow-md dark:bg-gray-900 dark:text-white p-4 rounded-md">
        {" "}
        <ul className="flex flex-wrap gap-2 justify-between  py-4 basis-full w-full">
          {techs.map((Tech) => (
            <li key={Tech}>
              <Tech.icon className={`text-3xl md:text-4xl ${Tech.color}`} />
            </li>
          ))}
        </ul>
        <div className="flex flex-col md:flex-row justify-center items-center    rounded-2xl pt-4">
          {" "}
          <img
            src={image}
            alt=""
            className="object-cover h-[250px] rounded-md basis-1/2"
          />
          <div className="content pl-4 flex flex-col min-h-[250px] justify-between   basis-1/2">
            <h3 className="text-2xl md:text-3xl font-bold  pt-4 md:pt-0 ">
              {title}
            </h3>
            <ul className=" ">
              {desc.map((line) => (
                <li className="md:font-semibold " key={line}>
                  • {line}
                </li>
              ))}
            </ul>
            <div className="flex gap-2 pt-3  ">
              <button className="btn btn-lime flex items-center gap-2 ">
                Source Code <AiOutlineLink size={24} />{" "}
              </button>
              <button className="btn  btn-lime flex items-center gap-2 ">
                Demo <AiOutlineGithub size={24} />{" "}
              </button>
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Project;
