/*
Code for the Home Page
*/
import song_2_playlist_icon from "./images/song_2_playlist_icon.png";
import common_ground_icon from "./images/common_ground_icon.png";
import data_sci_icon from "./images/data_sci_icon.png";

import Header from "./Header.jsx";
import { FaArrowRight } from "react-icons/fa";

import Button from "react-bootstrap/Button";

function Projects() {
  return (
    <div>
      <Header />
      <div>
        <div className="project-box">
          <img src={song_2_playlist_icon} className="project-icon" alt="Song2Playlist Icon"/>
          <div className="project_label">
            <h2>Song2Playlist</h2>
            <h4>Harvey Mudd College</h4>
            <p className="info-text">
              A semester-long UX Research Project about Spotify recommendations.
            </p>
            <Button className="see-more" href="/projects/song-2-playlist">
              See More <FaArrowRight />{" "}
            </Button>
          </div>
        </div>
        <hr className="divider" />
        <div className="project-box">
          <img src={common_ground_icon} className="project-icon" alt="Common Ground Icon"/>
          <div className="project_label">
            <h2>Common Ground</h2>
            <h4>Harvey Mudd College + The Union of Concerned Scientists</h4>
            <p className="info-text">
              A year-long Senior Capstone project to create an educational video
              game.
            </p>
            <Button className="see-more" href="/projects/common-ground">
              See More <FaArrowRight />{" "}
            </Button>
          </div>
        </div>
        <hr className="divider" />
        <div className="project-box">
          <img src={data_sci_icon} className="project-icon" alt="Data Science Website Icon"/>
          <div className="project_label">
            <h2>Scripps Data Science Website</h2>
            <h4>P-ai at the Claremont Colleges</h4>
            <p className="info-text">
              Created a website for the Scripps College Data Science Department using Human Centered Design Principles.
            </p>
            <Button className="see-more" href="/projects/data-sci-website">
              See More <FaArrowRight />{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
