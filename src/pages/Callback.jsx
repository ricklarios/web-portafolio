import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { TrackUrisContext } from "../App";
import "../styles/callback.css";
import spotifyLogo from "../assets/images/spotify.png";

const Callback = () => {
  const { trackUris, token, setToken } = useContext(TrackUrisContext);
  const [isCodeProcessed, setIsCodeProcessed] = useState(false); // Bandera
  const [isPlaylistCreated, setIsPlaylistCreated] = useState(false);

  const getAuthorizationCode = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("code"); // Captura el 'code' de la URL
  };
  const createPlaylist = async (trackUris, token) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/playlist/generate-link",
        {
          trackUris,
          userAccessToken: token.access_token, // Aquí envías el token
        }
      );
      const spotifyUrl = response.data.url;
      // Abrir en una nueva ventana
      window.open(spotifyUrl, "_blank"); // "_blank" abre en una nueva pestaña/ventana
      redirectHome();
    } catch (error) {
      console.error(
        "Error generating playlist link:",
        error.response?.data || error.message
      );
      redirectHome();
    }
  };
  const exchangeToken = async (code) => {
    try {
      // Enviar el 'code' al backend para intercambiarlo por tokens
      const response = await axios.post(
        "http://localhost:5000/api/auth/exchange-token",
        { code }
      );
      console.log("Tokens received:", response.data);
      setToken(response.data);
      createPlaylist(trackUris, token);
    } catch (error) {
      console.error("Error exchanging code for tokens:", error);
      redirectHome();
    }
  };
  const redirectHome = () => {
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  useEffect(() => {
    if (!isCodeProcessed) {
      const code = getAuthorizationCode();
      if (code) {
        exchangeToken(code);
        setIsCodeProcessed(true); // Marcar como procesado
      } else {
        console.error("No authorization code found in the URL");
      }
    }
  }, [isCodeProcessed]);
  useEffect(() => {
    if (token) {
      createPlaylist(trackUris, token);
    }
  }, [token]);

  return (
    <div className="processing text-center">
      <img src={spotifyLogo} alt="Spotify Logo" className="spotify-logo mt-5" />
      <h1 className="p-5">Processing Spotify Playlist...</h1>
    </div>
  );
};

export default Callback;
