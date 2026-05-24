import React from "react";
import { Link } from "react-router-dom";

function NavLink({ icon, url, title }: any) {
  return (
    <Link
      className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-gray-800 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200"
      to={url}
    >
      {icon}
      {title}
    </Link>
  );
}

export default NavLink;
