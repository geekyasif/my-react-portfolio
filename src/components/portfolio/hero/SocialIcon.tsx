import React from "react";

interface ISocialIconParams {
  imageUrl: string;
  socialUrl: string;
}

function SocialIcon({ imageUrl, socialUrl }: ISocialIconParams) {
  return (
    <div className="border p-2 rounded-lg mr-4 mb-2 md:mb-0 lg:mb-0">
      <a   rel="noreferrer" href={socialUrl} target="_blank">
        <img alt="img" src={imageUrl} className="w-[30px] h-[30px]" />
      </a>
    </div>
  );
}

export default SocialIcon;
