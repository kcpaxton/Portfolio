import React from "react";
import { Link } from "react-scroll";
import Radium from "radium";

const NavBar = () => {
  return (
    <ul style={linkSection}>
      <li style={link} key="1">
        <Link activeClass="active" to="About" spy={true} smooth={true}>
          About Me
        </Link>
      </li>
      <li style={link} key="2">
        <Link activeClass="active" to="Projects" spy={true} smooth={true}>
          Projects
        </Link>
      </li>
      <li style={link} key="3">
        <Link activeClass="active" to="Contact" spy={true} smooth={true}>
          Contact Me
        </Link>
      </li>
    </ul>
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
  opacity: "0.8",
  ":hover": {
    opacity: "1",
  },
};

export default Radium(NavBar);
