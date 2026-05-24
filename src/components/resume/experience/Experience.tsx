import Heading from "../Heading";
import Card from "./Card";
import { useUser } from "../../../context/UserProvider";

function Experience() {
  const {user} = useUser()

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <Heading title="Work Experience" position=""/>
      <div className="space-y-4">
        {user?.experience.map((data) => (
          <Card key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
}

export default Experience;
