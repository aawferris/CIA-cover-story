import React from "react";
import "./App.css";

import Homepage from "./components/Homepage/Homepage";
import Layout from "./components/shared/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Homepage />
      </Layout>
    </div>
  );
}

export default App;
