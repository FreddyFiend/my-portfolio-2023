import React from "react";
import Project from "./Project";
import SwpMock from "../assets/swpmock.jpg";
import DinoMock from "../assets/dinomock.jpg";
import Jokes from "../assets/jokes.png";
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
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";

const projects = [
  {
    title: "9JOKES",
    desc: [
      "9GAG Clone",
      "O-Auth with Google",
      "Upvoting, comments, and categories",
      "User Profiles with Upvotes and Uploads",
      "Modern responsive layout",
    ],
    techs: [
      { title: "Next.js", icon: SiNextdotjs, color: "text-black-900" },
      { title: "TypeScript", icon: SiTypescript, color: "text-blue-700" },
      { title: "Prisma", icon: SiPrisma, color: "" },
      { title: "Postgres", icon: SiPostgresql, color: "" },
      { title: "Tailwindcss", icon: SiTailwindcss, color: "text-cyan-600" },
    ],
    image: Jokes,
    code: "https://github.com/FreddyFiend/9jokes",
    demo: "https://9jokes.vercel.app",
  },
  {
    title: "DinoCompanions",
    desc: [
      "E-Commerce for Dino-Pets",
      "Stripe Integration",
      "React/TanStack Query",
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
    code: "https://github.com/FreddyFiend/dino-companions",
    demo: "https://dino-companions.onrender.com",
  },
  {
    title: "Smart Web Portal",
    desc: [
      "Learning Management Portal",
      "File System",
      "Various user roles",
      "Lectures, PDFs/PPTs, assignments",
      "Material Design",
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

    code: "https://github.com/FreddyFiend/smart-web-portal",
    demo: "https://smart-web-portal.onrender.com",
  },
];
const Projects = () => {
  return (
    // <ul className="grid justify-center md:grid-cols-2" name="projects">
    //   {projects.map((project) => (
    //     <li className="p-4" key={project.title}>
    //       <Project
    //         desc={project.desc}
    //         title={project.title}
    //         techs={project.techs}
    //         image={project.image}
    //       />
    //     </li>
    //   ))}
    // </ul>

    <ul className="grid justify-center overflow-hidden ">
      {projects.map((project) => (
        <li className="w-full p-4 " key={project.title}>
          <Project
            desc={project.desc}
            title={project.title}
            techs={project.techs}
            image={project.image}
            code={project.code}
            demo={project.demo}
          />
        </li>
      ))}
    </ul>
  );
};

export default Projects;
