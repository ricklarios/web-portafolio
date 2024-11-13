import React from "react";
import "../styles/components/contact.css"; // Assuming you will add some styles
import avatar from "../assets/images/Profile new.png";
import linkedinLogo from "../assets/images/linkedin.jpg";
import texts from "../utils/data";

const Contact = () => {
  return (
    <div className="contact-component">
      <img
        src={avatar}
        alt="Avatar"
        className="contact-avatar"
        style={{ width: "100px" }}
      />
      <h1 className="contact-title">&lt;Contact/&gt;</h1>
      <p>Name: {texts.contacto.name}</p>
      <p>email: {texts.contacto.email}</p>
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
  );
};

export default Contact;
