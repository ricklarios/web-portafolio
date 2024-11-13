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
              PROYECTOS
            </button>
          </li>
          <li>
            <button
              className="link-button"
              onClick={() => scrollToSection(refs.experienceRef)}
            >
              EXPERIENCIA
            </button>
          </li>
          <li>
            <button
              className="link-button"
              onClick={() => scrollToSection(refs.educationRef)}
            >
              FORMACIÓN
            </button>
          </li>
          <li>
            <button
              className="link-button"
              onClick={() => scrollToSection(refs.contactRef)}
            >
              CONTACTO
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
