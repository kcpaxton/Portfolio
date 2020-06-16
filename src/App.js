import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import StyledContact from "./components/Contact";
import Firebase from "./Config";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.database = Firebase.database();
    this.state = {
      Experience: [],
      Projects: [],
    };
  }

  getListData = () => {
    this.database
      .ref("/Experience")
      .orderByChild("Company")
      .on("child_added", (snapshot) => {
        this.state.Experience.push({
          id: snapshot.key,
          Company: snapshot.val().Company,
          EndDate: snapshot.val().EndDate,
          StartDate: snapshot.val().StartDate,
          Role: snapshot.val().Role,
        });
      });
  };

  getData = (passedRef) => {
    var data_list = [];
    this.database
      .ref(passedRef)
      .once("value")
      .then((snap) => {
        snap.forEach(function (childSnap) {
          var key = childSnap.key;
          var childData = childSnap.val();

          data_list.push(childData);
        });
        return data_list;
      });
  };

  componentDidMount() {
    this.getListData();
  }

  render() {
    return (
      <div className="App">
        <Home />
        <AboutMe />
        {/* <WorkExperience data={this.state.Experience} /> */}
        <Projects />
        <StyledContact />
      </div>
    );
  }
}

export default App;
