import React from "react";
import { IExperience } from "../../../typescript/UserInterfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faCircleDot,
  faDotCircle,
  faListDots,
} from "@fortawesome/free-solid-svg-icons";
import SkillTag from "../../SkillTag";

function Card({
  id,
  role,
  company,
  employment_type,
  duration,
  location,
  image_url,
  responsibilities,
  skills,
}: IExperience) {
  return (
    <div
      key={id}
      className="flex flex-col md:flex-row lg:flex-row p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 my-3 mb-4"
    >
      <div className="flex items-start gap-4 md:gap-6 lg:gap-8 w-full">
        <div className="hidden md:flex lg:flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 flex-shrink-0">
          <FontAwesomeIcon
            icon={faBuilding}
            className="w-8 h-8 text-gray-600"
          />
        </div>
        <div className="flex-1 w-full">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-1">
                {role}
              </h3>
              <p className="text-base md:text-lg text-gray-700 font-medium">
                {company}
              </p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-50 rounded-full border border-blue-200">
                {employment_type}
              </span>
              <p className="text-sm text-gray-600 font-medium">
                {duration}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-3 text-gray-500">
            <FontAwesomeIcon icon={faCircleDot} className="text-[6px]" />
            <p className="text-sm">{location}</p>
          </div>
          <div className="mt-4 space-y-2">
            {responsibilities.map((item, index) => (
              <div key={index} className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 items-center mt-4">
            {skills.length > 0 &&
              skills?.map((skill: string, index: number) => (
                <SkillTag title={skill} key={index} bgColor="bg-gray-50" />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
