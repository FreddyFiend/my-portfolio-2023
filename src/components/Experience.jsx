import React from "react";

const Experience = ({ title, date, description }) => {
  return (
    <div className="flex ">
      <h6 className="pr-2 text-base md:text-xl font-bold  text-end basis-2/6 sm:basis-3/12">
        {date}
      </h6>{" "}
      <div className="flex flex-col  relative border-l-2 border-gray-500 basis-4/6 sm:basis-9/12">
        <div className="ball w-3 h-3 rounded-full  absolute bg-gray-500 mt-2 -left-1.5" />
        <div className="flex ">
          <h6 className="ml-4 bg-sky-300 rounded-md px-2 mb-1 text-base md:text-xl dark:text-black font-semibold">
            {title}
          </h6>
        </div>
        <h6 className="ml-4 p-1 text-start mb-7 pr-2 md:pr-36 lg:pr-80">
          {description}
        </h6>
      </div>
    </div>
  );
};

export default Experience;
