import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import VizSensor from "react-visibility-sensor";
import Firebase from "../Config";
import Radium from "radium";

const Contact = () => {
  // Mail reference collection
  var fireStore = Firebase.firestore();
  const mailRef = fireStore.collection("mail");

  const [imageVisible, setVisible] = useState(true);
  const sectionFlag = useSpring({
    transform: imageVisible
      ? "translate3d(0px,0,0)"
      : "translate3d(-400px,0,0)",
  });

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

  return (
    <section id="Contact">
      <VizSensor
        partialVisibility
        onChange={(isVisible) => setVisible(!imageVisible)}
      >
        <div style={{ marginTop: "3rem" }}>
          <animated.div style={sectionFlag} className="Pointer">
            Contact Me
          </animated.div>
          <div style={body} className="componentBody">
            <div style={container}>
              <div>
                <h3>Get in contact with me!</h3>
              </div>
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
      </VizSensor>
    </section>
  );
};

const body = {
  display: "flex",
  flex: "1",
  flexDirection: "row",
  flexWrap: "wrap",
  color: "#fff",
  backgroundColor: "#284263",
  paddingTop: "60px",
  marginTop: "-20px",
  justifyContent: "center",
};
const contactMe = {
  width: "50%",
};
const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "60%",
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
};
const submitBtn = {
  padding: "10px 15px",
  backgroundColor: "transparent",
  border: "3px solid",
  borderRadius: "10px",
  color: "#fff",
  cursor: "pointer",
  opacity: "0.8",
  ":focus": {
    outline: "none",
  },
  ":hover": {
    opacity: "1",
  },
};

export default Radium(Contact);
