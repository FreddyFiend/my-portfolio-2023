import React from "react";
import Experience from "./Experience";

const experiences = [
  {
    title: "Vue.js & Quasar Developer at Unduit",
    date: "Oct 2023 - Jan 2024",
    description:
      "Developed Marketplace app, Marketplace Configuration app, App store, Bulk upload app, and Cart app with strict attention to details of Figma designs",
  },
];

const Experiences = () => {
  return (
    <div className=" pb-8 m-auto text-center px-4 ">
      <ol>
        {experiences.map((e) => (
          <li key={e.title}>
            <Experience
              title={e.title}
              description={e.description}
              date={e.date}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Experiences;
