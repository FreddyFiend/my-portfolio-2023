import React from "react";
import Experience from "./Experience";

const experiences = [
  {
    title: "Computer Science Degree",
    date: "2019-2022",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, velit quasi, atque ipsum qui recusandae ullam ratione autem id quod consectetur neque illum doloremque sequi quibusdam. Provident commodi voluptatibus aperiam.",
  },
  {
    title: "Computer Science Degree",
    date: "2019-2022",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, velit quasi, atque ipsum qui recusandae ullam ratione autem id quod consectetur neque illum doloremque sequi quibusdam. Provident commodi voluptatibus aperiam.",
  },
  {
    title: "Computer Science Degree",
    date: "2019-2022",
    description:
      "Lorem ing elit. Esse, velit quasi, atque ipsum qui recusandae ullam ratione autem id quod consectetur neque illum doloremque sequi quibusdam. Provident commodi voluptatibus aperiam.",
  },
];

const Experiences = () => {
  return (
    <div className=" h-screen m-auto text-center p-4 py-16">
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
