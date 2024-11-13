import React from "react";
import "../styles/components/main-section.css"; // Assuming you will add some styles
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";

const MainSection = () => {
  return (
    <main className="main-section">
      <Contact />
      <Education />
      <About />
    </main>
  );
};

export default MainSection;
