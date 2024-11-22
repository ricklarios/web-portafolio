import React, { forwardRef } from "react";
import texts from "../utils/data";
import "../styles/components/about.css";
import studioBg from "../assets/images/fondo-estudio.png";

const About = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="about">
      <img src={studioBg} alt="studio bg" className="studio-bg"></img>
      <div>
        <h1 style={{ position: "relative", zIndex: 1 }}>
          {texts.aboutMe.title}
        </h1>
        <p style={{ position: "relative", zIndex: 1 }}>
          {texts.aboutMe.description}
        </p>
      </div>
    </div>
  );
});

export default About;
