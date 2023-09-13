import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface ICertificateCardProps {
  imageUrl: string;
  title: string;
  date: string;
  credentials: string;
}

function CertificateCard({
  imageUrl,
  title,
  date,
  credentials,
}: ICertificateCardProps) {
  return (
    <div className="w-[100%] md:w-[49%] lg:w-[49%] bg-gray-50 p-4 px-8  border rounded-md  my-2">
      <img src={imageUrl} alt="" className="w-[80px] mb-4" />
      <p className="sm:text-md md:text-xl lg:text-2xl font-medium">{title}</p>
      <p className="my-2 text-gray-500 text-lg">{date}</p>
      <p className="font-medium text-lg text-gray-500">See credentials</p>
    </div>
  );
}

export default CertificateCard;
