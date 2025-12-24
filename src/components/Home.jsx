/*
Code for the Home Page
*/
import headshot from "./images/headshot.png";
import Header from './Header.jsx'
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <div>
    <Header/>
    <div className="home">
      <img src={headshot} className="headshot" />
      <div className="home-text">
        <h1 className="left-aligned brown-text">Hi, I'm Nicole!</h1>
        <p className="home-p">
          I’m a senior at Scripps College, studying Math and Computer Science at
          Harvey Mudd College.
        </p>
        <p className="home-p">
          I’m interested in Education, Human-Computer Interaction (HCI), and Software Development.
        </p>
      </div>
    </div>
      <div className="center-content">
        <Button className="see-selected-work" href="/projects">See Selected Work</Button>
      </div>
    </div>
  );
}

export default Home;
