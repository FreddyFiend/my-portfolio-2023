import React from "react";
import Project from "./Project";
import SwpMock from "../assets/swpmock.jpg";
import DinoMock from "../assets/dinomock.jpg";
import { FaNodeJs, FaReact, FaVuejs } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNestjs,
  SiPrisma,
  SiQuasar,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const projects = [
  {
    title: "DinoCompanions",
    desc: [
      "React/TanStack Query ",
      "Refresh JWT Tokens in http-only cookie",
      "Valtio as state management",
      "Zod for react validations",
    ],
    techs: [
      { icon: FaReact, color: "text-blue-500" },
      { icon: SiTypescript, color: "text-blue-700" },
      { icon: SiNestjs, color: "text-red-600" },
      { icon: SiPrisma, color: "" },
      { icon: SiSqlite, color: "text-sky-600" },
      { icon: SiTailwindcss, color: "text-cyan-600" },
    ],
    image: DinoMock,
  },
  {
    title: "Smart Web Portal",
    desc: [
      "React/TanStack Query ",
      "Refresh JWT Tokens in http-only cookie",
      "Valtio as state management",
      "Zod for react validations",
    ],
    techs: [
      {
        icon: FaVuejs,
        color: "text-green-500 ",
      },
      { icon: SiExpress, color: "text-gray-700" },
      { icon: SiQuasar, color: "text-sky-600" },
      { icon: SiMongodb, color: "text-lime-600" },
      { icon: FaNodeJs, color: "text-green-600" },
    ],
    image: SwpMock,
  },
];
const Projects = () => {
  return (
    <ul className="flex justify-center pt-7 flex-wrap">
      {projects.map((project) => (
        <li className="p-4" key={project.title}>
          <Project
            desc={project.desc}
            title={project.title}
            techs={project.techs}
            image={project.image}
          />
        </li>
      ))}
    </ul>
  );
};

export default Projects;
