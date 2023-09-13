import React from "react";

interface ISkillTagParams {
  title: string;
  key: number;
  bgColor: string;
}

function SkillTag({ title, key, bgColor }: ISkillTagParams) {
  return (
    <p
      key={key}
      className={`px-3 p-2 mr-4 rounded-md text-xs md:text-sm lg:text-sm  font-semi my-1 ${bgColor}`}
    >
      {title}
    </p>
  );
}

export default SkillTag;
