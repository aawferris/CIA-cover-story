import React from 'react';
import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

import "./Navbar.css"

function Navigation(props) {
  return (
    <div id="nav-container">
      <Navbar bg="light" expand="lg">
        {/* <Navbar.Brand id="nav-brand" href="/">CIA Cover Story</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <div id="nav-link-container">
              <Nav.Link className="nav-link" href="https://www.cia.gov/index.html" target="_blank" rel="noopener noreferrer">Home</Nav.Link>
              <Nav.Link className="nav-link" href="https://en.wikipedia.org/wiki/Central_Intelligence_Agency" target="_blank" rel="noopener noreferrer" eventKey="link-1">About Us</Nav.Link>
              <Nav.Link className="nav-link" href="https://www.google.com/" target="_blank" rel="noopener noreferrer" eventKey="link-2">Intelligence</Nav.Link>
              <Nav.Link className="nav-link" href="https://www.addictinggames.com/action/spy" target="_blank" rel="noopener noreferrer" eventKey="link-3" disabled>Training</Nav.Link>
                <NavDropdown.Divider />
            </div>
            <div id="nav-drop-container">
            <NavDropdown title="Language" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">English</NavDropdown.Item>
              <NavDropdown.Item href="/es">Español</NavDropdown.Item>
              <NavDropdown.Item href="/ar">عربى</NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>
          <div id="form-container">
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
            </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;