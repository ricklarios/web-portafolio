import React from 'react';
import '../styles/components/main-section.css'; // Assuming you will add some styles
import About from './About';
import Contact from './Contact';

const MainSection = () => {
    return (
        <main className="main-section">
            <Contact />
            <About />
        </main>
    );
};

export default MainSection;