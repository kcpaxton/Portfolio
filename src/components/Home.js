import React, { Component } from "react";
import { Column, Row } from "simple-flexbox";
export default class Home extends Component {
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
              <button style={HomeButton}>Github</button>
            </Column>
            <Column>
              <button style={HomeButton}>Resume</button>
            </Column>
            <Column>
              <button style={HomeButton}>LinkedIn</button>
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
};

const Wrapper = {
  maxWidth: "100%",
  display: "flex",
  flexWrap: "wrap",
};

const Body = {
  color: "#fff",
};
