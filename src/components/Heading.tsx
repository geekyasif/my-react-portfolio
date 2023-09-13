import React from "react";

interface IHeadingProps {
    title: string,
    buttonText: string
}


function Heading({title, buttonText}: IHeadingProps) {
  return (
    <div className="flex justify-between my-4 items-center px-2">
      <h1 className="text-2xl font-bold mt-6 mb-4">{title}</h1>
      <p className="text-blue-500 font-medium ">{buttonText}</p>
    </div>
  );
}

export default Heading;
