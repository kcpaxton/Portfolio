import React from "react";
import "./App.css";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />

        <Home />
        <AboutMe />
        {/* <WorkExperience data={this.state.Experience} /> */}
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
