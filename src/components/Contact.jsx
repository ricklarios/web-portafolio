import React, { forwardRef, useState } from "react";
import "../styles/components/contact.css";
//import avatar from "../assets/images/Profile new.png";
import linkedinLogo from "../assets/images/linkedin.jpg";
import copyIcon from "../assets/images/copy-icon.png";
import sendIcon from "../assets/images/send-icon.png";
import texts from "../utils/data";
import { Alert } from "react-bootstrap";

const Contact = forwardRef((props, ref) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };
  return (
    <div ref={ref} id="contact" className="contact-component">
      {/* <img src={avatar} alt="Avatar" className="contact-avatar" /> */}
      <div className="contact-text-container">
        <h1 className="contact-title">&lt;Contact/&gt;</h1>
        <p>{texts.contacto.name}</p>
        <p className="d-flex flex-row flex-wrap justify-content-center gap-2 align-items-end">
          {texts.contacto.email}
          <img
            src={copyIcon}
            alt="copy icon"
            className="icon"
            onClick={() => {
              navigator.clipboard.writeText(texts.contacto.email);
              handleAlert();
            }}
            title="Copy email to clipboard"
          />
          <a
            href={`mailto:${texts.contacto.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={sendIcon}
              alt="send icon"
              className="icon"
              title="Send email"
            />
          </a>
          {showAlert && (
            <Alert className="alert-span">Email copied to clipboard!</Alert>
          )}
        </p>
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
