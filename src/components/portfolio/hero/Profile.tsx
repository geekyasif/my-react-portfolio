import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileInfo from "./ProfileInfo";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../../../context/UserProvider";

function Profile() {
  const { user } = useUser();

  return (
    <div className="md:mx-8 lg:mx-8 -mt-16 md:-mt-20 lg:-mt-24 relative z-10">
      <div className="flex flex-col md:flex-row lg:flex-row gap-4 md:gap-6 lg:gap-8">
        <div className="flex justify-center md:justify-start">
          <img
            alt="img"
            src="pro.png"
            className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 object-cover rounded-full ring-4 ring-white shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              {user?.personal_details.first_name}{" "}
              {user?.personal_details.last_name}
            </h1>
            <span className="px-3 py-1 text-xs md:text-sm font-medium bg-emerald-100 text-emerald-800 rounded-full border border-emerald-200">
              Open to opportunities
            </span>
          </div>
          <div className="mt-3 space-y-2">
            <h4 className="text-sm md:text-base lg:text-lg text-gray-700 font-medium">
              Software Engineer at Pickwatch | Vue.js, React Native, Node.js Expert
            </h4>
            <h4 className="text-sm md:text-base text-gray-500 flex items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} className="text-gray-400" />
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
