import React from 'react';

function Navbar(props) {
  return (
    <>
      <nav id="nav-bar">
        <ul>
          <li><a href="https://www.cia.gov/index.html" target="_blank" rel="noopener noreferrer">Home</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Central_Intelligence_Agency" target="_blank" rel="noopener noreferrer">About Us</a></li>
          <li><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Intelligence</a></li>
          <li><a href="https://www.addictinggames.com/action/spy" target="_blank" rel="noopener noreferrer">Training</a></li>
          <select name="lang-list" id="lang-list">
            <option value="blank">Language</option>
            <option value="./index.html">English</option>
            <option value="./indexES.html">Español</option>
            <option value="./indexAR.html">عربى</option>
          </select>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;