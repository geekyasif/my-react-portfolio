import React from "react";

function Cover() {
  return (
    <div className="h-[180px] md:h-[300px] lg:h-[400px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-tl-xl rounded-tr-xl">
      <img
        alt="img"
        src="cover.png"
        className="h-[180px] md:h-[300px] lg:h-[400px] w-[100%] rounded-tl-xl rounded-tr-xl object-fit"
      />
    </div>
  );
}

export default Cover;
