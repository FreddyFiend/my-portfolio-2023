import React from "react";
import Skill from "./Skill";
import { BsFillDatabaseFill, BsDisplayFill } from "react-icons/bs";
import {
  FaServer,
  FaNodeJs,
  FaFlask,
  FaReact,
  FaVuejs,
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";
import {
  SiExpress,
  SiNestjs,
  SiPrisma,
  SiSqlite,
  SiMongodb,
  SiSequelize,
  SiQuasar,
  SiVisualstudio,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import { AiFillHtml5, AiOutlineDesktop, AiFillGithub } from "react-icons/ai";
import { DiNetbeans } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { SiTailwindcss } from "react-icons/si";

// const skills = [
//   {
//     icon: BsDisplayFill,
//     title: "Frontend",
//     skills: [
//       { icon: FaReact, title: "React" },
//       { icon: FaVuejs, title: "Vue.JS" },
//       { icon: SiQuasar, title: "Quasar JS" },
//       { icon: AiFillHtml5, title: "HTML5" },
//       { icon: FaCss3Alt, title: "CSS3" },
//       { icon: FaFigma, title: "Figma" },
//     ],
//   },
//   {
//     icon: FaServer,
//     title: "Backend",
//     skills: [
//       { icon: FaNodeJs, title: "NodeJS" },
//       { icon: SiExpress, title: "ExpressJS" },
//       { icon: SiNestjs, title: "NestJS" },
//       { icon: FaFlask, title: "Flask" },
//     ],
//   },
//   {
//     icon: BsFillDatabaseFill,
//     title: "Database & ORM",
//     skills: [
//       { icon: SiPrisma, title: "PrismaORM" },
//       { icon: GrMysql, title: "MySQL" },
//       { icon: SiSqlite, title: "SQLite" },
//       { icon: SiSequelize, title: "SequelizeORM" },
//       { icon: SiMongodb, title: "MongoDB " },
//     ],
//   },

//   {
//     icon: AiOutlineDesktop,
//     title: "Desktop Apps",
//     skills: [
//       { icon: SiQt, title: "PyQt5" },
//       { icon: SiVisualstudio, title: "Visual Studio" },
//       { icon: DiNetbeans, title: "Netbeans" },
//     ],
//   },
// ];

const skills = [
  { icon: FaReact, title: "React" },
  { icon: FaPython, title: "Python" },
  { icon: SiJavascript, title: "Javascript" },
  { icon: SiTypescript, title: "Typescript" },
  { icon: SiNextdotjs, title: "Next.js" },
  { icon: FaVuejs, title: "Vue.JS" },
  { icon: AiFillGithub, title: "Github" },
  { icon: FaGitAlt, title: "Git" },
  { icon: SiPrisma, title: "PrismaORM" },
  { icon: GrMysql, title: "MySQL" },
  { icon: SiSqlite, title: "SQLite" },
  { icon: SiSequelize, title: "SequelizeORM" },
  { icon: SiMongodb, title: "MongoDB " },
  { icon: FaNodeJs, title: "NodeJS" },
  { icon: SiExpress, title: "ExpressJS" },
  { icon: SiNestjs, title: "NestJS" },
  { icon: FaFlask, title: "Flask" },
  { icon: SiQuasar, title: "Quasar" },
  { icon: AiFillHtml5, title: "HTML5" },
  { icon: FaCss3Alt, title: "CSS3" },
  { icon: FaFigma, title: "Figma" },
  { icon: SiTailwindcss, title: "TailwindCSS" },
];

const Skills = () => {
  return (
    <ul
     
      className="grid grid-cols-3 gap-12 md:grid-cols-6 sm:grid-cols-4"
    >
      {skills.map((s) => (
        <li key={s.title} className="flex flex-col items-center ">
          <s.icon
            className={` text-[50px] sm:text-[70px] md:text-[90px] opacity-40`}
          />{" "}
          <p className="pt-2 text-base md:text-xl">{s.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default Skills;
