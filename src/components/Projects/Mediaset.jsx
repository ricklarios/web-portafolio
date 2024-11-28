import React, { useState } from "react";
import mediasetBg from "../../assets/images/mediaset-bg.png";
import "../../styles/components/projects/mediaset.css";

const Mediaset = () => {
  const handleClick = () => {};
  return (
    <div
      className="mediaset-container m-o p-0 d-flex flex-column justify-content-start"
      style={{
        backgroundImage: `url(${mediasetBg})`,
      }}
      onClick={handleClick}
    >
      <div className="mediaset-project"></div>
      <span className="content-container">
        <h2 className=" p-3">Proyectos Mediaset</h2>
      </span>
    </div>
  );
};

export default Mediaset;
