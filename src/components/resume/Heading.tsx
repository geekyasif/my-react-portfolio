import React from "react";

interface IHeadingProps {
  title: string;
  position?: string;
}

function Heading({ title, position = '' }: IHeadingProps) {
  return (
    <div className={`mb-6 ${position}`}>
      <div className="flex items-center gap-3">
        <div className="h-1 w-8 bg-gray-800 rounded"></div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          {title}
        </h2>
      </div>
    </div>
  );
}

export default Heading;
