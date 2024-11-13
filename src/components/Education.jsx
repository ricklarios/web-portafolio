import React, { forwardRef } from "react";
import texts from "../utils/data";
import "../styles/components/education.css";

const EducationItem = ({ title, institution, year, description }) => (
  <div className="education-item">
    <h3>{title}</h3>
    <div className="institution-year">
      <p>{institution}</p>
      <span>{year}</span>
    </div>
    <p>{description}</p>
  </div>
);

const Education = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="education">
      <h1 className="title">{texts.education.title}</h1>
      {texts.education.list.map((edu, index) => (
        <EducationItem
          key={index}
          title={edu.title}
          institution={edu.institution}
          year={edu.year}
          description={edu.description}
        />
      ))}
    </div>
  );
});

export default Education;
