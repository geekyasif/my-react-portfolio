import React from "react";

interface ICardProps {
  id: number;
  role: string;
  office: string;
  from: string;
  to: string;
  imageUrl: string;
  description: string;
}

function Card({
  id,
  imageUrl,
  role,
  office,
  from,
  to,
  description,
}: ICardProps) {
  return (
    <div
      key={id}
      className="flex flex-wrap p-4 rounded-lg bg-gray-50 items-start my-2 mb-4"
    >
      <div className="md:w-[15%] lg:w-[8%] pl-2 md:pt-3 lg:pl-0">
        <img src={imageUrl} className="w-[80px]" />
      </div>
      <div className="p-2 md:p-4 lg:p-4 md:w-[85%] lg:w-[92%]">
        <h1 className="text-lg md:text-xl lg:text-2xl font-medium ">{role}</h1>
        <div className="flex flex-wrap justify-between items-center">
          <p className="font-thin my-2 text-xs md:text-xl lg:text-xl">
            {office}
          </p>
          <p className="font-medium text-xs md:text-xl lg:text-xl">
            {from} - {to}
          </p>
        </div>
        <p className="my-4 leading-7 text-sm md:text-lg lg:text-lg text-gray-800 font-light">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
