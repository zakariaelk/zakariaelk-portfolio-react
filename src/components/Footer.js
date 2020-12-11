import React from "react";

export default function Footer() {
  return (
    <>
      <section id="about">
        <div className="about-container">
          <div class="intro">
            I love to <span class="mark"> express new ideas </span> through design and code.
            <br />
            When I am not working, I enjoy <span class="mark">running and playing the guitar</span> <div class="guitar">🎸</div>
          </div>

          <div className="contact-info">
            <a href="mailto:work@zakariaelk.com" className="email">
              work@zakariaelk.com
            </a>
            <div class="social">
              <a href="https://www.linkedin.com/in/zakaria-elkhachia-8334aa35" class="linkedin" target="_blank">
                <img src="/img/svg/linkedin.svg" alt="zakaria elkhachia linkedin" />
              </a>
              <a href="media/zakaria-elkhachia_resume.pdf" class="cv" target="_blank" download>
                <img src="/img/svg/cv.svg" alt="zakaria elkhachia cv" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
