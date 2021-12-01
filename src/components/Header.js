import React, { useEffect } from "react";
import SmoothScroll from "./SmoothScroll";

export default function Header() {
  function updateOnScroll() {
    const body = document.querySelector("body");
    var topY = body.getBoundingClientRect().top;

    const header = document.querySelector("header");
    const navWrapper = document.querySelector(".nav-wrapper");
    const logoMask = document.querySelector(".bottom-part");
    const scrollIndic = document.querySelector(".scroll-indic");

    if (topY < 0) {
      header.classList.add("scrolled");
      logoMask.classList.add("scrolled");
      navWrapper.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
      logoMask.classList.remove("scrolled");
      navWrapper.classList.remove("scrolled");
    }

    if (scrollIndic) {
      topY < 0 ? scrollIndic.classList.add("scrolled") : scrollIndic.classList.remove("scrolled");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", updateOnScroll);
    const linksToAnchors = document.querySelectorAll('a[href^="#"]');
    linksToAnchors.forEach((each) => (each.onclick = SmoothScroll));
  });

  return (
    <>
      <header>
        <div className="top-header">
          <div className="logo-link">
            <a href="/">
              <span className="top-part">Zakaria Elk.</span>
              <span className="bottom-part">UX/Web Designer, Frontend Developer, SEO Strategist</span>
            </a>
          </div>

          <nav role="nav" className="nav-wrapper">
            <div className="nav-container">
              <div className="nav-menu">
                <a href="mailto:work@zakariaelk.com" target="_blank">
                  get in touch
                  <svg className="chevron" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      className="chevron-stroke"
                      d="M1.01026 10.322V8.27H9.12826V10.322H1.01026ZM1.01026 14.192V12.14H9.12826V14.192H1.01026ZM11.1545 7.208L19.5065 10.898V11.564L11.1545 15.254V13.13L15.6185 11.222L11.1545 9.314V7.208Z"
                      fill="black"
                    />
                    <path className="chevron-bg" d="M0.941406 14.1901V8.27502H11.3785L16.1662 11.1978L11.7615 14.1901H0.941406Z" fill="black" />

                    <path className="chevron-triangle" d="M19.7747 11.1538L11.183 5.76117V16.5464L19.7747 11.1538Z" fill="black" />
                  </svg>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
