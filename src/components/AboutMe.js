import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import VizSensor from "react-visibility-sensor";

const AboutMe = () => {
  const [imageVisible, setVisible] = useState(false);
  const sectionFlag = useSpring({
    transform: imageVisible
      ? "translate3d(0px,0,0)"
      : "translate3d(-400px,0,0)",
  });

  return (
    <VizSensor
      partialVisibility
      onChange={(isVisible) => setVisible(!imageVisible)}
    >
      <div style={{ marginTop: "3rem" }}>
        <animated.div style={sectionFlag} className="Pointer">
          About Me
        </animated.div>
        <div style={body} className="componentBody">
          <div style={container}>
            <p>
              I am a computer science major from South Dakota State University.
              I have a passion for design, programming and innovation. Feel free
              to contact me if you have any questions!I am a computer science
              major from South Dakota State University. I have a passion for
              design, programming and innovation. Feel free to contact me if you
              have any questions!I am a computer science major from South Dakota
              State University. I have a passion for design, programming and
              innovation. Feel free to contact me if you have any questions!I am
              a computer science major from South Dakota State University. I
              have a passion for design, programming and innovation. Feel free
              to contact me if you have any questions!I am a computer science
              major from South Dakota State University. I have a passion for
              design, programming and innovation. Feel free to contact me if you
              have any questions!I am a computer science major from South Dakota
              State University. I have a passion for design, programming and
              innovation. Feel free to contact me if you have any questions!I am
              a computer science major from South Dakota State University. I
              have a passion for design, programming and innovation. Feel free
              to contact me if you have any questions!I am a computer science
              major from South Dakota State University. I have a passion for
              design, programming and innovation. Feel free to contact me if you
              have any questions!I am a computer science major from South Dakota
              State University. I have a passion for design, programming and
              innovation. Feel free to contact me if you have any questions!
              from South Dakota State University. I have a passion for design,
              programming and innovation. Feel free to contact me if you have
              any questions!I am a computer science major from South Dakota
              State University. I have a passion for design, programming and
              innovation. Feel free to contact me if you have any questions!I am
              a computer science major from South Dakota State University. I
              have a passion for design, programming and innovation. Feel free
              to contact me if you have any questions! from South Dakota State
              University. I have a passion for design, programming and
              innovation. Feel free to contact me if you have any questions!I am
              a computer science major from South Dakota State University. I
              have a passion for design, programming and innovation. Feel free
              to contact me if you have any questions!I am a computer science
              major from South Dakota State University. I have a passion for
              design, programming and innovation. Feel free to contact me if you
              have any questions! from South Dakota State University. I have a
              passion for design, programming and innovation. Feel free to
              contact me if you have any questions!I am a computer science major
              from South Dakota State University. I have a passion for design,
              programming and innovation. Feel free to contact me if you have
              any questions!I am a computer science major from South Dakota
              State University. I have a passion for design, programming and
              innovation. Feel free to contact me if you have any questions!
              fa-flip-vertical from South Dakota State University. I have a
              passion for design, programming and innovation. Feel free to
              contact me if you have any questions!I am a computer science major
              from South Dakota State University. I have a passion for design,
              programming and innovation. Feel free to contact me if you have
              any questions!I am a computer science major from South Dakota
              State University. I have a passion for design, programming and
              innovation. Feel free to contact me if you have any questions!
              from South Dakota State University. I have a passion for design,
              programming and innovation. Feel free to contact me if you have
              any questions!I am a computer science major from South Dakota
              State University. I have a passion for design, programming and
              innovation. Feel free to contact me if you have any questions!I am
              a computer science major from South Dakota State University. I
              have a passion for design, programming and innovation. Feel free
              to contact me if you have any questions!
            </p>
          </div>
        </div>
      </div>
    </VizSensor>
  );
};

const body = {
  color: "#000",
  backgroundColor: "lightgrey",
  display: "flex",
  justifyContent: "center",
};
const container = {
  width: "80%",
};

export default AboutMe;
