import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import React from "react";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Contact from "../contact/Contact";
import Portafolio from "../portafolio/Portafolio";
import Resume from "../resume/Resume";
import Intro from "../intro/Intro";

export default function Topbar() {
  return (
  <BrowserRouter>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#intro">Bethaly-Portafolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <NavDropdown title="Resume" id="resume-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/Resume">
                    {" "}
                    Resume Document
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Timeline">
                    Timeline
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Reference">
                    Reference
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Portafolio" id="portafolio-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/Portafolio">
                    Software Developer
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Portafolio">
                    Web Developer
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Portafolio">
                    App Developer
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/Portafolio">
                  Achivements
                </Nav.Link>
                <Nav.Link href="#Contact">Contact Me</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/portafolio" element={<Portafolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/" element= {<Intro />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}
    