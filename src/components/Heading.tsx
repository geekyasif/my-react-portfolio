import React from "react";
import { Link } from "react-router-dom";

interface IHeadingProps {
  title: string;
  buttonText: string;
}

function Heading({ title, buttonText }: IHeadingProps) {
  return (
    <div className="flex justify-between items-center px-2">
      <h1 className="text-2xl font-bold mt-6 mb-4">{title}</h1>
      <Link className="text-blue-500 font-medium " to="/projects">
        {buttonText}
      </Link>
    </div>
  );
}

export default Heading;
