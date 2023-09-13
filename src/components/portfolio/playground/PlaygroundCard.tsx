import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface IPlaygroundCardParams {
  title: string;
  skill: string;
  time: string;
  imageUrl: string;
}

function PlaygroundCard({
  title,
  skill,
  time,
  imageUrl,
}: IPlaygroundCardParams) {
  return (
    <div className="w-[100%] md:w-[49%] lg:w-[49%] rounded-lg flex p-4  my-2 bg-gray-50 border">
      <img src={imageUrl} className="mr-4 w-[60px] h-[60px] object-contain" />
      <div className="">
        <p className="text-xl md:text-2xl lg:text-2xl font-medium ">{title}</p>
        <div className="flex flex-wrap items-center">
          <p className="my-2 text-gray-500 text-xs md:text-base lg:text-xl">{skill}</p>
          <span className="w-[5px] h-[5px] rounded-full bg-black mx-2"></span>
          <p className="text-gray-500 text-xs md:text-base lg:text-xl">{time} min ago</p>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="absolute flex">
            <img src="pro.jpeg" className="w-[25px] md:w-[25px] lg:w-[30px] rounded-full  " />
            <div className="w-[25px] md:w-[25px] lg:w-[30px rounded-full p-[2px] bg-white relative right-1">
              <img src="pro.jpeg" className="w-[25px] md:w-[25px] lg:w-[30px rounded-full" />
            </div>
          </div>
          <p className="text-gray-500 relative left-14 md:left-16 lg:left-16 text-xs md:text-xs lg:text-base">
            Shared with{" "}
            <span className="text-gray-600 font-semibold">Adam</span>,{" "}
            <span className="text-gray-600 font-semibold">Anna...</span> +7 more
          </p>
        </div>
      </div>
    </div>
  );
}

export default PlaygroundCard;
