import axios from "axios";
import React, { useEffect, useState } from "react";
import MarkdownEditor from "../../components/markdownEditor";

function About() {
  const [aboutMe, setAboutMe] = useState();

  async function handleFetchAboutMe() {
    try {
      const { data } = await axios.get(
        `https://raw.githubusercontent.com/geekyasif/geekyasif-cms/refs/heads/main/profile/about.md`
      );
      setAboutMe(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleFetchAboutMe();
  }, []);
  return (
    <div className="max-w-7xl mx-auto py-8">
      <MarkdownEditor content={aboutMe} />
    </div>
  );
}

export default About;
