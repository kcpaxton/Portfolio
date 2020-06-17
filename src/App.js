import React from "react";
import "./App.css";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

import Radium, { StyleRoot } from "radium";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

class App extends React.Component {
  componentDidMount() {
    document.title = "Kyle Paxton";
  }
  render() {
    return (
      <div className="App">
        <StyleRoot>
          <NavBar />

          <Home />
          <AboutMe />

          <Projects />

          <Contact />
        </StyleRoot>
      </div>
    );
  }
}

export default App;
