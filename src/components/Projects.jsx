import React, { forwardRef } from "react";
import "../styles/components/projects.css";
import Mediaset from "./Projects/Mediaset";
import Worksut from "./Projects/Worksut";
import DelayCalculator from "./Projects/DelayCalculator";

const Projects = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="projects">
      <h1>My Projects</h1>
      <div className="projects-container d-flex flex-wrap justify-content-center gap-3">
        <Mediaset />
        <Worksut />
        <DelayCalculator />
      </div>
    </div>
  );
});

export default Projects;
