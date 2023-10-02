import { faBell, faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Profile() {
  return (
    <div className="flex flex-row items-center text-xl">
      <div className="flex flex-row items-center">
        <FontAwesomeIcon icon={faBoltLightning} className="text-blue-700 mr-2" />
        <p className="font-bold text-gray-500">2</p>
      </div>
      <div className="px-6">
        <FontAwesomeIcon icon={faBell} />
      </div>
      <div className="">
        <img alt="img" src="pro.png" className="h-[42px] w-[42px] rounded-full"/>
      </div>
    </div>
  );
}

export default Profile;
