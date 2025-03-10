import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="flex flex-row items-center text-xl">
      <Link to="/about">About me</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/blog">Blog</Link>
    </div>
  );
}

export default Profile;
