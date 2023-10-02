import Profile from "./Profile";
import Brand from "./Brand";

function Navigation() {
  return (
    <div className="container mx-auto flex justify-between m-2 items-center py-2 sticky top-0 bg-white">
      <Brand />
      <div className="flex mx-4">
        {/* <Search /> */}
        <Profile />
      </div>
    </div>
  );
}

export default Navigation;
