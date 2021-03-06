import React, { Component, useEffect, useLayoutEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import projectData from "../data/projects-data.json";
import FetchData from "./FetchData";
import RevealWork from "./RevealWork";

export default function Projects(props) {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const workVisual = document.querySelectorAll(".project-visual a");
      const workText = document.querySelectorAll(".project-text");
      const visualItem = document.querySelectorAll(".visual-figure img");

      RevealWork(workVisual);
      RevealWork(workText);
      RevealWork(visualItem);

      return () => {
        window.removeEventListener("scroll");
      };
    });
  });

  return (
    <>
      <section id="work-list" className="home-work-list">
        <div className="boxed-wide">
          {props.projects.map((project, key) => {
            return <ProjectItem key={key} id={key} project={project} />;
          })}
        </div>
      </section>
    </>
  );
}
