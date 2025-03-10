import { Link } from "react-router-dom";

function Brand() {
  return (
    <div className="">
      <Link
        to="/"
        className="text-xl pb-4 md:pb-0 lg:pb-0 lg:text-2xl md:text-2xl font-bold flex items-center gap-2"
      >
        <img
          alt="img"
          src="pro.png"
          className="h-[30px] w-[30px] md:h-[30px] md:w-[30px] lg:h-[30px] lg:w-[30px] rounded-full"
        />
        GeekyAsif
      </Link>
    </div>
  );
}

export default Brand;
