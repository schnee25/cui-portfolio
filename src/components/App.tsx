import React, { Component } from "react";
import Terminal from "./Tarminal";
import "../assets/css/font.css";

class App extends Component {
  render() {
    return (
      <>
        <div>
          <h1>CUI portfolio</h1>
          <Terminal />
        </div>
      </>
    );
  }
}

export default App;
