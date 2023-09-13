import React from "react";
interface IHeadingProps {
  title: string;
  position: string
}
function Heading({ title , position}: IHeadingProps) {
  return <h1 className={`${position} text-xl md:text-4xl lg:text-4xl font-bold p-4 pl-2`}>{title}</h1>;
}

export default Heading;
