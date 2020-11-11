import React from 'react';
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"

import "./Layout.css";


function Layout(props) {
  return (
    <div id="layout">
      <Header />
      <Navbar />
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  );
}

export default Layout;