import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const abc = "nfklanfkweg";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hey it is feature v1</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn P React
        </a>
      </header>
    </div>
  );
}

export default App;
