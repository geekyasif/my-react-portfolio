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
    <div className="flex justify-between items-center w-[100%] md:w-[30%] lg:w-[32%] bg-gray-50 p-4 border rounded-md my-2">
      <img alt="img" src={imageUrl} className="w-[80px] mb-4" />
      <div>
        <p className="text-sm md:text-sm lg:text-lg font-medium">{title}</p>
        <p className="my-2 text-gray-500  text-xs lg:text-sm">{date}</p>
        <p className="font-medium text-xs lg:text-sm text-gray-500">
          See credentials
        </p>
      </div>
    </div>
  );
}

export default CertificateCard;
