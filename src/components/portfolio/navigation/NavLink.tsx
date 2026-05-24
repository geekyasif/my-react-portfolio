import React from "react";
import { Link } from "react-router-dom";

function NavLink({ icon, url, title }: any) {
  return (
    <Link
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-300"
      to={url}
    >
      {icon}
      {title}
    </Link>
  );
}

export default NavLink;
