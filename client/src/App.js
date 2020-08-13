import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Wrapper>
          <h1>Welcome To The Roberts Page!!!</h1>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
