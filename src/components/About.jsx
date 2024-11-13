import React from "react";
import texts from "../utils/data";
import "../styles/components/about.css";

const About = () => {
  return (
    <div className="about">
      <h1>{texts.aboutMe.title}</h1>
      <p>{texts.aboutMe.description}</p>
    </div>
  );
};

export default About;
