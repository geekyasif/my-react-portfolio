import React from "react";
import { Link } from "react-router-dom";

function NavLink({ icon, url, title }: any) {
  return (
    <Link
      className="flex items-center gap-2 md:text-sm lg:text-sm text-xs font-medium"
      to={url}
    >
      {icon}
      {title}
    </Link>
  );
}

export default NavLink;
