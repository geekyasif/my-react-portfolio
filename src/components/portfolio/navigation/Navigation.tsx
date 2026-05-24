import Brand from "./Brand";
import NavLinks from "./NavLinks";

function Navigation() {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex md:justify-between lg:justify-between justify-center flex-wrap px-4 md:px-6 lg:px-8 items-center py-3">
        <Brand />
        <NavLinks />
      </div>
    </div>
  );
}

export default Navigation;
