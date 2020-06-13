import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import WorkExperience from "./components/WorkExperience";
import { firebaseConfig } from "./Config";

import Firebase from "firebase";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.app = Firebase.initializeApp(firebaseConfig);
    this.database = this.app.database();
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

    this.database
      .ref("Portfolio")
      .orderByChild("ProjectName")
      .on("child_added", (snapshot) => {
        this.state.Projects.push({
          id: snapshot.key,
          Name: snapshot.val().Name,
          Description: snapshot.val().Description,
        });
      });
    console.log(this.state.Experience);
    console.log(this.state.Projects);
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
        <WorkExperience data={this.state.Experience} />
      </div>
    );
  }
}

export default App;
