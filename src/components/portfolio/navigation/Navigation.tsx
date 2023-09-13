import Search from "./Search";
import Profile from "./Profile";
import Brand from "./Brand";

function Navigation() {
  return (
    <div className="flex justify-between m-2 items-center py-2 sticky top-0 bg-white">
      <Brand />
      <div className="flex mx-4">
        {/* <Search /> */}
        <Profile />
      </div>
    </div>
  );
}

export default Navigation;
