import Brand from "./Brand";
import NavLinks from "./NavLinks";

function Navigation() {
  return (
    <div className="border-b sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto flex md:justify-between lg:justify-between justify-center flex-wrap px-2 items-center py-3">
        <Brand />
        <NavLinks />
      </div>
    </div>
  );
}

export default Navigation;
