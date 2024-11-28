import React, { forwardRef } from "react";
import texts from "../utils/data";
import "../styles/components/about.css";
import studioBg from "../assets/images/fondo-estudio.png";
import avatar from "../assets/images/Profile new.png";
import retrato from "../assets/images/autoretrato2.png";
import { useEffect, useState } from "react";

const About = forwardRef((props, ref) => {
  const [offset, setOffset] = useState(-100);
  const [scale, setScale] = useState(1.3);
  const [duration, setDuration] = useState(0.1);

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      const rect = element.getBoundingClientRect();
      const screenCenter = window.innerHeight / 2;
      if (element) {
        const elementCenter = rect.top + rect.height / 2;
        /*  console.log("rect", rect);
        console.log("screenCenter", screenCenter); */

        if (rect.bottom > screenCenter) {
          setDuration(5);
          setOffset(0); // Final position
          setScale(1);
        }
        if (rect.bottom < 0) {
          setOffset(-100); // Initial position
          setScale(1.3);
          setDuration(0.5);
        }
        if (rect.top < 0) {
          setDuration(5);
          setOffset(-100); // Initial position
          setScale(1.3);
        }
      }
    };

    /* setOffset(-100); // Initial position more to the left
    setScale(1.3); // Initial scale */
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return (
    <div ref={ref} className="about">
      <img
        src={retrato}
        alt="studio bg"
        className="studio-bg"
        style={{
          scale: `${scale}`,
          transform: `translateX(${offset}px)`,
          transition: `all ${duration}s ease`,
        }}
      />
      <div className="d-flex  flex-row flex-wrap align-items-start justify-content-end">
        <div className="text-content w-50">
          <h1 style={{ position: "relative", zIndex: 1 }}>
            {texts.aboutMe.title}
          </h1>
          <p style={{ position: "relative", zIndex: 1 }}>
            {texts.aboutMe.description}
          </p>
        </div>
      </div>
    </div>
  );
});

export default About;
