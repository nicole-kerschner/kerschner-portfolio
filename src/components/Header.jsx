import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import resume from "./files/PortfolioResume.pdf";

function Header() {
  return (
    <div className="navbar">
      <Navbar expand="lg" sticky="top" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/" className="nav-brand">
            Nicole Kerschner
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link
                href="/about"
                className={
                  location.pathname === "/about"
                    ? "active"
                    : "nav_text"
                }
              >
                About
              </Nav.Link>
              {/* <NavDropdown title="Projects" href="/projects" className={
                  location.pathname == "/projects"
                    ? "active nav_text"
                    : "nav_text"
                }>
              <NavDropdown.Item href="/projects/song-2-playlist">Song2Playlist</NavDropdown.Item>
              <NavDropdown.Item href="/projects/common-ground">Common Ground</NavDropdown.Item>
              <NavDropdown.Item href="/projects/data-sci-website">Scripps Data Science Website</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/projects">
                See all projects
              </NavDropdown.Item>
            </NavDropdown> */}
              <Nav.Link
                href="/projects"
                className={
                  location.pathname == "/projects"
                    ? "active"
                    : "nav_text"
                }
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href={resume} download
                className="inactive-nav"
              >
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
