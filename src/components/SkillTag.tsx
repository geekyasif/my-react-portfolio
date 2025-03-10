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
      className={`p-1 px-3 rounded-md lg:text-xs md:text-xs text-[9px] font-medium ${bgColor}`}
    >
      {title}
    </p>
  );
}

export default SkillTag;
