import React from "react";
import "../styles/components/contact.css"; // Assuming you will add some styles
import avatar from "../assets/images/Profile new.png";
import linkedinLogo from "../assets/images/linkedin.jpg";

const Contact = () => {
  return (
    <div className="contact-component">
      <img
        src={avatar}
        alt="Avatar"
        className="contact-avatar"
        style={{ width: "100px" }}
      />
      <h2 className="contact-title">&lt;Contact/&gt;</h2>
      <p>Name: Ricardo Larios</p>
      <p>email: ricklarios@gmail.com</p>
      <a
        href="https://www.linkedin.com/in/ricardo-larios"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={linkedinLogo}
          alt="LinkedIn"
          className="contact-linkedin-logo"
        />
      </a>
      {/* <div className="contact-email-container">
        <input
          type="text"
          value="ricklarios@gmail.com"
          readOnly
          className="contact-email"
        />
        <button onClick={() => alert("Email sent!")}>Send</button>
        <button
          onClick={() => navigator.clipboard.writeText("ricklarios@gmail.com")}
        >
          Copy
        </button>
      </div> */}
    </div>
  );
};

export default Contact;
