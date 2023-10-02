import React from "react";
import { IAcademic } from "../../../typescript/UserInterfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";

function Card({
  id,
  university,
  branch,
  session,
  grade,
  image_url,
  address,
}: IAcademic) {
  return (
    <div
      key={id}
      className="flex flex-wrap p-4 rounded-lg bg-gray-50 items-start my-2 mb-4"
    >
      <div className="md:w-[15%] lg:w-[8%] pl-2 md:pt-3 lg:pl-0">
        {image_url && <img alt="img" src={image_url} className="w-[80px]" />}
        {!image_url && (
          <FontAwesomeIcon
            icon={faSchool}
            className="w-[80px] h-[50px] text-gray-500"
          />
        )}
      </div>
      <div className="p-2 md:p-4 lg:p-4 md:w-[85%] lg:w-[92%] w-full">
        <h1 className="text-lg md:text-xl lg:text-2xl font-medium ">
          {branch}
        </h1>
        <div className="flex flex-wrap justify-between items-center ">
          <p className="font-thin my-2 text-sm md:text-xl lg:text-xl">
            {university}
          </p>
          <p className="font-medium text-xs md:text-xl lg:text-xl">{session}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
