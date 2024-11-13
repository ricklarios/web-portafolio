import React, { useEffect, useRef, useState } from "react";
import "../styles/components/main-section.css"; // Assuming you will add some styles
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";

const MainSection = () => {
  const divRef = useRef(null);
  const [isOutOfView, setIsOutOfView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Actualiza el estado cuando el div sale o entra en la vista
        setIsOutOfView(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    const currentDiv = divRef.current;
    if (currentDiv) {
      observer.observe(currentDiv);
    }

    return () => {
      if (currentDiv) {
        observer.unobserve(currentDiv);
      }
    };
  }, []);

  return (
    <main className="main-section">
      <div ref={divRef}>
        <Contact />
      </div>
      <About />
      <Education />

      <div className={`out-of-view + ${isOutOfView ? "" : "hidden"} `}>
        <Contact />
      </div>
    </main>
  );
};

export default MainSection;
