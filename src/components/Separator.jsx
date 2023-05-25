import React from "react";

const Separator = ({ title, color }) => {
  return (
    <div className="flex relative pt-3 w-full ">
      <div className=" absolute text-3xl md:text-4xl font-bold translate-y-1/2  left-2">
        {title}
      </div>
      <div className={` ${color}  h-2 flex-1 rounded-e-sm `}></div>
      <div
        className={` ${color}  h-9 w-2 rounded-sm skew-x-[40deg] mx-2 `}
      ></div>
      <div className={` ${color}  h-2 flex-1  self-end rounded-s-sm  `}> </div>
    </div>
  );
};

export default Separator;
