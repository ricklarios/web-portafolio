import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Callback from "./pages/Callback";
import "./styles/App.css";
import { createContext, useEffect, useState } from "react";

export const TrackUrisContext = createContext();
function TrackUrisProvider({ children }) {
  const [trackUris, setTrackUris] = useState(() => {
    const savedUris = localStorage.getItem("trackUris");
    return savedUris ? JSON.parse(savedUris) : [];
  });
  const [token, setToken] = useState(() => {
    return localStorage.getItem("spotifyToken") || null;
  });
  // Guardar `trackUris` en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("trackUris", JSON.stringify(trackUris));
  }, [trackUris]);

  // Guardar `token` en localStorage cada vez que cambie
  useEffect(() => {
    if (token) {
      localStorage.setItem("spotifyToken", token);
    }
  }, [token]);

  return (
    <TrackUrisContext.Provider
      value={{ trackUris, setTrackUris, token, setToken }}
    >
      {children}
    </TrackUrisContext.Provider>
  );
}
function App() {
  return (
    <Router>
      <div className="App">
        <TrackUrisProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/callback" element={<Callback />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TrackUrisProvider>
      </div>
    </Router>
  );
}

export default App;
