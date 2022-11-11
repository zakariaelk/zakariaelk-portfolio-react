import React, { useState, useEffect } from "react";
import PageAnime from "./PageAnime";
import RippleMe from "./RippleMe";
import DynamicWelcome from "./DynamicWelcome";

export default function Mission() {
  const sideVisualStyles = {
    // backgroundImage: `url(img/svg/water-shape-01.svg)`,
  };

  useEffect(() => {
    RippleMe();
    DynamicWelcome();
    PageAnime();
  }, []);

  return (
    <>
      <aside className="side-visual" style={sideVisualStyles}></aside>
      <div className="ripple-overlay"></div>

      <section id="home-welcome">
        <div className="welcome-content boxed">
          {/* <h1 style="display: none;">Zakaria Elk | UI Designer & Frontend Developer</h1> */}

          <div className="welcome-statement">
            <div className="dynamic-welcome">
              <span></span>
              <span>Hello visitor!</span>
            </div>
            <div className="static-welcome">
              <span>
              I'm Zak, UX Designer at <a href="https://ngosafety.org" target="_blank">NGOsafety.org</a> where I design digital products for NGO workers.
                    I love to learn, reflect and discuss user-centered design processes, usability, UI trends, frontend tech and more.
              </span>
            </div>
            <a href="#work-list" className="discover scroll">
              discover my work.
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
