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
            </div>
            <div className="static-welcome">
              <span>Welcome to see some of my work </span>
            </div>
            <a href="#work-list" className="discover scroll">
              discover.
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
