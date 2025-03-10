import ProjectCardList from "./ProjectCardList";
import Heading from "../../Heading";

function Projects() {
  return (
    <div className="border rounded-md my-8 px-4">
      <Heading title="Recent Projects" buttonText="View More" />
      <ProjectCardList start={0} end={6} />
    </div>
  );
}

export default Projects;
