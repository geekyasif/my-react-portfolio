import React from "react";
import Heading from "../Heading";
import { skills } from "../../portfolio/hero/ProfileInfo";
import SkillTag from "../../SkillTag";

function TechSkills() {
  return (
    <div className="">
      <Heading title="Tech Skills" position="" />
      <div className="flex flex-wrap">
        {skills.map((item, i) => (
          <SkillTag title={item} key={i} bgColor="bg-gray-50 text-xl" />
        ))}
      </div>
    </div>
  );
}

export default TechSkills;
