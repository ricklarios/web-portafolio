import React, { useState } from "react";
import delayCalculatorBg from "../../assets/images/delay-calculator.png";
import "../../styles/components/projects/mediaset.css";
import texts from "../../utils/data";

const DelayCalculator = () => {
  const handleClick = () => {
    window.open(texts.projects.delayCalculator.link, "_blank");
  };
  return (
    <div
      className="main-container m-o p-0 d-flex flex-column justify-content-start"
      style={{
        backgroundImage: `url(${delayCalculatorBg})`,
      }}
      onClick={handleClick}
    >
      <div className="mediaset-project"></div>
      <span className="content-container">
        <div>
          <div className="title text-center">
            {texts.projects.delayCalculator.title}
          </div>
          <div className="description">
            {texts.projects.delayCalculator.description}
          </div>
        </div>
        <div className="d-flex flex-column mb-3 justify-content-between gap-2">
          <div className="stack-title">STACK:</div>
          <div className="stack-description">
            {texts.projects.delayCalculator.stack}
          </div>
          <div className="overflow-hidden align-self-center d-flex flex-row align-items-center gap-3">
            <p className="employer-title m-0 p-0">Freelance</p>
          </div>
        </div>
      </span>
    </div>
  );
};

export default DelayCalculator;
