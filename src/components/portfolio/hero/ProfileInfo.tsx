import {
  faAddressCard,
  faBookBookmark,
  faLocation,
  faLocationDot,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillTag from "../../SkillTag";
import SocialIcon from "./SocialIcon";

export const skills = [
  "HTML 5",
  "CSS 3",
  "Javascript",
  "React.js",
  "React Native",
  "Node.js",
  "Express.js",
  "MongoDb",
  "Sql",
  "REST API's",
  "Python",
  "Firebase",
  "TailwindCss",
];

function ProfileInfo() {
  return (
    <div className="mx-6 md:m-6 lg:m-6 flex">
      <div className="w-[0%] md:w-[20%] lg:w-[20%] "></div>
      <div className="w-[100%] md:w-[80%] lg:w-[80%]">
        <div className="flex flex-wrap my-4">
          {skills.map((s, i) => (
            <SkillTag title={s} key={i} bgColor="bg-gray-100" />
          ))}
        </div>
        <hr className="my-[30px]" />

        <div className="flex flex-wrap justify-between items-center">
          <div className="flex flex-wrap">
            <SocialIcon
              imageUrl="gmail.png"
              socialUrl="www.github.com/geekyasif"
            />
            <SocialIcon
              imageUrl="github.png"
              socialUrl="www.github.com/geekyasif"
            />
            <SocialIcon
              imageUrl="linkedin.png"
              socialUrl="www.github.com/geekyasif"
            />
            <SocialIcon
              imageUrl="youtube.png"
              socialUrl="www.github.com/geekyasif"
            />
            <SocialIcon
              imageUrl="twitter.png"
              socialUrl="www.github.com/geekyasif"
            />
          </div>
          <div className="flex items-center mb-3 md:mt-0 lg:mt-0">
            <FontAwesomeIcon
              icon={faBookBookmark}
              className="border p-3 rounded-lg mr-4 bg-gray-100 text-gray-600"
            />
            <p className="bg-blue-600 text-white p-2 px-4 font-medium rounded-md">
              Contact
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
