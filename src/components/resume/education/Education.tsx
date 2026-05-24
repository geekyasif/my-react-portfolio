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
  }, [user]);

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <Heading title="Education" position="" />
      <div className="space-y-3">
        {academics?.map((data) => (
          <Card key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
}

export default Education;
