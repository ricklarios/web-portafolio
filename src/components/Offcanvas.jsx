import "bootstrap/dist/css/bootstrap.min.css";
import { Offcanvas, Button } from "react-bootstrap";
import React, { useState } from "react";
import "../styles/components/offcanvas.css";
import spotifyLogo from "../assets/images/spotify.png";
import openAiLogo from "../assets/images/openia-crop.png";

function OffcanvasComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="offcanvas-component">
      <h1 className="text-center">Your Mood, My Playlist !!</h1>
      <div className="btn btn-primary w-75" onClick={handleShow}>
        Create Playlist
      </div>
      <div className="description">
        <p className="text-sm-center lh-sm w-100">
          Let me inspire you with a playlist specially designed for you, using
          my favorite artists and the mood you choose.
        </p>
        <h2>Based on APIs:</h2>
        <div className="description-logos">
          <img src={spotifyLogo} alt="Spotify Logo" className="spotify-logo" />
          <img src={openAiLogo} alt="OpenAI Logo" className="openai-logo" />
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default OffcanvasComponent;
