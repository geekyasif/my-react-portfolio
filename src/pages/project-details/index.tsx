import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MarkdownEditor from "../../components/markdownEditor";
import { fetchProjectDetails } from "../../services";

function ProjectDetails() {
  const params = useParams();
  const { slug } = params;
  const [details, setDetails] = useState();

  async function handleFetchProjectDetails() {
    try {
      const data = await fetchProjectDetails(slug as string);
      setDetails(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    handleFetchProjectDetails();
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-8">
      <MarkdownEditor content={details} />
    </div>
  );
}

export default ProjectDetails;
