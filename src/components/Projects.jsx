import React, { forwardRef } from "react";
import "../styles/components/projects.css";
import Mediaset from "./Projects/Mediaset";

const projectsUrls = {
  mediaset:
    "https://www.mediaset.es/comunicacion/digital/20241115/mediaset-hbbtv-awards-contextu-ads-publiespana_18_014021974.html",
};

const Projects = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="projects">
      <h1>My Projects</h1>
      <div className="projects-container d-flex flex-row flex-wrap justify-content-center gap-1">
        <Mediaset url={projectsUrls.mediaset} />
        <Mediaset />
        <Mediaset />
      </div>
    </div>
  );
});

export default Projects;
