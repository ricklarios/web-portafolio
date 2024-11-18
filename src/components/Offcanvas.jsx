import "bootstrap/dist/css/bootstrap.min.css";
import { Offcanvas } from "react-bootstrap";
import React, { useState } from "react";
import "../styles/components/offcanvas.css";
import spotifyLogo from "../assets/images/spotify.png";
import openAiLogo from "../assets/images/openia-crop.png";
import offcanvasBg from "../assets/images/man-4807395_1920.jpg";

function OffcanvasComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="offcanvas-component">
      <h1 className="offcanvas-title text-center">Your Mood, My Playlist !!</h1>
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
      <Offcanvas
        className="offcanvas-expand"
        show={show}
        onHide={handleClose}
        placement={"end"}
        style={{
          backgroundImage: `url(${offcanvasBg})`,
        }}
      >
        <div className="offcanvas-bg">
          <Offcanvas.Header>
            <Offcanvas.Title>
              <h1 className="offcanvas-title text-center">
                Your Mood, My Playlist !!
              </h1>
            </Offcanvas.Title>
            <button
              type="button"
              class="btn-close btn-close-white"
              onClick={handleClose}
            ></button>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <p>
              Let me create a playlist for you using my favorite artists. Just
              tell me your mood and the activity you are doing and I will find a
              series of songs that will inspire you.
            </p>
            <p>
              This functionality is based on the Spotify API and the OpenAI API.
            </p>
          </Offcanvas.Body>
        </div>
      </Offcanvas>
    </div>
  );
}

export default OffcanvasComponent;
