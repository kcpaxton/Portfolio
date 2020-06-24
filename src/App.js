import React from "react";
import "./App.css";
import "./GlobalStyles.css";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import { StyleRoot } from "radium";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

class App extends React.Component {
  componentDidMount() {
    document.title = "Kyle Paxton";
  }
  render() {
    return (
      <div className={"App primaryColor"}>
        <StyleRoot>
          <NavBar />

          <Home />
          <AboutMe />
          <Skills />
          <Projects />

          <Contact />
        </StyleRoot>
      </div>
    );
  }
}

export default App;
