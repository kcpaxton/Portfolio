import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import VizSensor from "react-visibility-sensor";

const AboutMe = () => {
  const [aboutFlagVisible, setVisible] = useState(false);
  const sectionFlag = useSpring({
    transform: aboutFlagVisible
      ? "translate3d(0px,0,0)"
      : "translate3d(-100px,0,0)",
  });

  return (
    <section id="About">
      <div style={Wrapper}>
        <VizSensor
          partialVisibility
          onChange={(isVisible) => setVisible(isVisible)}
        >
          <animated.div style={sectionFlag} className="Pointer">
            ABOUT ME
          </animated.div>
        </VizSensor>
        <div style={body} className="componentBody secondaryColor">
          <div style={container}>
            <div style={{ textAlign: "left" }}>
              <h1>Hi I'm Kyle!</h1>
              <p>
                I am a software developer with a passion for <b>innovation</b>.
                I enjoy all aspects of being a front-end developer; from{" "}
                <b>designing</b> to integrating <b>server technology</b>. I look
                forward to learning, teaching and exercising my skills as a
                developer. Software is constantly evolving providing us with
                opportunity to <b>learn</b> and innovate for the future. <br />
                <br /> If you have any questions about me or my portfolio feel
                free to contact me!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const body = {
  color: "beige",
  display: "flex",
  justifyContent: "center",
  fontSize: "1.5rem",
};
const container = {
  margin: "7rem 4rem",
  width: "80%",
  lineHeight: "1.5",
};

const Wrapper = {
  maxWidth: "100%",
  marginTop: "3rem",
};
export default AboutMe;
