import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import Homepage from "./Homepage";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <h1>This renders</h1>
      <Navbar />
      <Route exact path="/">
        <Homepage />
      </Route>
    </div>
  );
}

export default App;
