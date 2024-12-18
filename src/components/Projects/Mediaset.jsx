import React, { useState } from "react";
import mediasetBg from "../../assets/images/mediaset-bg.png";
import epamLogo from "../../assets/images/epam_logo.png";
import "../../styles/components/projects/mediaset.css";
import texts from "../../utils/data";

const Mediaset = () => {
  const handleClick = () => {
    window.open(texts.projects.mediaset.link, "_blank");
  };
  return (
    <div
      className="main-container m-o p-0 d-flex flex-column justify-content-start"
      style={{
        backgroundImage: `url(${mediasetBg})`,
      }}
      onClick={handleClick}
    >
      <div className="mediaset-project"></div>
      <span className="content-container">
        <div>
          <div className="title text-center">
            {texts.projects.mediaset.title}
          </div>
          <div className="description">
            {texts.projects.mediaset.description}
          </div>
        </div>
        <div className="d-flex flex-column mb-3 justify-content-between gap-2">
          <div className="stack-title">STACK:</div>
          <div className="stack-description">
            {texts.projects.mediaset.stack}
          </div>
          <div className="overflow-hidden align-self-center d-flex flex-row align-items-center gap-3">
            <img
              src={epamLogo}
              alt="Epam logo"
              className="employer-logo rounded-3"
            ></img>
            <p className="employer-title m-0 p-0">Epam Systems Inc</p>
          </div>
        </div>
      </span>
    </div>
  );
};

export default Mediaset;
