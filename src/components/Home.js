import React, { Component } from "react";
import { Column, Row } from "simple-flexbox";
import "./Home.css";
export default class Home extends Component {
  render() {
    return (
      <div className="FlexContainer">
        <Column flexGrow={1}>
          <Row horizontal="center">
            <h1 className="NameTitle">Kyle Paxton</h1>
          </Row>
          <Row horizontal="center">
            <h1>Web and Front-End Developer</h1>
          </Row>
          <Row className="ButtonRow">
            <Column>
              <button className="HomeButton">Github</button>
            </Column>
            <Column>
              <button className="HomeButton">Resume</button>
            </Column>
            <Column>
              <button className="Btn HomeButton">LinkedIn</button>
            </Column>
          </Row>
        </Column>
      </div>
    );
  }
}
