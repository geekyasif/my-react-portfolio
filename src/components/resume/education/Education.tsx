import React from "react";
import Heading from "../Heading";
import Card from "../Card";

const EducationData = [
  {
    id: 1,
    role: "Master of computer Application",
    office: "Galgotias University | Greater Noida, India",
    from: "May 2021",
    to: "Present",
    imageUrl: "https://cdn-icons-png.flaticon.com/128/569/569025.png",
    description: "",
  },
  {
    id: 1,
    role: "Bachelor of computer application",
    office: "Integral University | Lucknow, India",
    from: "May 2021",
    to: "Present",
    imageUrl: "https://cdn-icons-png.flaticon.com/128/2602/2602414.png",
    description: "",
  },
  {
    id: 1,
    role: "Intermediate",
    office: "Delhi Public Convent School | Ballia, India",
    from: "May 2021",
    to: "Present",
    imageUrl: "https://cdn-icons-png.flaticon.com/128/8074/8074788.png",
    description: "",
  },
  {
    id: 1,
    role: "High school",
    office: "Delhi Public Convent School | Ballia, India",
    from: "May 2021",
    to: "Present",
    imageUrl: "https://cdn-icons-png.flaticon.com/128/8074/8074788.png",
    description: "",
  },
];

function Education() {
  return (
    <div>
      <Heading title="Education" position="" />
      {EducationData.map((data) => (
        <Card {...data} />
      ))}
    </div>
  );
}

export default Education;
