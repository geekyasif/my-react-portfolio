import { Link } from "react-router-dom";

function Brand() {
  return (
    <div className="">
      <Link
        to="/"
        className="text-xl pb-4 md:pb-0 lg:pb-0 lg:text-2xl md:text-2xl font-bold flex items-center gap-3 transition-all duration-300 hover:opacity-80"
      >
        <img
          alt="img"
          src="pro.png"
          className="h-9 w-9 md:h-9 md:w-9 lg:h-10 lg:w-10 rounded-full ring-2 ring-gray-200"
        />
        <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          Mohammad Asif
        </span>
      </Link>
    </div>
  );
}

export default Brand;
