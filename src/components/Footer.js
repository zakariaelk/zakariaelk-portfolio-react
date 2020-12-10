import React from "react";

export default function Footer() {
  return (
    <>
      <section id="about">
        <div className="about-container">
          <p className="intro">
            <span className="highlight">I love</span> UI design & frontend development, and i try to do it best while at it.
            <br />
            When i'm not working, <span className="highlight">i like</span> to jog and play the guitar 🎸.
          </p>

          <div className="contact-info">
            <a href="mailto:work@zakariaelk.com" className="email">
              work@zakariaelk.com
            </a>
            <div className="social"></div>
          </div>
        </div>
      </section>
    </>
  );
}
