import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileInfo from "./ProfileInfo";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../../../context/UserProvider";

function Profile() {
  const { user } = useUser();

  return (
    <div className="md:mx-8 lg:mx-8">
      <div className="flex">
        <div className="w-[30%] md:w-[20%] lg:w-[20%] relative">
          <img
            alt="img"
            src="pro.png"
            className="w-[80px] h-[80px] md:w-[90px] md:h-[90px] lg:w-[180px] lg:h-[180px] object-fill rounded-full absolute -top-8 lg:-top-20 md:-top-10 md:-left-3 left-2 lg:left-0"
          />
        </div>
        <div className="py-3 w-[70%] md:w-[80%] lg:w-[80%]">
          <div className="flex items-center">
            <h1 className="text-lg md:text-xl lg:text-4xl font-bold pr-2">
              {user?.personal_details.first_name}{" "}
              {user?.personal_details.last_name}
            </h1>
            <p className="p-1 text-[9px] md:px-2 lg:px-4 font-medium md:text-[10px] lg:text-sm bg-blue-200 rounded text-blue-800">
              Looking for job
            </p>
          </div>
          <div>
            <h4 className="text-xs md:text-sm lg:text-lg my-2 text-gray-500">
              Full Stack Engineer | Ex - Lifease Solutions LLP
            </h4>
            <h4 className="text-xs md:text-sm lg:text-lg my-2 text-gray-400">
              <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
              {user?.personal_details.address}
            </h4>
          </div>
          <ProfileInfo />
        </div>
      </div>
    </div>
  );
}

export default Profile;
