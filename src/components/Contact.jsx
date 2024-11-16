import React, { forwardRef } from "react";
import "../styles/components/contact.css"; // Assuming you will add some styles
import avatar from "../assets/images/Profile new.png";
import linkedinLogo from "../assets/images/linkedin.jpg";
import texts from "../utils/data";

const Contact = forwardRef((props, ref) => {
  return (
    <div ref={ref} id="contact" className="contact-component">
      <img src={avatar} alt="Avatar" className="contact-avatar" />
      <div className="contact-text-container">
        <h1 className="contact-title">&lt;Contact/&gt;</h1>
        <p>{texts.contacto.name}</p>
        <p>{texts.contacto.email}</p>
        <a
          href="https://www.linkedin.com/in/ricklarios/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedinLogo}
            alt="LinkedIn"
            className="contact-linkedin-logo"
          />
        </a>
      </div>
    </div>
  );
});

export default Contact;
