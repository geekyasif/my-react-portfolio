import React from "react";
import { IAcademic } from "../../../typescript/UserInterfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

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
      className="flex gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100 hover:bg-gray-100 transition-colors"
    >
      <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-lg bg-white border border-gray-200 flex-shrink-0">
        <FontAwesomeIcon
          icon={faGraduationCap}
          className="w-6 h-6 text-gray-600"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-base md:text-lg font-semibold text-gray-900">
          {branch}
        </h3>
        <p className="text-sm text-gray-700 mt-1">{university}</p>
        <div className="flex flex-wrap items-center gap-3 mt-2 text-xs md:text-sm">
          <span className="text-gray-600">{session}</span>
          {grade && (
            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded font-medium">
              Grade: {grade}
            </span>
          )}
          {address && (
            <span className="text-gray-500">{address}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
