import React, { Component } from "react";
import Radium from "radium";

class Home extends Component {
  render() {
    /* #region  Return */
    return (
      <div style={{ ...Wrapper, ...Body, ...FlexContainer }}>
        <div style={FlexContainer}>
          <h1 style={NameTitle}>KYLE PAXTON</h1>
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
    /* #endregion */
  }
}

/* #region  Styles */
const NameTitle = {
  paddingTop: "20px",
  marginBottom: "0px",
  fontSize: "6em",
  color: "beige",
  letterSpacing: "0.5rem",
  "@media (max-width: 576px)": {
    fontSize: "4.5em",
  },
};

const NameTitleLine = {
  borderBottom: "5px solid darkgoldenrod",
  alignSelf: "center",
  width: "40%",
  margin: "2rem 0",
};
const SubTitle = {
  color: "beige",
  margin: "0 0 3rem",
  fontWeight: "300",
  fontSize: "2.3em",
};

const ButtonRow = {
  justifyContent: "center",
  marginTop: "30px",
  flexDirection: "row",
  flewWrap: "wrap",
};

const HomeButton = {
  margin: "0 30px 0 30px",
  background: "beige",
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
  "@media (max-width: 576px)": {
    margin: "10px",
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
/* #endregion */

export default Radium(Home);
