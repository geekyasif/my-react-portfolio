import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileInfo from "./ProfileInfo";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../../../context/UserProvider";

function Profile() {
  const { user } = useUser();

  return (
    <div className="md:mx-8 lg:mx-8">
      <div className="flex flex-wrap">
        <div className="mt-[-40px] ml-[10px] md:mt-[-40px] lg:mt-[-90px] rounded-full bg-white p-[2px] md:w-[18%] lg:w-[180px]">
          <img alt="img"
            src="pro.png"
            className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:w-[180px] lg:h-[180px] rounded-full"
          />
        </div>
        <div className="mt-2 md:mt-[15px] lg:mt-[15px] mx-6">
          <div className="flex items-center">
            <h1 className="text-base md:text-2xl lg:text-4xl font-bold">
              {user?.personal_details.first_name}{" "}
              {user?.personal_details.last_name}
            </h1>
            <p className="p-1 text-xs md:px-4 lg:px-4 md:py-1 font-medium md:text-sm lg:text-sm bg-green-400 rounded mx-4">
              Pro
            </p>
            <p className="p-1 text-xs md:px-4 lg:px-4 font-medium md:text-sm lg:text-sm bg-blue-200 rounded text-blue-800">
              Looking for job
            </p>
          </div>
          <div>
            <h4 className="text-xs md:text-lg lg:text-lg my-2 text-gray-500">
              Full Stack Developer | Galgotias University"24"
            </h4>
            <h4 className="text-xs md:text-lg lg:text-lg my-2 text-gray-400">
              <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
              {user?.personal_details.address}
            </h4>
          </div>
        </div>
      </div>
      <ProfileInfo />
    </div>
  );
}

export default Profile;
