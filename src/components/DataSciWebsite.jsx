import Header from "./Header.jsx";
import data_sci_icon from "./images/data_sci_icon.png";
import whiteboard_wireframe from "./images/whiteboard_wireframe.png";
import courses_wireframe from "./images/courses_wireframe.png";
import early_faqs from "./images/early_faqs_page.png";
import progress from "./images/progress.png";
import poster from "./images/project_poster.png";
import Button from "react-bootstrap/Button";
function DataSciWebsite() {
  return (
    <div>
      <Header />
      <h1 className="margin-left project-header">
        Scripps Data Science Website
      </h1>
      <h3 className="margin-left">P-ai at the Claremont Colleges</h3>
      <div className="overview">
        <img
          src={data_sci_icon}
          className="overview-img"
          alt="a screenshot of the website's home page"
        />
        <div className="overview-text">
          <p>
            <b>Overview:</b>
          </p>
          <p>
            We created a user-friendly, comprehensive website for the Scripps
            College Data Science Minor, guided by Human-Centered Design
            Principles. I personally led the Software Engineering team, both
            working on creating the website itself and managing a team of other
            software engineers.
          </p>
          <p>
            The website is live here:
            <a href="https://scrippsdatascience.com/" target="_blank">
              {" "}
              <u>https://scrippsdatascience.com/ </u>
            </a>
          </p>
        </div>
      </div>
      <p className="margin-left">
        <b>Timeline:</b> September-December 2024
      </p>
      <p className="margin-left">
        <b>Role:</b> SWE Team Lead
      </p>
      <div className="collab-list">
        <p className="margin-left">
          <b>Collaborators:</b>
        </p>

        <ul className="margin-right">
          <li>Jay Renaker</li>
          <li>Hanna Kenyatta</li>
          <li>Sofia Robertson</li>
          <li>Ambika Tiwari</li>
        </ul>
        <ul>
          <li>Acquah Yaw Danquah</li>
          <li>Ceci Wade</li>
          <li>Diya Gangwar</li>
          <li>Elizabeth Ortega</li>
        </ul>
      </div>
      <hr className="divider" />
      <h1 className="margin-left project-header">Website Design</h1>
      <p className="margin-left width-90">
        The majority of the work on the Software Engineering side was
        transforming the UX/UI team’s visions into reality, but that didn’t mean
        we didn’t do our fair share of prototyping!
      </p>
      <div className="center-content">
        <img
          src={whiteboard_wireframe}
          className="width-600"
          alt="Two college students (Diya and Nicole) presenting in front of a whiteboard"
        />
        <p className="label">
          Diya and I presenting a low-fidelity wireframe for the Home Page.
        </p>
        <img
          src={courses_wireframe}
          className="width-600"
          alt="A screenshot of a webpage prototype giving details about required courses"
        />
        <p className="label">
          A Figma wireframe I created to envision the Courses Page.
        </p>
      </div>
      <hr className="divider" />
      <h1 className="margin-left project-header">Website Development</h1>
      <div className="overview">
        <div>
          <p>
            <b>Tech Stack:</b>

            <ul>
              <li>Node.js</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </p>
        </div>
        <p className="wesbite-dev-text">
          We built the website from scratch using Node.js, all the way from
          designing to deployment. I had previous experience building web apps
          but had never used React before, so there was a certain learning
          curve. I especially focused on the Home, Faculty, Resources, and About
          pages.
        </p>
      </div>
      <div className="center-content">
        <img src={early_faqs} className="early-faqs" alt="A screenshot of a webpage giving details about FAQs"/>
        <p className="label">An early version of the FAQs page.</p>
      </div>
      <hr className="divider" />
      <h1 className="margin-left project-header">Project Management</h1>
      <div className="overview">
        <p>
          As the Co-Project Manager and the leader of the Software Engineering
          Team, I learned so much about Project Management over the course of
          this project. From interviewing candidates, to running meetings, to
          debriefing with my Co-PM, I learned how to see a project through from
          start to finish.
        </p>
      </div>
      <div className="center-content">
        <img src={progress} className="progress-img" alt="A document with weekly progress details about the project"/>
        <p className="label">A screenshot from our weekly progress document.</p>
      </div>

      <hr className="divider" />
      <h1 className="margin-left project-header">Acknowledgements</h1>
      <div className="overview">
        <p className="thanks">
          <b>Special Thanks to:</b>
          <ul>
            <li>All of our interviewees</li>
            <li>
              The Scripps Data Science Faculty:
              <ul>
                <li>Professor Christina Edholm</li>
                <li>Professor Winston Ou</li>
                <li>Professor Michael Spezio</li>
              </ul>
            </li>
            <li>P-ai at the Claremont Colleges</li>
            <li>The Hive at the Claremont Colleges</li>
          </ul>
        </p>
        <img src={poster} className="poster-img" alt="My team with our project poster"/>
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

export default DataSciWebsite;
