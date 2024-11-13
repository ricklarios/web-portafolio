import React from "react";
import texts from "../utils/data";

const About = () => {
  return (
    <div>
      <h1>{texts.aboutMe.title}</h1>
      <p>{texts.aboutMe.description}</p>
    </div>
  );
};

export default About;
