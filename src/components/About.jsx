import React, { forwardRef } from "react";
import texts from "../utils/data";
import "../styles/components/about.css";
import studioBg from "../assets/images/fondo-estudio.png";
import avatar from "../assets/images/Profile new.png";
import retrato from "../assets/images/autoretrato2.png";

const About = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="about">
      <img src={retrato} alt="studio bg" className="studio-bg"></img>
      <div className="d-flex  flex-row flex-wrap align-items-start justify-content-end">
        <div className="text-content w-50">
          <h1 style={{ position: "relative", zIndex: 1 }}>
            {texts.aboutMe.title}
          </h1>
          <p style={{ position: "relative", zIndex: 1 }}>
            {texts.aboutMe.description}
          </p>
        </div>
      </div>
    </div>
  );
});

export default About;
