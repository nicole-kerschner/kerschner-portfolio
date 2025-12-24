import Header from "./Header.jsx";
import common_ground_home from "./images/common_ground_home.png";
import paper_prototypes from "./images/paper_prototypes.png";
import playtest from "./images/playtest.png";
import common_ground_gameplay from "./images/common_ground_gameplay.png";
import Button from "react-bootstrap/Button";
function CommonGround() {
  return (
    <div>
      <Header />
      <h1 className="margin-left project-header">Common Ground</h1>
      <h3 className="margin-left">
        The Union of Concerned Scientists & Harvey Mudd College Clinic Program
      </h3>
      <div className="overview">
        <img src={common_ground_home} className="overview-img" />
        <div className="overview-text">
          <p>
            <b>Overview:</b>
          </p>
          <p>
            The Union of Concerned Scientists (UCS) has been doing research in
            small agricultural communities in California’s Central Valley to
            explore how repurposing agricultural land can improve sustainability
            and water security. My team and I are creating a digital
            strategy-based game that showcases the benefits of this land
            repurposing. We started with brainstorming and design, and are now
            focused on building out actual gameplay.
          </p>
        </div>
      </div>
      <p className="margin-left">
        <b>Timeline:</b> September 2025 - May 2026
      </p>
      <p className="margin-left">
        <b>Role:</b> Fall Team Lead/Team Member
      </p>
      <div className="collab-list">
        <p className="margin-left">
          <b>Collaborators:</b>
        </p>

        <ul className="margin-right">
          <li>Vibhu Krishnan</li>
          <li>Mia Mirabelli</li>
          <li>Ria Rajasekar</li>
          <li>Laura Vairus (Spring Team Lead)</li>
        </ul>
      </div>
      <hr className="divider" />
      <h1 className="margin-left project-header">
        Game Design - Paper Prototyping
      </h1>
      <p className="margin-left width-90">
        A large part of the initial game design was based on paper prototyping
        and iteration. We created many low-fidelity paper protypes, increasing
        in data and visual fidelity as we refined our ideas. While the entire
        brainstorming and design process was very much a team effort, I in
        particular iterated on the event cards, the land types, and game tiles.
      </p>
      <div className="center-content">
        <img src={paper_prototypes} className="width-600" />
        <p className="label">
          Iterations of land repurposing project cards across paper prototypes.
        </p>
      </div>
      <hr className="divider" />
      <h1 className="margin-left project-header">Game Design - Playtests</h1>
      <p className="margin-left width-90">
        Throughout the course of development, we have run four playtests with
        various prototypes of the game. These playtests have given us invaluable
        feedback, particularly as we try to make the game as fun as possible.
      </p>
      <p className="margin-left width-90">
        I ran one playtest completely solo with some of my own friends, asking
        for feedback on their Experiences, Observations, Theories, and Actions
        (the EOTA model).
      </p>
      <div className="center-content">
        <img src={playtest} className="width-400" />
        <p className="label">
          A photo from one of our playtests with the game board, land
          repurposing cards, and metric sheet visible.
        </p>
      </div>
      <hr className="divider" />
      <h1 className="margin-left project-header">
        Game Design - Digital Prototyping
      </h1>
      <p className="margin-left width-90">
        After many rounds of iteration on paper prototypes, we wanted to
        increase visual and interactive fidelity by creating a digital prototype
        on Figma. This effort culminated in a click-through prototype on Figma,
        where we designed all of the screens for a round of the game with high
        interactive fidelity.
      </p>
      <div className="center-content">
        <img src={common_ground_gameplay} className="width-600" />
        <p className="label">
          A digital prototype of the card proposal game mechanic.
        </p>
      </div>
      <hr className="divider" />
      <h1 className="margin-left project-header">Game Development</h1>
      <div className="overview">
        <div>
          <p>
            <b>Tech Stack:</b>

            <ul>
              <li>Godot (GDScript)</li>
              <li>Export as an HTML5 File</li>
            </ul>
          </p>
        </div>
        <p className="wesbite-dev-text">
          We are still in the process of developing the game! Check back in for
          updates!
        </p>
      </div>

      <hr className="divider" />
      <h1 className="margin-left project-header">Acknowledgements</h1>
      <div className="overview">
        <p className="thanks">
          <b>Special Thanks to:</b>
          <ul>
            <li>All of our playtesters</li>
            <li>
              Our UCS Liaisons:
              <ul>
                <li>Dr. Angel Santiago Fernandez Bou</li>
                <li>Erin Woolley, J.D.</li>
                <li>Victoria Bortfield, M.P.H.</li>
                <li>Dr. Amanda Fencl</li>
              </ul>
            </li>
            <li>Our Faculty Advisor: Professor Lynn Kirabo</li>
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

export default CommonGround;
