import React from "react";
import "../styles/components/header.css";

const Header = ({ scrollToSection, refs }) => {
  const handleToggle = () => {
    const navList = document.querySelector(".nav-list");
    navList.classList.toggle("visible");
    document.addEventListener("click", (event) => {
      const navList = document.querySelector(".nav-list");
      if (
        !navList.contains(event.target) &&
        !event.target.closest(".toggler-container")
      ) {
        navList.classList.remove("visible");
      }
    });
  };
  return (
    <header className="header">
      <div className="toggler-container" onClick={handleToggle}>
        <div className="toggler">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <nav>
        <ul className="nav-list">
          <li>
            <button
              className="link-button"
              onClick={() => scrollToSection(refs.contactRef)}
            >
              CONTACT
            </button>
          </li>
          <li>
            <button
              className="link-button"
              onClick={() => scrollToSection(refs.aboutRef)}
            >
              ABOUT ME
            </button>
          </li>
          <li>
            <button
              className="link-button"
              onClick={() => scrollToSection(refs.projectsRef)}
            >
              PROJECTS
            </button>
          </li>
          <li>
            <button
              className="link-button"
              onClick={() => scrollToSection(refs.educationRef)}
            >
              EDUCATION
            </button>
          </li>
          <li>
            <button
              className="link-button"
              onClick={() => scrollToSection(refs.experienceRef)}
            >
              EXPERIENCE
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
