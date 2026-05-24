import React from "react";
import Heading from "../Heading";
import { useUser } from "../../../context/UserProvider";

function About() {
  const {user} = useUser()
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <Heading title="About Me" position="" />
      <p className="text-base md:text-lg leading-relaxed text-gray-700">
        {user?.personal_details.about_me}
      </p>
      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-800">Email:</span>
            <a href={`mailto:${user?.personal_details.email}`} className="text-blue-600 hover:underline">
              {user?.personal_details.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-800">Location:</span>
            <span>{user?.personal_details.address}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
