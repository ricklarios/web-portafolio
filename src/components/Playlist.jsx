import React from "react";
import "../styles/components/playlist.css";

const Playlist = ({ songs }) => {
  return (
    <div className="playlist-container">
      <h2 className="text-center">Your custom playlist:</h2>
      <div className="playlist-text">
        {songs.map((song, index) => (
          <div key={index} className="d-flex flex-row gap-3 mb-1">
            <p className="index">{index + 1}</p>
            <div className="title-artist w-100 m-0 d-flex flex-row flex-wrap justify-content-start align-items-center gap-1">
              <p className="">{song.name}</p>
              <p className="text-end">{song.artists[0].name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
