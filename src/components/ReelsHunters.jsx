import Header from "./Header.jsx";
import reels_hunters_header from "./images/reels_hunters_icon.png";
import reels_paper_prototype from "./images/reels_paper_prototype.png";
import reels_woz from "./images/reels_woz.png";
import reels_coded_prototype from "./images/reels_coded_prototype.png"
import Button from "react-bootstrap/Button";
function ReelsHunters() {
  return (
    <div>
      <Header />
      <h1 className="margin-left project-header">Reels Hunters</h1>
      <h3 className="margin-left">
        Computational Design Tools: Pomona College
      </h3>
      <div className="overview">
        <img
          src={reels_hunters_header}
          className="overview-img"
          alt="Reels Hunters Intro Screen"
        />
        <div className="overview-text">
          <p>
            <b>Overview:</b>
          </p>
          <p>
            Many people are addicted to scrolling, but few are successful with
            quitting cold-turkey or implementing their own restrictions. Reel
            Hunters is an app designed to help the user pace themselves when
            watching short form content, forcing them to slow down and actually
            take in and remember the videos they watch.
          </p>
        </div>
      </div>
      <p className="margin-left">
        <b>Timeline:</b> March 2026 - May 2026
      </p>
      <p className="margin-left">
        <b>Role:</b> Team Member
      </p>
      <div className="collab-list">
        <p className="margin-left">
          <b>Collaborators:</b>
        </p>

        <ul className="margin-right">
          <li>Emma Gandonou</li>
          <li>PJ James</li>
          <li>Ivyer Qu</li>
          <li>Alyssa Wu</li>
        </ul>
      </div>
      <hr className="divider" />
      <h1 className="margin-left project-header">Needfinding</h1>
      <p className="margin-left width-90">
        The original motivation for our project to make short-form content
        consumption more intentional. We interviewed five students about their
        short-form content usage and their opinions on games such as Pokémon Go
        that incentivize movement.
      </p>
      <div>
        <p className="margin-left">
          <b>Critical Impressions:</b>
          <ul>
            <li>
              Participants generally felt shame about their short form content
              consumption
            </li>
            <li>Current methods (e.g. screen time limits) often fail</li>
          </ul>
        </p>
        <p className="margin-left">
          These impressions led to the following design goals:
        </p>
        <p className="margin-left">
          <b>Design Goals:</b>
          <ol>
            <li>Add friction to watching reels</li>
            <li>Support community building (“more friends, fewer reels”)</li>
            <li>Support reflection-in-action</li>
          </ol>
        </p>
      </div>
      <hr className="divider" />
      <h1 className="margin-left project-header">Paper Prototype</h1>
      <p className="margin-left width-90">
        We decided that users could catch Instagram reels shaped like bugs in a
        net, then either discard, save, or trade the reel with a friend. Between
        “swarms” of reels, the user must take 1000 steps to reset both
        physically and mentally.
      </p>
      <p className="margin-left width-90">
        We used paper to create a low visual fidelity prototype of all of the
        screens in the main catching mechanic and a mechanic to trade reels with
        friends. This forces the user to be intentional about watching short
        videos.
      </p>
      <div className="center-content">
        <img
          src={reels_paper_prototype}
          className="width-500"
          alt="Paper 'phone' screens with drawings of fake Instagram reels with bug wings and antennae/"
        />
        <p className="label">
          A paper prototype of the core “reel catching” mechanic and trading
          mechanic.
        </p>
      </div>
      <hr className="divider" />
      <h1 className="margin-left project-header">Wizard of Oz Prototype</h1>
      <p className="margin-left width-90">
        To increase visual, breadth, and depth fidelity, we developed a
        click-through prototype in Figma that allows the user to click through
        the main elements of the app. I particularly developed worked on the
        trading and inventory screens. We used this version to get feedback from
        users and iterate for our final prototype.
      </p>
      <div className="center-content">
        <img
          src={reels_woz}
          className="width-600"
          alt="Screenshots from the Figma prototype of different app screens."
        />
        <p className="label">
          Screenshots of the Home, Catching, Inventory, Friends, and Profile
          screens in the Figma Prototype
        </p>
      </div>
      <hr className="divider" />
      <h1 className="margin-left project-header">
        Finalized Prototype + Evaluation
      </h1>
      <div className="overview">
        <div>
          <p>
            <b>Tech Stack:</b>

            <ul>
              <li>Expo</li>
              <li>React Native</li>
              <li>Version control with GitHub</li>
            </ul>
          </p>
        </div>
        <p className="wesbite-dev-text">
          Using the feedback we received from the Wizard of Oz Prototype, we
          developed a coded version in React Native. We evaluated this prototype
          with five users, comparing scrolling on Instagram to using Reels
          Hunters. We found that using Reels Hunters forced the users to watch
          fewer reels and remember more.
        </p>
      </div>
      <div className="center-content">
        <img
          src={reels_coded_prototype}
          className="width-600"
          alt="Screenshots of different app screens from the coded prototype"
        />
        <p className="label">
          The Login, Catching, Inventory, Friends, and Profile screens in the final prototype
        </p>
      </div>

      <hr className="divider" />
      <h1 className="margin-left project-header">Acknowledgements</h1>
      <div className="overview">
        <p className="thanks">
          <b>Special Thanks to:</b>
          <ul>
            <li>All of our interviewees</li>
            <li>Professor Jingyi Li</li>
          </ul>
        </p>
      </div>
      <hr className="divider" />
      <div className="center-content">
        <Button className="see-selected-work margin-bottom" href="/projects">
          Back to Projects
        </Button>
      </div>
    </div>
  );
}

export default ReelsHunters;
