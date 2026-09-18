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
            teaching since I was in high school. I want to pursue research in HCI and education,
            particularly Math, CS, and language eduation.
          </p>
          <p>
            I recently graduated from Scripps College, where I studied Computer Science and
            Math through the program at Harvey Mudd College. I'm now teachning ESL (English as a second language)
            in Miranda de Ebro, Spain.
          </p>
          <p>
            My professional experience spans creating GIS tools for clean energy development,
            educational game design and development, and most recently implementing HCI principles
            to create UI in a lab ennvironment for the Magnetic Imaging Group at the National Institute of
            Standards and Technology (NIST). I've also taught and tutored Math and English for students from 1st-12th grade.
          </p>
          <p>
            Outside of work, I love to read, hike, ski, and eat cheese!
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
