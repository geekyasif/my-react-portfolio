import React from "react";
import ProjectCard from "./ProjectCard";
import Heading from "../../Heading";
import { useUser } from "../../../context/UserProvider";

function Projects() {
  const { user } = useUser();

  return (
    <div>
      <Heading title="Projects" buttonText="Create new projects" />
      <div className="flex flex-wrap items-center justify-between">
        <ProjectCard
          codeUrl="https://github.com/geekyasif/campus-connect-frontend"
          liveUrl="https://connectcampus.vercel.app/"
          imageUrl="campus_connect.png"
          title="Campus Connect"
          skills={["React.js", "Firebase", "Tailwindcss", "Redux Toolkit"]}
        />

        <ProjectCard
          codeUrl="https://github.com/geekyasif/openinapp-board"
          liveUrl="https://openinapp-board.vercel.app/"
          imageUrl="board.png"
          title="Board"
          skills={["Next.js - 13", "Tailwindcss"]}
        />

        <ProjectCard
          codeUrl="https://github.com/geekyasif/tif-foodtruck"
          liveUrl="https://tif-foodtruck.vercel.app/"
          imageUrl="foodtruck.png"
          title="Food Truck"
          skills={["Next.js - 13", "Firebase", "Tailwindcss", "Redux Toolkit"]}
        />

        <ProjectCard
          codeUrl="https://github.com/geekyasif/getmynotes"
          liveUrl="https://getmynotes.vercel.app/signin"
          imageUrl="bca_notes.png"
          title="GetMyNotes"
          skills={["React.js", "Firebase", "Tailwindcss", "Redux Toolkit"]}
        />

        <ProjectCard
          codeUrl=""
          liveUrl="https://amazon-clone-5r41opvys-geekyasif.vercel.app/"
          imageUrl="project_image_1.png"
          title="Amazon Clone"
          skills={[
            "Next.js - 12",
            "React.js",
            "Firebase",
            "Tailwindcss",
            "Redux",
          ]}
        />
        <ProjectCard
          codeUrl="https://github.com/geekyasif/react-node-chat-app"
          liveUrl="https://github.com/geekyasif/react-node-chat-app"
          imageUrl="chat.png"
          title="Chhaty | Group Chat"
          skills={["Node.js", "React.js", "Socket.io", "Tailwindcss"]}
        />

        <ProjectCard
          codeUrl="https://github.com/geekyasif/nodejs-online-compiler"
          liveUrl="https://github.com/geekyasif/nodejs-online-compiler"
          imageUrl="compiler.jpeg"
          title="Online Web Compiler"
          skills={["React.js", "Rest Api", "Monaco Editor"]}
        />

        <ProjectCard
          codeUrl="https://github.com/geekyasif/webpack-learning/tree/main/geekscss"
          liveUrl="https://github.com/geekyasif/webpack-learning/tree/main/geekscss"
          imageUrl="webpack.png"
          title="Css Component Libray - GeekCss"
          skills={["Webpack"]}
        />

        <ProjectCard
          codeUrl=""
          liveUrl=""
          imageUrl="scaler_task.png"
          title="Frontend Scaler Task"
          skills={["Next.js", "React.js", "Firebase", "Tailwindcss"]}
        />

        <ProjectCard
          codeUrl="https://github.com/geekyasif/online-pizza-frontend-reactjs"
          liveUrl="https://github.com/geekyasif/online-pizza-frontend-reactjs"
          imageUrl="pizza.png"
          title="Online Pizza Delivery"
          skills={["Node", "React", "Firebase", "Tailwindcss"]}
        />

        <ProjectCard
          codeUrl=""
          liveUrl=""
          imageUrl="codedamn.png"
          title="Codedamn Clone"
          skills={["Next.js", "React.js", "Firebase", "Tailwindcss"]}
        />
      </div>
    </div>
  );
}

export default Projects;
