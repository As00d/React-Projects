import React from "react";
import { ProjectData } from "./Data";
import Project from "./Project";
const ProjectList = () => {
  return (
    <div className="flex border justify-around mx-48 flex-wrap">
      {ProjectData.map((proj) => (
        <Project {...proj} key={proj.id} />
      ))}
    </div>
  );
};

export default ProjectList;
