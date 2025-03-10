import React from "react";
import NavLink from "./NavLink";
import { User, FolderOpenDot, Newspaper } from "lucide-react";

const links = [
  {
    id: 1,
    title: "About me",
    url: "/about",
    icon: <User width={18} height={18} />,
  },
  {
    id: 1,
    title: "Projects",
    url: "/projects",
    icon: <FolderOpenDot width={18} height={18} />,
  },
  {
    id: 1,
    title: "Blog",
    url: "/blog",
    icon: <Newspaper width={18} height={18} />,
  },
];
function NavLinks() {
  return (
    <div className="flex gap-4 pb-2 md:pb-0 lg:pb-0">
      {links?.map((link) => (
        <NavLink
          icon={link?.icon}
          key={link?.id}
          url={link?.url}
          title={link?.title}
        />
      ))}
    </div>
  );
}

export default NavLinks;
