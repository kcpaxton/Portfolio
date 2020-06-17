import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import VizSensor from "react-visibility-sensor";
import Firebase from "../Config";
import { MdCode, MdLaunch } from "react-icons/md";
import Radium from "radium";

const Projects = () => {
  let toolsArray = [];

  const [imageVisible, setVisible] = useState(false);
  const [projects, setProjects] = useState([]);
  const [mouseOnImage, setMouseOnImage] = useState(false);
  const [mouseOnImageBtn, setMouseOnImageBtn] = useState(false);
  const [triggerAnim, setTriggerAnim] = useState(false);

  useEffect(() => {
    getProjectList((response) => {
      setProjects(response);
    });
  }, []);

  function handleMouseImageBtnEnter(id) {
    setMouseOnImageBtn(id);
    setTriggerAnim(true);
  }
  function handleMouseImageBtnLeave() {
    setMouseOnImageBtn(false);
    setTriggerAnim(false);
  }

  function handleMouseEnter(id) {
    setMouseOnImage(id);
  }
  function handleMouseLeave() {
    setMouseOnImage(false);
  }

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
              Image: snapshot.val().Image,
              Link: snapshot.val().Link,
              Github: snapshot.val().Github,
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

  const imageOverlayDisplay = useSpring({
    from: { opacity: 1 },
    to: { opacity: 0.3, color: "#000" },
  });

  const { x } = useSpring({
    from: { x: 0 },
    x: triggerAnim ? 1 : 0,
    config: { duration: 1000 },
  });

  const ProjectPanel = projects.map((project, index) => (
    <div style={panelStyle}>
      <div style={panelBody}>
        <div style={projectImage}>
          <div
            key={project.id}
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={handleMouseLeave}
            style={imgContainer}
          >
            <animated.img
              src={project.Image}
              style={mouseOnImage === project.id ? imageOverlayDisplay : null}
              height="auto"
              width="100%"
            ></animated.img>
            {mouseOnImage === project.id ? (
              <div style={imageBtnContainer}>
                <animated.a
                  onMouseOver={() => handleMouseImageBtnEnter("1")}
                  onMouseOut={handleMouseImageBtnLeave}
                  href={project.Github}
                  target="_blank"
                  key="1"
                  style={
                    mouseOnImageBtn === "1"
                      ? {
                          ...imageBtn,
                          transform: x
                            .interpolate({
                              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                            })
                            .interpolate((x) => `scale(${x})`),
                        }
                      : imageBtn
                  }
                >
                  <MdCode fontSize="4em" fill="#fff" />
                </animated.a>
                {project.Link != null ? <div style={divider}></div> : null}
                {project.Link != null ? (
                  <animated.a
                    onMouseOver={() => handleMouseImageBtnEnter("2")}
                    onMouseOut={handleMouseImageBtnLeave}
                    href={project.Link}
                    target="_blank"
                    key="2"
                    style={
                      mouseOnImageBtn === "2"
                        ? {
                            ...imageBtn,
                            transform: x
                              .interpolate({
                                range: [
                                  0,
                                  0.25,
                                  0.35,
                                  0.45,
                                  0.55,
                                  0.65,
                                  0.75,
                                  1,
                                ],
                                output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                              })
                              .interpolate((x) => `scale(${x})`),
                          }
                        : imageBtn
                    }
                  >
                    <MdLaunch fontSize="3em" fill="#fff" />
                  </animated.a>
                ) : null}
              </div>
            ) : null}
          </div>
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
              <div>{ProjectPanel}</div>
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
  marginRight: "2rem",
  "@media (max-width: 956px)": {
    flex: "unset",
    marginRight: "0",
  },
};

const projectName = {
  fontSize: "2rem",
  marginBottom: "3rem",
};
const projectDescription = {
  display: "flex",
  flexDirection: "column",
  flex: "1.5",
  "@media (max-width: 956px)": {
    flex: "unset",
    marginTop: "2rem",
  },
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

const imgContainer = {
  position: "relative",
  height: "auto",
};
const imageBtnContainer = {
  display: "flex",
  opacity: "1",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  alignItems: "center",
};

const imageBtn = {
  margin: "0 2rem 0 2rem",
  cursor: "pointer",
  textDecoration: "none",
};

const divider = {
  borderLeft: "2px solid white",
  height: "4em",
};

export default Radium(Projects);
