import React from "react";

interface ISkillTagParams {
  title: string;
  key: number;
  bgColor: string;
}

function SkillTag({ title, key, bgColor }: ISkillTagParams) {
  return (
    <span
      key={key}
      className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium border border-gray-200 bg-white text-gray-700 shadow-sm hover:shadow transition-all duration-200 ${bgColor.includes('bg-') ? bgColor : ''}`}
    >
      {title}
    </span>
  );
}

export default SkillTag;
