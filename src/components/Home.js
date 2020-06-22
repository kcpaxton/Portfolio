import React, { Component } from "react";
import Radium from "radium";
//import resume from "/documents/Kyle_Paxton_resume.pdf";

class Home extends Component {
  render() {
    return (
      <div style={{ ...Wrapper, ...Body, ...FlexContainer }}>
        <div style={FlexContainer}>
          <h1 style={NameTitle}>Kyle Paxton</h1>
          <div style={NameTitleLine}></div>
          <h1 style={SubTitle}>Web and Front-End Developer</h1>
        </div>
        <div style={{ ...FlexContainer, ...ButtonRow }}>
          <a
            href="https://github.com/kcpaxton"
            target="_blank"
            rel="noopener noreferrer"
            key="1"
            style={HomeButton}
          >
            Github
          </a>
          <a
            href={"/documents/Kyle_Paxton_resume.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            key="2"
            style={HomeButton}
          >
            Resume
          </a>

          <a
            href="https://www.linkedin.com/in/kyle-paxton/"
            target="_blank"
            rel="noopener noreferrer"
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
  paddingTop: "20px",
  marginBottom: "0px",
  fontSize: "3em",
  color: "#fff",
};

const NameTitleLine = {
  borderBottom: "5px solid",
  alignSelf: "center",
  width: "20%",
  margin: "2rem 0",
};
const SubTitle = {
  color: "#fff",
  margin: "0 0 3rem",
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
  marginBottom: "10rem",
};

export default Radium(Home);
