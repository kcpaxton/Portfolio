import React, { useState, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import VizSensor from "react-visibility-sensor";
import Firebase from "../Config";
import Radium from "radium";

const Skills = () => {
  const getSkillList = useCallback((callback) => {
    const skillsArray = [];
    var i = 0;
    //grab the all the projects in the database.
    Firebase.database()
      .ref("/Skills")
      .once("value", function (allSkills) {
        // Gets each project in portfolio database and insets into projectArray
        Firebase.database()
          .ref("/Skills")
          .orderByChild("ProjectName")
          .on("child_added", (snapshot) => {
            i++;
            skillsArray.push(snapshot.val());
            if (allSkills.numChildren() === i) {
              callback(skillsArray);
            }
          });
      });
  }, []);

  const [skills, setSkills] = useState([]);
  const [skillsFlagVisible, setVisible] = useState(false);
  const [skillsSectionVisible, setSkillsVisible] = useState(false);
  const sectionFlag = useSpring({
    transform: skillsFlagVisible
      ? "translate3d(0px,0,0)"
      : "translate3d(-400px,0,0)",
  });
  const skillsTranslate = useSpring({
    config: { duration: 700, offset: "2rem" },
    transform: skillsSectionVisible
      ? "translate3d(0px,0,0)"
      : "translate3d(1600px,0,0)",

    opacity: skillsSectionVisible ? 1 : 0,
  });
  useEffect(() => {
    getSkillList((response) => {
      setSkills(response);
    });
  }, [getSkillList]);
  return (
    <section id="Skills">
      <div style={{ marginTop: "-20px" }}>
        <VizSensor
          partialVisibility
          onChange={(isVisible) => setVisible(isVisible)}
        >
          <animated.div style={sectionFlag} className="Pointer">
            Skills
          </animated.div>
        </VizSensor>
        <div style={body} className="componentBody">
          <VizSensor
            partialVisibility
            onChange={(isVisible) => setSkillsVisible(isVisible)}
          >
            <div style={container}>
              {skills.map((skill, i) => (
                <animated.div
                  style={{ ...skillStyle, ...skillsTranslate }}
                  key={i}
                >
                  {skill}
                </animated.div>
              ))}
            </div>
          </VizSensor>
        </div>
      </div>
    </section>
  );
};

const body = {
  color: "#fff",
  backgroundColor: "#262d3b",
  display: "flex",
  justifyContent: "center",
  fontSize: "1.5rem",
};
const container = {
  margin: "4rem",
  width: "70%",
  lineHeight: "1.5",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
};
const skillStyle = {
  width: "25rem",
  padding: "1rem 0",
  margin: "1.5rem 0.5rem",
  backgroundColor: "#284263",
  boxShadow:
    " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
};
export default Radium(Skills);
