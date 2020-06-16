import React from "react";
import { Link } from "react-scroll";
import Radium from "radium";

const NavBar = () => {
  return (
    <div style={linkSection}>
      <Link
        activeClass="active"
        to="About"
        spy={true}
        smooth={true}
        style={link}
      >
        About Me
      </Link>
      <Link
        activeClass="active"
        to="Projects"
        spy={true}
        smooth={true}
        style={link}
      >
        Projects
      </Link>
      <Link
        activeClass="active"
        to="Contact"
        spy={true}
        smooth={true}
        style={link}
      >
        Contact Me
      </Link>
    </div>
  );
};

const linkSection = {
  padding: "1rem",
  display: "flex",
  justifyContent: "flex-end",
  margin: "0",
  listStyle: "none",
  color: "#fff",
};

const link = {
  margin: "3px 10px",
  cursor: "pointer",
  padding: "10px 0 10px",
};
export default Radium(NavBar);
