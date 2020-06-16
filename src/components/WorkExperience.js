import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import VizSensor from "react-visibility-sensor";

const WorkExperience = ({ data }) => {
  const [imageVisible, setVisible] = useState(false);
  const [experience, setExperience] = useState(data);
  const fade = useSpring({
    transform: imageVisible
      ? "translate3d(-400px,0,0)"
      : "translate3d(-0px,0,0)",
  });

  const ExperiencePanel = experience.map((position, index) => (
    <div>{position.Role}</div>
  ));

  return (
    <VizSensor
      partialVisibility
      onChange={(isVisible) => setVisible(!imageVisible)}
    >
      <div style={{ marginTop: "-20px" }}>
        <animated.div style={fade} className="Pointer">
          Work Experience
        </animated.div>
        <div style={body}>{ExperiencePanel}</div>
      </div>
    </VizSensor>
  );
};

const body = {
  color: "#000",
  backgroundColor: "white",
  paddingTop: "60px",
  marginTop: "-20px",
};

export default WorkExperience;
