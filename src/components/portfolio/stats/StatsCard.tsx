import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IStatsParams {
  icon: IconDefinition;
  title: string;
  subTitle: string;
  color: string;
}

function StatsCard({ icon, title, subTitle, color }: IStatsParams) {
  return (
    <div className="w-[100%] max-w-[49%] md:w-[49%] lg:w-[49%] flex items-center bg-gray-50 rounded-md p-2 py-4 my-2 border">
      <FontAwesomeIcon
        icon={icon}
        className={`w-[10%] text-[30px] mx-4 ${color}`}
      />
      <div className="">
        <p className="font-bold">{title}</p>
        <p className="text-gray-500 text-sm">{subTitle}</p>
      </div>
    </div>
  );
}

export default StatsCard;
