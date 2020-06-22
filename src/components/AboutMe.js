import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import VizSensor from "react-visibility-sensor";

const AboutMe = () => {
  const [aboutFlagVisible, setVisible] = useState(false);
  const sectionFlag = useSpring({
    transform: aboutFlagVisible
      ? "translate3d(0px,0,0)"
      : "translate3d(-400px,0,0)",
  });

  return (
    <section id="About">
      <div style={{ marginTop: "3rem" }}>
        <VizSensor
          partialVisibility
          onChange={(isVisible) => setVisible(isVisible)}
        >
          <animated.div style={sectionFlag} className="Pointer">
            About Me
          </animated.div>
        </VizSensor>
        <div style={body} className="componentBody">
          <div style={container}>
            <p>
              I am a software developer with a passion for innovation. I enjoy
              all the aspects of being a front-end developer; from designing to
              integrating server technology. I'm excited to learn, teach and
              continue to push my skills as a developer. There is always
              something new to learn in software and that excites me.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const body = {
  color: "#fff",
  backgroundColor: "#284263",
  display: "flex",
  justifyContent: "center",
  fontSize: "1.5rem",
};
const container = {
  margin: "4rem",
  width: "80%",
  lineHeight: "1.5",
};

export default AboutMe;
