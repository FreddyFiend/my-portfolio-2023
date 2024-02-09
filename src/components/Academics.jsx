import React from "react";
import Experience from "./Experience";

const experiences = [
  {
    title: "Pre-Engineering",
    date: "2016-2018",
    description:
      "Graduated from Govt Pilot Higher Secondary School Larkana in July 2018 with grade 'A'.",
  },
  {
    title: "Bachelor's of Computer Science",
    date: "2019-2022",
    description:
      "Graduated from University of Sindh, Larkana Campus with Bachelor's of science in Computer science degree with GPA of 3.18 out of 4.00. ",
  },
  {
    title: "Artificial Intelligence Course",
    date: "Nov 2021 - Feb 2022",
    description:
      "Completed short course on Artificial Intelligence at ZabTech Larkana.",
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
