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
  "Javascript",
  "Typescript",
  "React.js",
  "Next.js",
  "Jest",
  "TailwindCss",
  "Node.js",
  "Express.js",
  "MongoDb",
  "Sql",
  "REST API's",
  "Firebase",
  "Python",
  "Git Flow",
];

function ProfileInfo() {
  return (
    <div className="flex">
      <div className="">
        <div className="flex flex-wrap py-2 border-b gap-1 lg:gap-3 md:gap-2">
          {skills.map((s, i) => (
            <SkillTag title={s} key={i} bgColor="bg-gray-100" />
          ))}
        </div>
        <div className="flex flex-wrap justify-between items-center pt-2">
          <div className="flex flex-wrap">
            <SocialIcon
              imageUrl="gmail.png"
              socialUrl="mailto:mohdasif.dev@gmail.com"
            />
            <SocialIcon
              imageUrl="github.png"
              socialUrl="https://www.github.com/geekyasif"
            />
            <SocialIcon
              imageUrl="linkedin.png"
              socialUrl="https://www.linkedin.com/in/mohdasif10/"
            />
            <SocialIcon
              imageUrl="youtube.png"
              socialUrl="https://www.github.com/geekyasif"
            />
            <SocialIcon
              imageUrl="twitter.png"
              socialUrl="https://www.github.com/geekyasif"
            />
          </div>
          {/* <div className="flex items-center mb-3 md:mt-0 lg:mt-0">
            <FontAwesomeIcon
              icon={faBookBookmark}
              className="border p-3 rounded-lg mr-4 bg-gray-100 text-gray-600"
            />
            <p className="bg-blue-600 text-white p-2 px-4 font-medium rounded-md md:text-sm text-xs lg:text-base">
              Contact
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
