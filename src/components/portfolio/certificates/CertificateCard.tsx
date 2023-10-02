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
    <div className="w-[100%] max-w-[49%] md:w-[49%] lg:w-[49%] bg-gray-50 p-4 px-8  border rounded-md  my-2">
      <img alt="img" src={imageUrl} className="w-[80px] mb-4" />
      <p className="text-bae md:text-xl lg:text-2xl font-medium">{title}</p>
      <p className="my-2 text-gray-500  text-sm lg:text-lg">{date}</p>
      <p className="font-medium text-xs lg:text-lg text-gray-500">
        See credentials
      </p>
    </div>
  );
}

export default CertificateCard;
