import React, { useEffect, useState } from "react";
import Heading from "../Heading";
import Card from "./Card";
import { useUser } from "../../../context/UserProvider";
import { IAcademic } from "../../../typescript/UserInterfaces";

function Education() {
  const { user } = useUser();
  const [academics, setAcademics] = useState<IAcademic[]>();

  useEffect(() => {
    setAcademics(user?.academics);
  }, []);

  return (
    <div>
      <Heading title="Education" position="" />
      {academics?.map((data) => (
        <Card {...data} />
      ))}
    </div>
  );
}

export default Education;
