import React, { Component } from "react";
import Radium from "radium";
//import resume from "/documents/Kyle_Paxton_resume.pdf";

class Home extends Component {
  render() {
    return (
      <div style={(Wrapper, Body, FlexContainer)}>
        <div>
          <h1 style={NameTitle}>Kyle Paxton</h1>
          <h1 style={{ color: "#fff" }}>Web and Front-End Developer</h1>
        </div>
        <div style={(FlexContainer, ButtonRow)}>
          <a
            href="https://github.com/kcpaxton"
            target="_blank"
            key="1"
            style={HomeButton}
          >
            Github
          </a>
          <a
            href={"/documents/Kyle_Paxton_resume.pdf"}
            target="_blank"
            key="2"
            style={HomeButton}
          >
            Resume
          </a>

          <a
            href="https://www.linkedin.com/in/kyle-paxton/"
            target="_blank"
            key="3"
            style={HomeButton}
          >
            LinkedIn
          </a>
        </div>
      </div>
    );
  }
}

const NameTitle = {
  padding: "20px",
  marginBottom: "0px",
  fontSize: "3em",
  color: "#fff",
};

const ButtonRow = {
  justifyContent: "center",
  marginTop: "30px",
  flexDirection: "row",
  flewWrap: "wrap",
};

const HomeButton = {
  margin: "0 30px 0 30px",
  background: "white",
  padding: "15px 30px",
  borderRadius: "10px",
  fontSize: "large",
  fontWeight: "bold",
  cursor: "pointer",
  opacity: "0.8",
  color: "#000",
  textDecoration: "none",
  ":focus": {
    outline: "none",
  },
  ":hover": {
    opacity: "1",
  },
};

const Wrapper = {
  maxWidth: "100%",
};

const FlexContainer = {
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
};
const Body = {
  color: "#fff",
};

export default Radium(Home);
