import React, { useEffect, useRef, useState } from "react";
import "../styles/components/main-section.css"; // Assuming you will add some styles
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Projects from "./Projects";
import OffcanvasComponent from "./Offcanvas";

const MainSection = ({ refs }) => {
  const divRef = useRef(null);
  const [isOutOfView, setIsOutOfView] = useState(false);

  useEffect(() => {
    /* const newPlaylist = createPlaylist("happy", "running", 10);
    setPlaylist(newPlaylist); */
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
      <OffcanvasComponent />
      {/* <div ref={divRef} className="w-100"> */}
      <Contact ref={refs.contactRef} />
      {/*  </div> */}
      <About ref={refs.aboutRef} />
      <Projects ref={refs.projectsRef} />
      <Education ref={refs.educationRef} />

      <div className={`out-of-view ${isOutOfView ? "" : "hidden"} `}>
        <Contact />
      </div>
    </main>
  );
};

export default MainSection;
