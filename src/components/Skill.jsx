import React from "react";

const Skill = ({ skills }) => {
  return (
    <ul className="   flex gap-10 justify-center">
      {skills.map((skill) => (
        <li className="  pt-2 justify-center text-center absolute ">
          <skill.icon size={42} className="" />{" "}
          <p className="   text-xl">{skill.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default Skill;
