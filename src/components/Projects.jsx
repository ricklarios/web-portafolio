import React from "react";
import Mediaset from "./Projects/Mediaset";
import "../styles/components/projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects-container">
        <Mediaset />
      </div>
    </div>
  );
};

export default Projects;
