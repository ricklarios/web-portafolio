import React, { useEffect, useRef, useState } from "react";
import "../styles/components/main-section.css"; // Assuming you will add some styles
import { Alert } from "react-bootstrap"; // or the appropriate path to your Alert component
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Projects from "./Projects";
import OffcanvasComponent from "./Offcanvas";
import retrato from "../assets/images/autoretrato2.png";
import studioBg from "../assets/images/fondo-estudio.png";

const MainSection = ({ refs }) => {
  const divRef = useRef(null);
  const [isOutOfView, setIsOutOfView] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [scale, setScale] = useState(1.1);

  const handleAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 20000);
  };

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
      {showAlert && (
        <Alert className="alert-span">Email copied to clipboard!</Alert>
      )}
      <div
        className="portrait-container"
        onMouseEnter={() => setScale(1.2)}
        onMouseLeave={() => setScale(1.1)}
      >
        <img
          className="portrait"
          src={studioBg}
          alt="Rick Larios"
          style={{
            scale: `${scale}`,
            transition: `all 5s ease`,
          }}
        ></img>
      </div>
      <div
        onMouseEnter={() => setScale(1.2)}
        onMouseLeave={() => setScale(1.1)}
        className="contact-offcanvas w-100 d-flex flex-row-reverse justify-content-between align-items-center flex-wrap m-5 px-5"
      >
        <OffcanvasComponent />
        <Contact ref={refs.contactRef} handleAlert={handleAlert} />
      </div>
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
