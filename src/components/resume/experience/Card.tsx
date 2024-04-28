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
      className="flex flex-wrap p-4 rounded-lg bg-gray-50 items-start my-2 mb-4"
    >
      <div className="md:w-[15%] lg:w-[8%] pl-2 md:pt-3 lg:pl-0">
        {/* {image_url && (
          <img src={image_url} className="w-[80px]" alt={company} />
        )} */}
        {
          <FontAwesomeIcon
            icon={faBuilding}
            className="w-[80px] h-[50px] text-gray-500"
          />
        }
      </div>
      <div className="p-2 md:p-4 lg:p-4 md:w-[85%] lg:w-[92%]">
        <h1 className="text-lg md:text-xl lg:text-2xl font-medium ">
          {role} at {company}
        </h1>
        <div className="flex flex-wrap justify-between items-center">
          <p className="font-thin my-2 text-xs md:text-xl lg:text-xl">
            {location}
          </p>
          <p className="font-medium text-xs md:text-xl lg:text-xl">
            {duration}
          </p>
        </div>
        <div>
          {responsibilities.map((item) => (
            <div className="flex gap-2 items-center py-1">
              <div className="w-[5%] flex items-center justify-center">
                <FontAwesomeIcon icon={faCircleDot} className="text-[6px]" />
              </div>

              <div className="w-[95%] flex items-center">
                <p className="leading-7 text-sm md:text-lg lg:text-lg text-gray-800 font-light">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 flex-wrap items-center">
          <p className="my-2 font-bold">Skills:</p>
          {skills.length > 0 &&
            skills?.map((skill: string, index: number) => (
              <SkillTag title={skill} key={index} bgColor="bg-[#F3F4F6]" />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
