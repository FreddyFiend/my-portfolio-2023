import React from "react";
// import Cards from "../components/Cards";
import Hero from "../components/Hero";

import lineSvg from "../assets/line.svg";
import line2 from "../assets/line2.svg";
import Project from "../components/Project";
import Projects from "../components/Projects";

import Separator from "../components/Separator";
import Skills from "../components/Skills";
import Experiences from "../components/Experiences";

const Homepage = () => {
  return (
    <div className="   bg-gray-100 dark:bg-black dark:text-slate-200 transition">
      <Hero id="home" />
      <Separator title={"Projects"} color={"bg-gray-400 "} />
      <Projects />
      <Separator title={"Skills"} color={"bg-gray-400"} />
      <Skills />
      <Separator title={"Education"} color={"bg-gray-400 "} />

      <Experiences />
    </div>
  );
};

export default Homepage;
