import { Link } from "react-router-dom";

function Brand() {
  return (
    <div className="">
      <Link
        to="/"
        className="text-xl pb-4 md:pb-0 lg:pb-0 lg:text-2xl md:text-2xl font-bold flex items-center gap-3 transition-all duration-300 hover:opacity-80"
      >
        <img
          alt="profile"
          src="pro.png"
          className="h-10 w-10 md:h-10 md:w-10 lg:h-12 lg:w-12 rounded-full object-cover ring-2 ring-gray-300"
        />
        <span className="text-gray-900 hover:text-gray-700">
          Mohammad Asif
        </span>
      </Link>
    </div>
  );
}

export default Brand;
