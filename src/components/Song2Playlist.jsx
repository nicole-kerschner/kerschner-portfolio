import Header from "./Header.jsx";
import song_2_playlist_icon from "./images/song_2_playlist_icon.png";
import personas from "./images/personas.png";
import survey_header from "./images/survey_header.png";
import prototype from "./images/song_2_playlist_prototype.png";
import storyboard from "./images/storyboard.png";
import Button from "react-bootstrap/Button";
function Song2Playlist() {
  return (
    <div>
      <Header />
      <h1 className="margin-left project-header">Song2Playlist</h1>
      <h3 className="margin-left">
        Human Centered Computing Methods: Harvey Mudd College
      </h3>
      <div className="overview">
        <img src={song_2_playlist_icon} className="overview-img" />
        <div className="overview-text">
          <p>
            <b>Overview:</b>
          </p>
          <p>
            If Spotify has over 100 million songs, why can it be so hard to find
            music that you like? This was a completely self-directed UX Research
            project in which I gathered data from 35 Spotify users by way of various UX
            Research methods. I found that users want to have a more active role
            in their music recommendations, and they want information about why
            they’re getting the recommendations that they are.
          </p>
        </div>
      </div>
      <p className="margin-left">
        <b>Timeline:</b> September - December 2025
      </p>
      <p className="margin-left">
        <b>Role:</b> UX Researcher
      </p>

      <hr className="divider" />
      <h1 className="margin-left project-header">Executive Summary</h1>
      <p className="margin-left width-90">
        <b>Problem: </b> Users expressed distaste for Spotify recommendations,
        particularly new music recommendations. My goal for this project was to
        understand why and figure out how to develop a potential solution.
      </p>
      <div className="margin-left width-9 exec-summary">
        <div>
          <p>
            <b>Participants:</b>

            <ul>
              <li>35 Spotify users</li>
              <li>Mostly "casual listeners"</li>
            </ul>
          </p>

          <p>
            <b>Methods:</b>

            <ul>
              <li>Think Aloud Protocol</li>
              <li>Directed Storytelling</li>
              <li>Survey</li>
              <li>Storyboards and Speed Dating</li>
              <li>Contextual Prototyping</li>
            </ul>
          </p>
        </div>
        <div className="key-insights">
          <p>
            <b>Key Insights:</b>

            <ul>
              <li>
                Users are naturally drawn to <b>familiar</b> artists/songs
              </li>
              <li>
                When users find a song that they love, they want to listen to it
                frequently, which might <b>motivate</b> them to create a
                playlist
              </li>
              <li>
                Users will blend music across genres, instead focusing on a
                unifying “<b>theme</b>”
              </li>
              <li>
                Users need a way to have a more <b>active say</b> in their
                recommendations
              </li>
              <li>
                Users want more information about <b>why</b> they’re getting the
                recommendations that they are
              </li>
            </ul>
          </p>
        </div>
      </div>
      <hr className="divider" />
      <h1 className="margin-left project-header">Methods</h1>
      <div className="margin-left">
        <h3>
          <b>Think Aloud Protocol</b>
        </h3>
        <p>
          <ul>
            <li>
              <b>Research Question:</b> How can we understand how users feel
              about Spotify’s recommendations for Discover Weekly?
            </li>
            <li>3 participants</li>
          </ul>
        </p>
      </div>
      <div className="margin-left">
        <h3>
          <b>Directed Storytelling</b>
        </h3>
        <p>
          <ul>
            <li>
              <b>Research Question:</b> How do users create playlists for
              themselves?
            </li>
            <li>7 participants</li>
            <li>
              <a
                href="https://drive.google.com/file/d/1DJG9yeBdVq5Rdh6t3AbO4xTtpeHh2gTd/view?usp=sharing"
                target="_blank"
              >
                Full Report Here
              </a>
            </li>
          </ul>
        </p>
        <div className="center-content">
          <img src={personas} className="project-photo width-600" />
          <p className="label">
            {" "}
            A sample persona about playlisting habits, created after analyzing
            interview data.
          </p>
        </div>
      </div>
      <div className="margin-left">
        <h3>
          <b>Survey</b>
        </h3>
        <p>
          <ul>
            <li>
              <b>Research Question:</b> What is the life cycle of music taste?
            </li>
            <li>19 participants</li>
            <li>
              <a
                href="https://drive.google.com/file/d/1jiB4yJBnqsGmQv48C-i_OkVa_aAjB9x2/view?usp=sharing"
                target="_blank"
              >
                Full Report Here
              </a>
            </li>
          </ul>
        </p>
        <div className="center-content">
          <img src={survey_header} className="project-photo width-500" />
          <p className="label">
            {" "}
            The header of the survey sent out to participants.
          </p>
        </div>
      </div>
      <div className="margin-left">
        <h3>
          <b>Storyboards and Speed Dating</b>
        </h3>
        <p>
          <ul>
            <li>
              <b>Research Question:</b> Do users need a way to personalize
              recommendations?
            </li>
            <li>2 participants</li>
            <li>
              <a
                href="https://drive.google.com/file/d/1EOlxj9Dvdnk04l85FJvNoPIKo6U_KE7m/view?usp=sharing"
                target="_blank"
              >
                Full Report Here
              </a>
            </li>
          </ul>
        </p>
        <div className="center-content">
          <img src={storyboard} className="project-photo width-600" />
          <p className="label">
            {" "}
            One of three storyboards that I “speed dated” with participants.
          </p>
        </div>
      </div>
      <div className="margin-left">
        <h3>
          <b>Contextual Prototyping</b>
        </h3>
        <p>
          <ul>
            <li>
              <b>Research Question:</b> How might we give users more agency and
              information in their music recommendation?
            </li>
            <li>5 participants</li>
            <li>
              <a
                href="https://drive.google.com/file/d/1b-UmGi_JTqzZkMb9KYYJ2B3ZPST8brur/view?usp=sharing"
                target="_blank"
              >
                Full Report Here
              </a>
            </li>
          </ul>
        </p>
        <div className="center-content">
          <img src={prototype} className="project-photo width-600" />
          <p className="label">
            {" "}
            My low-fidelity prototype that I tested with participants.
          </p>
        </div>
      </div>
      <hr className="divider" />
      <h1 className="margin-left project-header">Implications</h1>
      <div className="margin-left width-90">
        <h3>How might we make a recommendation system more effective?</h3>
        <p>
          <ul>
            <li>
              Give users a more <b>active</b> say in music recommendation
            </li>
            <li>
              Whatever recommendation system shouldn’t just focus on new music,
              but also include music that users <b>already like</b>
              <ul>
                <li>This can be music that users liked a while ago</li>
                <li>Who knows what users will rediscover?</li>
              </ul>
            </li>
            <li>
              Allow users to match songs based on <b>vibe</b>
            </li>
            <li>
              Music discovery and recommendation is very personal, so a
              recommendation system needs to be <b>flexible</b>!
            </li>
          </ul>
        </p>
      </div>
      <hr className="divider" />
      <h1 className="margin-left project-header">Acknowledgements</h1>
      <div className="overview">
        <p className="thanks">
          <b>Special Thanks to:</b>
          <ul>
            <li>All of my participants</li>
            <li>
              My pilot testers:
              <ul>
                <li>Elena Miller</li>
                <li>Florence Lin</li>
                <li>Ivyer Qu</li>
              </ul>
            </li>
            <li>Professor Lynn Kirabo</li>
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

export default Song2Playlist;
