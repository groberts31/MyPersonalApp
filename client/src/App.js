import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./family.png";
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
          </header>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
