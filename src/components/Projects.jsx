import React, { forwardRef } from "react";
import "../styles/components/projects.css";
import Mediaset from "./Projects/Mediaset";

const Projects = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="projects">
      <h1>My Projects</h1>
      <div className="projects-container d-flex flex-row flex-wrap justify-content-center gap-1">
        <Mediaset />
        <Mediaset />
        <Mediaset />
      </div>
    </div>
  );
});

export default Projects;
