import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import VizSensor from "react-visibility-sensor";
import Firebase from "../Config";

const Projects = () => {
  let toolsArray = [];

  const [imageVisible, setVisible] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjectList((response) => {
      setProjects(response);
    });
  }, []);

  const getProjectList = (callback) => {
    const projectsArray = [];
    var i = 0;
    //grab the all the projects in the database.
    Firebase.database()
      .ref("/Portfolio")
      .once("value", function (allProjects) {
        // Gets each project in portfolio database and insets into projectArray
        Firebase.database()
          .ref("/Portfolio")
          .orderByChild("ProjectName")
          .on("child_added", (snapshot) => {
            i++;
            snapshot.val().Tools.map((item, i) => {
              toolsArray.push(item);
            });
            projectsArray.push({
              id: snapshot.key,
              Name: snapshot.val().Name,
              Description: snapshot.val().Description,
              Tools: toolsArray,
            });
            toolsArray = [];
            if (allProjects.numChildren() === i) {
              callback(projectsArray);
            }
          });
      });
  };
  //the sections flag animation
  const sectionFlag = useSpring({
    transform: imageVisible
      ? "translate3d(-400px,0,0)"
      : "translate3d(-0px,0,0)",
  });
  //fade animation
  const projectDisplay = useSpring({
    opacity: imageVisible ? 0 : 1,
  });

  const ProjectPanel = projects.map((project, i) => (
    <div style={panelStyle}>
      <div key={i} style={panelBody}>
        <div style={projectImage}>
          <img
            src="https://via.placeholder.com/240x240"
            height="360"
            width="360"
          />
          <div style={toolSection}>
            {project.Tools.map((tool, j) => (
              <div style={toolStyle} key={j}>
                {tool}
              </div>
            ))}
          </div>
        </div>
        <div style={projectDescription}>
          <span style={projectName}>{project.Name}</span>
          <span>{project.Description}</span>
        </div>
      </div>
    </div>
  ));
  return (
    <section id="Projects">
      <VizSensor
        partialVisibility
        onChange={(isVisible) => setVisible(!imageVisible)}
      >
        <div style={{ marginTop: "-20px" }}>
          <animated.div style={sectionFlag} className="Pointer">
            Projects
          </animated.div>
          <div style={body}>
            <div style={container}>
              <animated.div style={projectDisplay}>
                <div>{ProjectPanel}</div>
              </animated.div>
            </div>
          </div>
        </div>
      </VizSensor>
    </section>
  );
};

//Styling
const body = {
  display: "flex",
  flex: "1",
  flexDirection: "row",
  flexWrap: "wrap",
  color: "#fff",
  backgroundColor: "#262d3b",
  paddingTop: "60px",
  marginTop: "-20px",
  justifyContent: "center",
};
const container = {
  width: "80%",
};

const panelStyle = {
  display: "flex",
  width: "100%",
  marginBottom: "2.5rem",
  boxShadow:
    " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  backgroundColor: "#284263",
};

const panelBody = {
  display: "flex",
  flex: "1",
  flexWrap: "wrap",
  flexDirection: "row",
  margin: "3rem",
  justifyContent: "space-between",
};

const projectImage = {
  display: "flex",
  flexDirection: "column",
  flex: "1",
};

const projectName = {
  fontSize: "2rem",
  marginBottom: "3rem",
};
const projectDescription = {
  display: "flex",
  flexDirection: "column",
  flex: "2",
};

const toolSection = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "start",
};

const toolStyle = {
  alignContent: "center",
  borderStyle: "solid",
  borderRadius: "5px",
  borderWidth: "0px",
  fontSize: "9px",
  width: "3rem",
  backgroundColor: "lightblue",
  marginRight: "5px",
  marginTop: "10px",
  boxShadow:
    " 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)",
  color: "#000",
};

export default Projects;
