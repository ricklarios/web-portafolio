import React from "react";
import "../styles/components/header.css";

const Header = ({ scrollToSection, refs }) => {
  return (
    <header className="header">
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
