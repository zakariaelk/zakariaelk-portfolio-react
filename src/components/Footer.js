import React from "react";

export default function Footer() {
  return (
    <>
      <section id="about">
        <div className="about-container">
          <div className="intro">
            I find greatest value in <span className="mark">impactful </span>design and code.&nbsp;
            <br />
            Outside work, I enjoy <span className="mark">running and playing the guitar.</span> <div className="guitar"></div>
          </div>

          <div className="contact-info">
            <a href="mailto:work@zakariaelk.com" className="email">
              work@zakariaelk.com
            </a>
            <div className="social">
              <a href="https://www.linkedin.com/in/zakaria-elkhachia-8334aa35" className="linkedin" target="_blank">
                <img src="/img/svg/linkedin.svg" alt="zakaria elkhachia linkedin" />
              </a>
              <a href="https://www.zakariaelk.com/media/zakaria-elkhachia_resume.pdf" className="cv" target="_blank" download="zakaria-elkhachia_resume.pdf">
                <img src="/img/svg/cv.svg" alt="zakaria elkhachia cv" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
