import Header from "./Header.jsx";
import full_body from "./images/full_body_image.png";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
function About() {
  return (
    <div>
      <Header />
      <h1 className="margin-left">About</h1>
      <div className="about">
        <div>
          <img
            src={full_body}
            className="full-body"
            alt="Nicole Kerschner full body image"
          ></img>
        </div>
        <div className="about-text">
          <p>
            I’ve been fascinated with computers since I was nine years old and
            teaching since I was in high school. I want to pursue a career in
            Educational Technology, shaping systems and curricula to help
            students succeed.
          </p>
          <p>
            I’m currently a senior at Scripps College, studying Math and
            Computer Science through the program at Harvey Mudd College. I’m
            especially interested in Human-Computer Interaction (HCI). I’m also
            the President of the Scripps Cheese Club!
          </p>
          <p>
            I’ve most recently completed a second internship at Scout Clean
            Energy in Boulder, CO, developing Geospatial (GIS) tools and
            software for clean energy development.
          </p>
        </div>
      </div>
      <div className="margin-left">
        <a className="linked" href="mailto:nicole.p.kerschner@gmail.com">
          <MdEmail /> Email
        </a>
        <br />
        <a
          className="linked"
          target="_blank"
          href="https://www.linkedin.com/in/nicole-kerschner"
        >
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </div>
  );
}

export default About;
