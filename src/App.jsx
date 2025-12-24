import "./App.css";

import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import DataSciWebsite from "./components/DataSciWebsite.jsx";
import CommonGround from "./components/CommonGround.jsx"
import Song2Playlist from "./components/Song2Playlist.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects/data-sci-website" element={<DataSciWebsite />} />
        <Route exact path="/projects/common-ground" element={<CommonGround/>} />
        <Route exact path="/projects/song-2-playlist" element={<Song2Playlist/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
