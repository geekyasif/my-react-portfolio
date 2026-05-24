import React from "react";
import Heading from "../Heading";
import { skills } from "../../portfolio/hero/ProfileInfo";
import SkillTag from "../../SkillTag";

function TechSkills() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <Heading title="Tech Skills" position="" />
      <div className="flex flex-wrap gap-2">
        {skills.map((item, i) => (
          <SkillTag title={item} key={i} bgColor="bg-gray-50" />
        ))}
      </div>
    </div>
  );
}

export default TechSkills;
