import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import Radium from "radium";
import { MdMenu, MdClose } from "react-icons/md";
import { useTrail, useSpring, animated } from "react-spring";
import logo from "../PortfolioFaviconV3.png";

const NavBar = (props) => {
  /* #region  Variables */
  const [hamburgerNavActive, setHamburgerNav] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null);
  const links = ["About Me", "Skills", "Projects", "Contact Me"];
  /* #endregion */

  /* #region  Lifecycle */
  useEffect(() => {
    setNavHeight(navRef.current.clientHeight);
  }, []);

  /* #endregion */

  /* #region  Animation */
  const config = { mass: 5, tension: 2000, friction: 200 };

  const trail = useTrail(links.length, {
    config,
    opacity: hamburgerNavActive ? 1 : 0,
    x: hamburgerNavActive ? 0 : 20,
    trail: 400 / links.length,
    height: hamburgerNavActive ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  //hamburger icon flip
  const { transform, opacity } = useSpring({
    opacity: hamburgerNavActive ? 1 : 0,
    transform: `perspective(600px) rotateX(${hamburgerNavActive ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const displayHamburgerIcon = useSpring({
    display: hamburgerNavActive ? "none" : "block",
  });
  const displayCloseIcon = useSpring({
    display: hamburgerNavActive ? "block" : "none",
  });
  /* #endregion */

  /* #region  Event Handlers */
  const handleHamburgerClick = (e) => {
    setHamburgerNav(!hamburgerNavActive);
    props.action();
  };

  const handleLinkClick = () => {
    setHamburgerNav(false);
    props.action();
  };
  /* #endregion */

  /* #region  Return */
  return (
    <div style={navbarStyle} ref={navRef}>
      <div>
        <img src={logo} alt={"KP"} style={logoStyle} />
      </div>
      <div>
        <div style={hamburger}>
          {/* Hamburger Icon */}
          <div
            onClick={() => {
              handleHamburgerClick();
            }}
            style={hamburgerBtn}
          >
            {/* Hamburger Icon */}
            <animated.div
              style={{
                ...HamburgerIcon,
                ...displayHamburgerIcon,
                opacity: opacity.interpolate((o) => 1 - o),
                transform,
              }}
            >
              <MdMenu fontSize="3em" fill="beige" />
            </animated.div>

            {/* Close Icon */}
            <animated.div
              style={{
                ...HamburgerIcon,
                ...displayCloseIcon,
                opacity,
                transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
              }}
            >
              <MdClose fontSize="3em" fill="beige" />
            </animated.div>
          </div>

          <div style={hamburgerNavDiv}>
            <ul style={{ ...hamburgerListNav, marginTop: navHeight }}>
              {trail.map(({ x, height, ...rest }, index) => (
                <animated.div
                  key={links[index]}
                  style={{
                    ...rest,
                    transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
                  }}
                >
                  <animated.li style={hamLink}>
                    <Link
                      style={{ width: "100%", textAlign: "center" }}
                      activeClass="active"
                      to={links[index]}
                      spy={true}
                      smooth={true}
                      onClick={() => {
                        handleLinkClick();
                      }}
                    >
                      {links[index].toUpperCase()}
                    </Link>
                  </animated.li>
                </animated.div>
              ))}
            </ul>
          </div>
        </div>
        <div style={listNav}>
          <ul style={linkSection}>
            {links.map((link, index) => (
              <li style={navLink} key={index}>
                <Link activeClass="active" to={link} spy={true} smooth={true}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
  /* #endregion */
};

/* #region  Styles */
const navbarStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  overflowX: "hidden",
  overflowY: "hidden",
};

const logoStyle = {
  height: "60px",
  width: "60px",
  margin: "1rem 2rem",
};

const linkSection = {
  padding: "1rem",
  display: "flex",
  justifyContent: "flex-end",
  margin: "0",
  listStyle: "none",
  color: "beige",
};

const navLink = {
  margin: "3px 10px",
  cursor: "pointer",
  padding: "10px 0 10px",
  opacity: "0.8",
  ":hover": {
    opacity: "1",
  },
};

const hamLink = {
  cursor: "pointer",
  padding: "10px 0 10px",
  backgroundColor: "darkgoldenrod",

  justifyContent: "center",
  display: "flex",
  borderRadius: "15px",
  margin: "1rem 0",
  fontWeight: "500",
};

const hamburgerBtn = {
  backgroundColor: "transparent",
  border: "none",
  zIndex: "101",
  position: "relative",
  marginRight: "2rem",
};
const hamburgerNavDiv = {
  position: "absolute",
  right: "0",
  top: "0",
  zIndex: "100",
  overflowX: "hidden",
  width: "60%",
  marginTop: "1rem",
};

const hamburgerListNav = {
  listStyle: "none",
  color: "beige",
  height: "100vh",
  padding: "0",
  marginRight: "1rem",
  textAlign: "left",
};

const hamburger = {
  display: "none",
  "@media (max-width: 576px)": {
    display: "block",
  },
};

const listNav = {
  display: "block",
  "@media (max-width: 576px)": {
    display: "none",
  },
};

const HamburgerIcon = {
  display: "block",
};
/* #endregion */

export default Radium(NavBar);
