import React from "react";
import Mission from "../Mission";
import ProjectsList from "../ProjectList";

function Home() {
  return (
    <>
      <div id="home">
        <Mission />
        <ProjectsList />
      </div>
    </>
  );
}

export default Home;
