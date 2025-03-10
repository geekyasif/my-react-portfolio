import React from "react";

interface ISocialIconParams {
  imageUrl: string;
  socialUrl: string;
}

function SocialIcon({ imageUrl, socialUrl }: ISocialIconParams) {
  return (
    <div className="border md:p-2 lg:p-2 p-1 rounded-lg mr-4 mb-2 md:mb-0 lg:mb-0">
      <a rel="noreferrer" href={socialUrl} target="_blank">
        <img
          alt="img"
          src={imageUrl}
          className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] md:w-[20px] md:h-[20px]"
        />
      </a>
    </div>
  );
}

export default SocialIcon;
