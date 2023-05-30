import React from "react";

const Separator = ({ title, color }) => {
  return (
    <div className="flex relative py-16 w-full ">
      <div className=" absolute text-3xl md:text-4xl font-bold translate-y-1/2  left-2">
        {title}
      </div>
      <div className={` bg-gray-300  h-1 flex-1 rounded-e-sm `}></div>
      <div
        className={`  bg-gradient-to-b from-gray-300 to-cyan-400  h-9 w-1.5 rounded-sm skew-x-[40deg] mx-3 `}
      ></div>
      <div className={` bg-cyan-400  h-1 flex-1  self-end rounded-s-sm  `}>
        {" "}
      </div>
    </div>
  );
};

export default Separator;
