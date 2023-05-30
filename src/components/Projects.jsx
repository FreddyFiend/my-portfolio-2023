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
      { title: "React", icon: FaReact, color: "text-blue-500" },
      { title: "TypeScript", icon: SiTypescript, color: "text-blue-700" },
      { title: "NestJS", icon: SiNestjs, color: "text-red-600" },
      { title: "Prisma", icon: SiPrisma, color: "" },
      { title: "SQLite", icon: SiSqlite, color: "text-sky-600" },
      { title: "Tailwindcss", icon: SiTailwindcss, color: "text-cyan-600" },
    ],
    image: DinoMock,
  },
  {
    title: "Smart Web Portal",
    desc: [
      "File System",
      "Various user roles",
      "Lectures, PDFs/PPTs, assignments",
      "Simplest design",
    ],
    techs: [
      {
        title: "VueJS",
        icon: FaVuejs,
        color: "text-green-500 ",
      },
      { title: "ExpressJS", icon: SiExpress, color: "text-gray-400" },
      { title: "QuasarJS", icon: SiQuasar, color: "text-sky-600" },
      { title: "MongoDB", icon: SiMongodb, color: "text-lime-600" },
      { title: "NodeJS", icon: FaNodeJs, color: "text-green-600" },
    ],
    image: SwpMock,
  },
];
const Projects = () => {
  return (
    <ul className="flex justify-center  flex-wrap" name="projects">
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
