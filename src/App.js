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
  /* #region  Constructor */
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);

    this.state = {
      showSideMenu: false,
    };
  }
  /* #endregion */

  /* #region  Event Handlers */
  handler() {
    this.setState({
      showSideMenu: !this.state.showSideMenu,
    });
  }
  /* #endregion */

  /* #region  Lifecycle */
  componentDidMount() {
    document.title = "Kyle Paxton";
  }
  /* #endregion */

  render() {
    /* #region  Return */
    return (
      <div className={"App primaryColor"}>
        <StyleRoot>
          <NavBar action={this.handler} />
          <div style={this.state.showSideMenu ? overlay : null}>
            <Home />
            <AboutMe />
            <Skills />
            <Projects />

            <Contact />
          </div>
        </StyleRoot>
      </div>
      /* #endregion */
    );
  }
}

/* #region  Styles */
const overlay = {
  backgroundColor: "#000",
  opacity: "0.1",
};
/* #endregion */

export default App;
