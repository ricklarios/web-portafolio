import React from "react";
import { TrackUrisContext } from "../App";
import "../styles/components/playlist.css";
import { FormControl as Input, FloatingLabel } from "react-bootstrap";

const Playlist = ({ songs }) => {
  const { playlistName, setPlaylistName } = React.useContext(TrackUrisContext);
  return (
    <div className="playlist-container mt-3">
      <FloatingLabel
        controlId="floatingInput"
        label="Playlist name"
        className="floating-label mb-3"
      >
        <Input
          type="text"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
          placeholder=""
          className="playlist-name-input"
        />
      </FloatingLabel>
      {/* <h2 className="text-left ms-1">Your custom playlist:</h2> */}
      <div className="playlist-text">
        {songs.map((song, index) => (
          <div key={index} className="d-flex flex-row gap-3 mb-1">
            <p className="index">{index + 1}</p>
            <div className="title-artist w-100 m-0 d-flex flex-row flex-wrap justify-content-start align-items-end gap-1">
              <p className="p-0">{song.name}</p>
              <p className="text-end p-0 m-0">{song.artists[0].name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
