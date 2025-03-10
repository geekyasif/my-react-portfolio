import axios from "axios";

export const fetchProjects = async () => {
  try {
    const { data } = await axios.get(
      `https://raw.githubusercontent.com/geekyasif/geekyasif-cms/refs/heads/main/projects/index.json`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchProjectDetails = async (slug: string) => {
  try {
    const { data } = await axios.get(
      `https://raw.githubusercontent.com/geekyasif/geekyasif-cms/refs/heads/main/projects/${slug}.md`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchAboutMe = async () => {
  try {
    const { data } = await axios.get(``);
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchProfile = async () => {
  try {
    const data = await axios.get(
      "https://raw.githubusercontent.com/geekyasif/my-react-portfolio/main/src/utils/geekyasif.json"
    );
    return data.data;
  } catch (error) {
    throw error;
  }
};
