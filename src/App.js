import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import firebase from "firebase";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import DefaultPage from "./components/DefaultPage";
import ProjectDetails from "./components/pages/ProjectDetails";
import Loader from "./components/Loader";
import "./assets/fonts/cerapro/cerapro-bold.woff";
import "./assets/fonts/cerapro/cerapro-medium.woff";
import "./assets/fonts/cerapro/cerapro-regular.woff";
import "./assets/fonts/cerapro/cerapro-light.woff";
import "./assets/css/main.css";
import "./assets/img/alwin-01.jpg";
import "./assets/img/alwin-02.jpg";
import "./assets/img/alwin-03.jpg";

function App() {
  let localStorageRef = localStorage.getItem("projects");

  const firebaseConfig = {
    apiKey: "AIzaSyCV96Bp-JVn11VFaTSJiaNgrgaLXFl8zR4",
    authDomain: "zakariaelk-portfolio.firebaseapp.com",
    projectId: "zakariaelk-portfolio",
    storageBucket: "zakariaelk-portfolio.appspot.com",
    messagingSenderId: "185022383867",
    appId: "1:185022383867:web:6dd3dc380b8251001e525e",
    measurementId: "G-FNG39Z67V0",
  };

  const [data, setData] = useState({ projects: [], isFetching: false });

  // GET DATA
  const gotData = (projectsRef) => {
    const projectsData = projectsRef.val();
    setData({ projects: projectsData, isFetching: false });
    localStorage.setItem("projects", JSON.stringify(projectsData));
  };

  //ERR DATA
  const errData = (error) => {
    console.log(error);
    setData({ projects: data.projects, isFetching: false });
  };

  // FETCHING DATA

  function fetchData() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    const database = firebase.database();
    console.log(database);

    const projectsRef = database.ref("projects");
    setData({ projects: data.projects, isFetching: true });
    projectsRef.on("value", gotData, errData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return data.projects.length === 0 ? (
    <Loader />
  ) : (
    <Router>
      <Loader />
      <ScrollToTop />

      <div className="site-wrapper">
        <Header />

        <main className="page-content">
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => {
                return <Home {...routerProps} projects={data.projects} />;
              }}
            />

            <Route
              path="/work/:id"
              exact
              render={(routerProps) => {
                return <ProjectDetails {...routerProps} projects={data.projects} />;
              }}
            />

            <Route component={DefaultPage} />
          </Switch>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
