import React from "react";
import ProjectList from "./ProjectList";

const ProjectContainer = () => {
  return (
    <div className="bg-[#e2e8f0]">
      <h1 className="text-center text-4xl p-4 tracking-wide">Projects</h1>
      <ProjectList />
    </div>
  );
};

export default ProjectContainer;
