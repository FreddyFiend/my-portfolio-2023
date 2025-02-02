import React, { useEffect } from "react";
// import Cards from "../components/Cards";
import Hero from "../components/Hero";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import lineSvg from "../assets/line.svg";
import line2 from "../assets/line2.svg";
import Project from "../components/Project";
import Projects from "../components/Projects";

import Separator from "../components/Separator";
import Skills from "../components/Skills";
import Academics from "../components/Academics";
import Experiences from "../components/Experiences";

const Homepage = () => {
  useEffect(() => {
    // Redirect to the desired URL
    window.location.href = "https://www.mohsinraza.dev";
  }, []);

  return (
    <div className="w-full transition bg-gray-100  dark:bg-black dark:text-slate-200">
      <Hero id="home" />
      <Separator title={"Projects"} color={"bg-gray-400 "} name="projects" />
      <Projects />
      <Separator title={"Skills"} color={"bg-gray-400"} name="skills" />
      <Skills />
      <Separator title={"Academics"} color={"bg-gray-400 "} name="education" />
      <Academics />
      <Separator title={"Experience"} color={"bg-gray-400 "} name="experience" />
      <Experiences />
      <div className="pb-12"></div>
    </div>
  );
};

export default Homepage;
