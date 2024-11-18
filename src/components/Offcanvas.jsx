import "bootstrap/dist/css/bootstrap.min.css";
import { Offcanvas, Form, Button, Spinner } from "react-bootstrap";
import Playlist from "./Playlist"; // Import the Playlist component
import React, { useState } from "react";
import "../styles/components/offcanvas.css";
import spotifyLogo from "../assets/images/spotify.png";
import openAiLogo from "../assets/images/openia-crop.png";
import offcanvasBg from "../assets/images/man-4807395_1920.jpg";
import axios from "axios";

function OffcanvasComponent() {
  const [show, setShow] = useState(false);
  const [mood, setMood] = useState("");
  const [activity, setActivity] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [playlist, setPlaylist] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmitCreatePlaylist = async (e) => {
    e.preventDefault();
    setShowSpinner(true);
    setShowPlaylist(false);
    console.log(mood, activity);
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const options = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    };
    const body = {
      mood: mood,
      activity: activity,
    };
    try {
      const response = await axios.get(
        `${serverUrl}/api/playlist/create`,
        body,
        options
      );
      setPlaylist(response.data);
      setShowPlaylist(true);
      console.log("Playlist generated:", response.data);
    } catch (error) {
      console.log("Error generating playlist:", error);
    } finally {
      setShowSpinner(false);
    }
    /* axios
      .get(`${serverUrl}/api/playlist/create`, body, options)
      .then((response) => {
        console.log("Playlist generated:", response.data);
        // Handle the response data as needed
      })
      .catch((error) => {
        console.error("Error generating playlist:", error);
        // Handle the error as needed
      }); */
  };

  const handleMoodChange = (e) => setMood(e.target.value);
  const handleActivityChange = (e) => setActivity(e.target.value);

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
        className="offcanvas-expand overflow-auto"
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
              className="btn-close btn-close-white"
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
            <Form
              className="d-flex flex-column gap-3 w-100"
              onSubmit={handleSubmitCreatePlaylist}
            >
              <Form.Group className="d-flex flex-row align-items-center gap-4 justify-content-between w-100">
                <Form.Label className="fs-6 m-0">Mood</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="How you feel today?"
                  required
                  size="sm"
                  value={mood}
                  onChange={handleMoodChange}
                  className="w-50"
                />
                {/* <Form.Text>
                  Describe in your own words how you feel today
                </Form.Text> */}
              </Form.Group>
              <Form.Group className="d-flex flex-row align-items-center gap-4 justify-content-between w-100">
                <Form.Label>Activity</Form.Label>
                <Form.Control
                  type="text"
                  required
                  size="sm"
                  placeholder="What you are doing right now?"
                  value={activity}
                  onChange={handleActivityChange}
                  className="w-50"
                />
                {/* <Form.Text>Tell me what you are doing right now</Form.Text> */}
              </Form.Group>
              <Button type="submit" className="btn w-50 align-self-center mt-3">
                {showSpinner && (
                  <Spinner
                    animation="grow"
                    size="sm"
                    role="status"
                    className="me-2"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                )}
                {showSpinner ? "Processing..." : "Create playlist"}
              </Button>
            </Form>
            {showPlaylist && <Playlist songs={playlist}></Playlist>}
          </Offcanvas.Body>
        </div>
      </Offcanvas>
    </div>
  );
}

export default OffcanvasComponent;
