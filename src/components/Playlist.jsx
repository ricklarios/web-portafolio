import React from "react";
import "../styles/components/playlist.css";

const Playlist = ({ songs }) => {
  return (
    <div className="playlist-container mt-3">
      <h2 className="text-left ms-1">Your custom playlist:</h2>
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
