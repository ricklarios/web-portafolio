import React, { useState } from "react";
import mediasetBg from "../../assets/images/mediaset-bg.png";
import "../../styles/components/projects/mediaset.css";
import texts from "../../utils/data";

const Mediaset = (props) => {
  const { url } = props;
  const handleClick = () => {
    window.open(url, "_blank");
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
        <div className="title">{texts.projects.mediaset.title}</div>
        <div className="description">{texts.projects.mediaset.description}</div>
        <div className="d-flex flex-row gap-2 mt-3 justify-content-between">
          <div className="stack-title">STACK:</div>
          <div className="stack-description w-75">
            {texts.projects.mediaset.stack}
          </div>
        </div>
      </span>
    </div>
  );
};

export default Mediaset;
