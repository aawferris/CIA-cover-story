import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

import "./Navbar.css"

function Navbar(props) {
  return (
    <div id="nav-container">
      <div >
        <Nav id="nav-elements" activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
          <Nav.Item className="nav-item">
            <Nav.Link className="nav-link" href="https://www.cia.gov/index.html" target="_blank" rel="noopener noreferrer">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link className="nav-link" href="https://en.wikipedia.org/wiki/Central_Intelligence_Agency" target="_blank" rel="noopener noreferrer" eventKey="link-1">About Us</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link className="nav-link" href="https://www.google.com/" target="_blank" rel="noopener noreferrer" eventKey="link-2">Intelligence</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link className="nav-link" href="https://www.addictinggames.com/action/spy" target="_blank" rel="noopener noreferrer" eventKey="link-3" disabled>Training</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div id="dropdown-container">
      <DropdownButton id="dropdown-item-button" title="Language">
        <Dropdown.ItemText>Language</Dropdown.ItemText>
        <Dropdown.Item as="/">English</Dropdown.Item>
        <Dropdown.Item as="/espanol">Español</Dropdown.Item>
        <Dropdown.Item as="arabic">عربى</Dropdown.Item>
      </DropdownButton>
      </div>
    </div>
  );
}

export default Navbar;