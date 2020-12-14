import React, { useState, useEffect } from "react";
import PageAnime from "./PageAnime";
import RippleMe from "./RippleMe";

export default function Mission() {
  const dynamicWelcome = () => {
    const dynamicWelcome = document.querySelector(".dynamic-welcome span");
    const today = new Date();
    const time = today.getHours();

    if (dynamicWelcome) {
      if (time > 6 && time < 12) {
        dynamicWelcome.innerHTML = "How's your day starting?";
      } else if (time >= 12 && time < 17) {
        dynamicWelcome.innerHTML = "Having a nice afternoon?";
      } else {
        dynamicWelcome.innerHTML = "Having a good evening?";
      }
    }
  };

  const sideVisualStyles = {
    // backgroundImage: `url(img/svg/water-shape.svg)`,
  };

  useEffect(() => {
    dynamicWelcome();
    RippleMe();
    PageAnime();
  }, []);

  return (
    <>
      <aside className="side-visual" style={sideVisualStyles}></aside>

      <section id="home-welcome">
        <div className="welcome-content boxed">
          {/* <h1 style="display: none;">Zakaria Elk | UI Designer & Frontend Developer</h1> */}

          <div className="welcome-statement">
            <div className="dynamic-welcome">
              <span></span>
            </div>
            <div className="static-welcome">
              <span>Welcome to visit my work down below</span>
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
