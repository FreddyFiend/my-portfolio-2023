import React from "react";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

const Project = ({ title, desc, techs, image, demo, code }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row p-4 bg-white rounded-md shadow-md dark:bg-gray-900 dark:text-white">
        {" "}
        <img
          src={image}
          alt=""
          className="object-cover h-[250px] md:w-[350px] rounded-md basis-1/2"
        />
        <div className="flex flex-col items-center justify-center pt-4 md:flex-row rounded-2xl basis-1/2">
          {" "}
          <div className="content pl-4 flex flex-col min-h-[250px] justify-between   ">
            <h3 className="pt-4 text-2xl font-bold md:text-3xl md:pt-0 ">
              {title}
            </h3>
            <ul className="">
              {desc.map((line) => (
                <li className="md:font-semibold " key={line}>
                  • {line}
                </li>
              ))}
            </ul>
            <div className="flex gap-2 pt-3 ">
              <a href={code}>
                <button className="flex items-center gap-2 btn ">
                  Code <AiOutlineLink size={24} />{" "}
                </button>
              </a>

              <a href={demo}>
                <button className="flex items-center gap-2 btn btn-cyan ">
                  Demo <AiOutlineGithub size={24} />{" "}
                </button>
              </a>
            </div>{" "}
            <ul className="flex flex-wrap justify-between w-full gap-2 pt-8 basis-full">
              {techs.map((Tech, idx) => (
                <li
                  key={idx}
                  className="cursor-pointer"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={Tech.title}
                  data-tooltip-place="top"
                  name={Tech.title}
                >
                  <Tech.icon className={`text-3xl md:text-4xl ${Tech.color}`} />
                </li>
              ))}
            </ul>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Project;
