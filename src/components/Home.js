import React from "react";
import Mission from "./Mission";
import ProjectsList from "./ProjectList";

function Home(props) {
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
