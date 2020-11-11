import React from 'react';
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Nav from "../Nav/Nav"

import "./Layout.css";


function Layout(props) {
  return (
    <div id="layout">
      <Header />
      <Nav />
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  );
}

export default Layout;