import React from "react";
import firebase from "firebase";

let projectsData;

const firebaseConfig = {
  apiKey: "AIzaSyCV96Bp-JVn11VFaTSJiaNgrgaLXFl8zR4",
  authDomain: "zakariaelk-portfolio.firebaseapp.com",
  projectId: "zakariaelk-portfolio",
  storageBucket: "zakariaelk-portfolio.appspot.com",
  messagingSenderId: "185022383867",
  appId: "1:185022383867:web:6dd3dc380b8251001e525e",
  measurementId: "G-FNG39Z67V0",
};

// GET DATA
export function gotData(projectsRef) {
  const projects = projectsRef.val();
  projectsData = projects;
  console.log(projectsData);
  localStorage.setItem("projects", JSON.stringify(projectsData));
}

//ERR DATA
export function errData(error) {
  console.log(error);
}

// FETCHING DATA

export default function fetchData() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const database = firebase.database();
  const projectsRef = database.ref("projects");
  projectsRef.limitToFirst(10).on("value", gotData, errData);
}
