import React from "react";

const Separator = ({ title, color, name }) => {
  return (
    <div className="relative flex w-full py-16 " name={name}>
      <div className="absolute z-10 text-3xl font-bold text-center uppercase left-4 w-full ">
        {title}
      </div>
      {/* <div className={` bg-gray-300  h-1 flex-1 rounded-e-sm `}></div> */}
      {/* <div
        className={`  bg-gradient-to-b from-gray-300 to-cyan-400  h-9 w-1.5 rounded-sm skew-x-[40deg] mx-3 `}
      ></div>  */}
      {/* <div
        className={`  bg-gradient-to-b from-cyan-900 to-cyan-400 bg-cyan-400  h-10  w-1/2 rounded-sm skew-x-[40deg] `}
      ></div> */}
      {/* <div
        className={`  bg-cyan-600   h-10  w-1/2 rounded-sm skew-x-[40deg] `}
      ></div>
      <div
        className={`  bg-cyan-600  h-10  w-1.5 rounded-sm skew-x-[40deg] ml-2 `}
      ></div>
      <div
        className={`  bg-cyan-600  h-10  w-1.5 rounded-sm skew-x-[40deg] ml-2 `}
      ></div>
      <div
        className={`  bg-cyan-600  h-10  w-1.5 rounded-s-sm skew-x-[40deg] ml-1.5 mr-3  `}
      ></div>
      <div className={` bg-cyan-600  h-1 flex-1  self-end   `}> </div> */}
    </div>
  );
};

export default Separator;
