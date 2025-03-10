import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { fetchProjects } from "../../../services";

function ProjectCardList({ start = undefined, end = undefined }: any) {
  const [projects, setProjects]: any = useState([]);

  async function handleFetchProjects() {
    try {
      const data = await fetchProjects();
      setProjects(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleFetchProjects();
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-between">
      {projects.slice(start, end)?.map((project: any, index: any) => (
        <ProjectCard
          key={project?.id}
          codeUrl={project?.codeUrl}
          liveUrl={project?.liveUrl}
          imageUrl={project?.imageUrl}
          title={project?.title}
          tags={project?.tags}
          slug={project?.slug}
          description={project?.description}
        />
      ))}
    </div>
  );
}

export default ProjectCardList;
