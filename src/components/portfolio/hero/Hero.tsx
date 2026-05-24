import React from "react";
import Cover from "./Cover";
import Profile from "./Profile";

function Hero() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
      <Cover />
      <Profile />
    </div>
  );
}

export default Hero;
