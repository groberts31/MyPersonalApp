import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./family.png";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import Family from "./pages/Family";
// import About from "./pages/About";
// import Activities from "./pages/Activities";
// import App1 from "./App.js";



function App() {
  return (
    <Router>
      <div className="App">
        <Wrapper>
          <h1>Welcome To The Roberts Page!!!</h1>
          <Navbar />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          {/* <Route exact path="/" component={App1} />
          <Route exact path="/about" component={About} />
          <Route exact path="/family" component={Family} />
          <Route exact path="/activities" component={Activities} /> */}
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
