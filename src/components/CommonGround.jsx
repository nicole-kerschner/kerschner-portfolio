import Header from "./Header.jsx";
import common_ground_home from "./images/common_ground_home.png";
import paper_prototypes from "./images/paper_prototypes.png";
import playtest from "./images/playtest.png";
import digital_playtest from "./images/digital_playtest.png";
import main_game_screen from "./images/main_game_screen.png";
import common_ground_gameplay from "./images/common_ground_gameplay.png";
import team_photo from "./images/team_photo_ucs.png";
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
        <img
          src={common_ground_home}
          className="overview-img"
          alt="The Common Ground Start Screen, with options to Start Game and Start Tutorial"
        />
        <div className="overview-text">
          <p>
            <b>Overview:</b>
          </p>
          <p>
            The Union of Concerned Scientists (UCS) has been doing research in
            small agricultural communities in California’s Central Valley to
            explore how repurposing agricultural land can improve sustainability
            and water security. My team and I created a digital strategy-based
            game that showcases the benefits of this land repurposing. We
            started with brainstorming and design, and are now focused on
            building out actual gameplay.
          </p>
          <p>
            Read the Blog Post from UCS:
            <a
              href="https://blog.ucs.org/erin-woolley/common-ground-video-game-lets-players-manage-cropland-transition-in-californias-central-valley/"
              target="_blank"
            >
              {" "}
              <u>Common Ground Blog Post</u>
            </a>
          </p>
          <p>
            Play Common Ground:
            <a href="https://common-ground-game.netlify.app/" target="_blank">
              {" "}
              <u>https://common-ground-game.netlify.app/</u>
            </a>
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
        <img
          src={paper_prototypes}
          className="width-600"
          alt="Three paper cards depicting the Stormwater Basin option, with increasing visual refinement."
        />
        <p className="label">
          Iterations of land repurposing project cards across paper prototypes.
        </p>
      </div>
      <hr className="divider" />
      <h1 className="margin-left project-header">Game Design - Playtests</h1>
      <p className="margin-left width-90">
        Throughout the course of development, our primary source of feedback
        came from playtests. Overall, 48 players (both students and experts)
        played our game throughout various stages of development. We received an
        immeasureable amount of valuable feedback from these playtests, and they
        shaped many of the core aspects of the game.
      </p>
      <p className="margin-left width-90">
        During the Fall Semester, our playtests were run on a paper version of
        the game, where game developers took notes on gameplay and user
        Experiences, Observations, Theories, and Actions (EOTA model).
      </p>
      <p className="margin-left width-90">
        During the Spring Semester, we ran playtests with a digital version of
        the game. Because we were using a higher-fidelity version, also gathered
        feedback on clarity, flow, balance, duration, integration, fun,
        interaction, and competition via a Likert-scale survey. This allowed us
        to formalize some of the feedback we were given, as well as see changes
        over time.
      </p>
      <div className="image-container">
        <div className="center-content">
          <img
            src={playtest}
            className="width-400"
            alt="A game setup from a playtest, with a paper gameboard and cards."
          />
          <p className="label">
            A photo from one of our paper playtests with the game board,
          </p>
          <p className="label">
            land repurposing cards, and metric sheet visible.
          </p>
        </div>
        <div className="center-content">
          <img
            src={digital_playtest}
            className="width-600"
            alt="A digital playtest with four players gathered around a TV screen with the game displayed."
          />
          <p className="label">
            A photo from one of our digital playtests with players gathered
            around a single screen to play.
          </p>
        </div>
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
        <img
          src={common_ground_gameplay}
          className="width-700"
          alt="The prototyped game screen with a proposed card, the game board, and tutorial text."
        />
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
              <li>Version control with GitHub</li>
            </ul>
          </p>
        </div>
        <p className="wesbite-dev-text">
          We used the game engine Godot for development. During gameplay,
          players assume one of four roles and work together to effectively
          repurpose farmland by building sustainable alternatives. They must
          successfully negotiate, build, and mitigate natural disasters to
          succeed!
        </p>
      </div>
      <div className="center-content">
          <img
            src={main_game_screen}
            className="width-700"
            alt="A more refined digital version of the game screen with a proposed card and the game board"
          />
          <p className="label">
            The final digital version of the proposal game mechanic.
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
        <img
            src={team_photo}
            className="width-400"
            alt="The full team with our UCS advisors in front of the California Capitol Building"
          />
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
