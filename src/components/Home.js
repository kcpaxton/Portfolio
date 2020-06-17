import React, { Component } from "react";
import { Column, Row } from "simple-flexbox";
import Radium from "radium";
//import resume from "/documents/Kyle_Paxton_resume.pdf";

class Home extends Component {
  render() {
    return (
      <div style={(Wrapper, Body)}>
        <Column flexGrow={1}>
          <Row horizontal="center">
            <h1 style={NameTitle}>Kyle Paxton</h1>
          </Row>
          <Row horizontal="center">
            <h1>Web and Front-End Developer</h1>
          </Row>
          <Row style={ButtonRow}>
            <Column>
              <a
                href="https://github.com/kcpaxton"
                target="_blank"
                key="1"
                style={HomeButton}
              >
                Github
              </a>
            </Column>
            <Column>
              <a
                href={"/documents/Kyle_Paxton_resume.pdf"}
                target="_blank"
                key="2"
                style={HomeButton}
              >
                Resume
              </a>
            </Column>
            <Column>
              <a
                href="https://www.linkedin.com/in/kyle-paxton/"
                target="_blank"
                key="3"
                style={HomeButton}
              >
                LinkedIn
              </a>
            </Column>
          </Row>
        </Column>
      </div>
    );
  }
}

const NameTitle = {
  borderBottomWidth: "4px",
  borderBottomStyle: "solid",
  padding: "20px",
  marginBottom: "0px",
  fontSize: "3em",
};

const ButtonRow = {
  justifyContent: "center",
  marginTop: "30px",
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
  display: "flex",
  flexWrap: "wrap",
};

const Body = {
  color: "#fff",
};

export default Radium(Home);
