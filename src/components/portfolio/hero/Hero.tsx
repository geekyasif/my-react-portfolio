import React from "react";
import Cover from "./Cover";
import Profile from "./Profile";

function Hero() {
  return (
    <div className="border rounded-tl-xl rounded-tr-xl rounded-xl">
      <Cover />
      <Profile />
    </div>
  );
}

export default Hero;
