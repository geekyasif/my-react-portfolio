import React from "react";

function Cover() {
  return (
    <div className="h-[120px] md:h-[200px] lg:h-[320px] relative overflow-hidden rounded-t-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-500"></div>
      <div className="absolute inset-0 opacity-40">
        <img src="cover.png" alt="Cover" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </div>
  );
}

export default Cover;
