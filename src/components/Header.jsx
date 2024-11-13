import React from 'react';
import '../styles/components/header.css';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul className='nav-list'>
                    <li><a href="#about-me">ABOUT ME</a></li>
                    <li><a href="#proyectos">PROYECTOS</a></li>
                    <li><a href="#experiencia">EXPERIENCIA</a></li>
                    <li><a href="#formacion">FORMACIÓN</a></li>
                    <li><a href="#contacto">CONTACTO</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;