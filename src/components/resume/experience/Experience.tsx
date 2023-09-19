import Heading from "../Heading";
import Card from "./Card";
import { useUser } from "../../../context/UserProvider";

function Experience() {
  const {user} = useUser()
  
  return ( 
    <div>
      <Heading title="Work experience" position="text-center"/>
      {user?.experience.map((data) => (
        <Card {...data} />
      ))}
    </div>
  );
}

export default Experience;
