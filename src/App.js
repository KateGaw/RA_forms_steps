import React from "react";
import "./App.css";

import Steps from "./components/Steps";

function App() {
  return (
    <div className="container">
      <div className="background-element"> </div>{" "}
      <div className="highlight-window">
        <div className="highlight-overlay"> </div>{" "}
      </div>{" "}
      <div className="window">
        <Steps />
      </div>{" "}
    </div>
  );
}

export default App;
