import React, { forwardRef } from "react";
import "../styles/components/projects.css";
import Mediaset from "./Projects/Mediaset";

const Projects = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="projects">
      <h1>My Projects</h1>
      <Mediaset />
    </div>
  );
});

export default Projects;
