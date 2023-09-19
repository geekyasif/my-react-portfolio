import React from "react";
import Heading from "../Heading";
import { useUser } from "../../../context/UserProvider";

function About() {
  const {user} = useUser()
  return (
    <div className="my-8">
      <Heading title="About me" position="text-center" />
      <div className="p-8 bg-gray-50 rounded-lg">
        <p className="text-base md:text-lg lg:text-lg font-semi  leading-8">{user?.personal_details.about_me}</p>
        <p className="text-base md:text-lg lg:text-lg font-semi  my-6 leading-8">
          <b>Skills :</b>
          <ul>
            <li>Proficient in <b>ReactJS</b>, and <b>NodeJS</b>, <b>ExpressJS</b>, <b>MongoDB</b></li>
            <li>
              Skilled in building responsive and scalable web applications.
            </li>
            <li>Knowledgeable in <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>.</li>
            <li>
              Familiar with popular <b>libraries</b> and <b>frameworks</b> including <b>#ReactNative</b>, <b>#Redux</b>, <b>#Axios</b>, <b>#firebase</b>, <b>#TailwindCss</b>
            </li>
          </ul>
        </p>
        <button className="p-2 font-medium bg-gray-100 rounded px-4 py-2 text-black">
          Read more
        </button>
      </div>
    </div>
  );
}

export default About;
