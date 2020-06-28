import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import VizSensor from "react-visibility-sensor";
import Firebase from "../Config";
import Radium from "radium";

const Contact = () => {
  /* #region  Variables */
  // Mail reference collection
  var fireStore = Firebase.firestore();
  const mailRef = fireStore.collection("mail");
  const [contactFlagVisible, setVisible] = useState(false);
  /* #endregion */

  /* #region  Animation */
  const sectionFlag = useSpring({
    transform: contactFlagVisible
      ? "translate3d(0px,0,0)"
      : "translate3d(-100px,0,0)",
  });
  /* #endregion */

  /* #region  Functions */
  function handleClick(e) {
    e.preventDefault();
    var name = getInputVal("name");
    var email = getInputVal("email");
    var message = getInputVal("message");
    saveMessage(name, email, message);
    document.querySelector(".alert").style.display = "block";
    setTimeout(function () {
      document.querySelector(".alert").style.display = "none";
    }, 10000);

    document.getElementById("contactForm").reset();
  }

  function getInputVal(id) {
    return document.getElementById(id).value;
  }

  function saveMessage(name, email, message) {
    mailRef.add({
      name: name,
      to: "kyle.c.paxton@gmail.com",
      message: {
        subject: name + " is trying to contact you!",
        text: "Email: " + email + " \n\n " + message,
      },
    });
  }

  /* #endregion */

  /* #region  Return */
  return (
    <section id="Contact Me">
      <div style={Wrapper}>
        <VizSensor
          partialVisibility
          onChange={(isVisible) => setVisible(isVisible)}
        >
          <animated.div style={sectionFlag} className="Pointer">
            CONTACT ME
          </animated.div>
        </VizSensor>
        <div style={body} className={("componentBody", "primaryColor")}>
          <div style={container}>
            <p style={contactTitle}>Get in contact with me!</p>
            <div className="alert" style={alert}>
              Your message has been sent
            </div>
            <div style={contactMe}>
              <form id="contactForm">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  style={inputFields}
                  required
                ></input>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  style={inputFields}
                  required
                ></input>
                <textarea
                  rows="5"
                  name="message"
                  id="message"
                  placeholder="Your message"
                  style={inputFields}
                ></textarea>
                <p>
                  <button style={submitBtn} onClick={handleClick}>
                    Send message
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  /* #endregion */
};

/* #region  Styles */
const body = {
  display: "flex",
  flex: "1",
  flexDirection: "row",
  flexWrap: "wrap",
  color: "beige",
  paddingTop: "60px",
  marginTop: "-20px",
  justifyContent: "center",
};
const contactMe = {
  width: "50%",
  display: "flex",
  justifyContent: "center",
};
const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "0 0 5rem",
};
const contactTitle = {
  fontSize: "2rem",
  color: "beige",
};
const alert = {
  textAlign: "center",
  padding: "10px",
  color: "#79c879",
  marginBottom: "10px",
  display: "none",
};

const inputFields = {
  width: "100%",
  border: "0",
  marginBottom: "3px",
  outline: "none",
  backgroundColor: "#17273b",
  padding: "10px 15px",
  color: "#fff",
  boxShadow:
    " 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI'",
};
const submitBtn = {
  padding: "10px 15px",
  backgroundColor: "transparent",
  border: "3px solid",
  borderRadius: "10px",
  color: "beige",
  cursor: "pointer",
  opacity: "0.8",
  ":focus": {
    outline: "none",
  },
  ":hover": {
    opacity: "1",
  },
};
const Wrapper = {
  maxWidth: "100%",
  marginTop: "-30px",
};
/* #endregion */

export default Radium(Contact);
