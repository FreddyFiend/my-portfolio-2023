import React from "react";

const Experience = ({ title, date, description }) => {
  return (
    <div className="flex ">
      <h6 className="pr-2 text-base font-bold md:text-xl text-end basis-2/6 sm:basis-3/12">
        {date}
      </h6>{" "}
      <div className="relative flex flex-col border-l-2 border-gray-500 basis-4/6 sm:basis-9/12 ">
        <div className="ball w-3 h-3 rounded-full  absolute bg-gray-500 mt-2 -left-1.5" />
        <div className="flex ">
          <h6 className="px-2 mb-1 ml-4 text-base font-semibold text-white rounded-md bg-cyan-600 md:text-xl">
            {title}
          </h6>
        </div>
        <h6 className="p-1 pr-2 ml-4 text-start mb-7 md:pr-36 lg:pr-80">
          {description}
        </h6>
      </div>
    </div>
  );
};

export default Experience;
