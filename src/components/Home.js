import React from "react";
import Mission from "./Mission";
import ProjectsList from "./ProjectList";

function Home(props) {
  console.log(props.projects);
  console.log("home here");
  return (
    <>
      <div id="home">
        <Mission />
        <ProjectsList projects={props.projects} />
      </div>
    </>
  );
}

export default Home;
