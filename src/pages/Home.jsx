import React, { useRef } from "react";
import Header from "../components/Header";
import MainSection from "../components/MainSection";
import Footer from "../components/Footer";

const Home = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Header
        scrollToSection={scrollToSection}
        refs={{
          aboutRef,
          projectsRef,
          experienceRef,
          educationRef,
          contactRef,
        }}
      />
      <MainSection
        refs={{
          aboutRef,
          projectsRef,
          experienceRef,
          educationRef,
          contactRef,
        }}
      />
      <Footer />
    </div>
  );
};

export default Home;
