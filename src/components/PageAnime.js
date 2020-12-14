import React from "react";
import anime from "animejs/lib/anime.es.js";
import Loader from "./Loader";

export default function PageAnime() {
  const loader = document.querySelector("#loader");
  const htmlDom = document.querySelector("html");

  console.log("Loading Page Anime");

  if (document.querySelector(".welcome-statement")) {
    const welcomeTxt = document.querySelector(".welcome-statement");
    const discoverBtn = document.querySelector(".discover");
    const homeCanvas = document.querySelector(".side-visual");

    console.log("Home Animated");

    let homeAnim = anime.timeline({
      duration: 250,
    });

    homeAnim
      .add({
        targets: loader,
        complete: function () {
          loader.classList.add("off");
        },
      })
      .add({
        targets: htmlDom,
        complete: function () {
          htmlDom.classList.remove("no-scroll");
        },
      })
      .add({
        targets: homeCanvas,
        begin: function () {
          homeCanvas.classList.add("on");
        },
      })
      .add({
        targets: welcomeTxt,
        complete: function () {
          welcomeTxt.classList.add("on");
        },
      })
      .add({
        targets: discoverBtn,
        complete: function () {
          discoverBtn.style.opacity = 1;
        },
      });
  } else if (document.querySelector(".banner-txt")) {
    const bannerTxt = document.querySelector(".banner-txt");
    const bannerVisual = document.querySelector(".banner-visual");

    let workAnim = anime.timeline({
      duration: 250,
    });

    console.log("Work Animated");

    workAnim
      .add({
        targets: loader,
        complete: function () {
          loader.classList.add("off");
        },
      })

      .add({
        targets: htmlDom,
        complete: function () {
          htmlDom.classList.remove("no-scroll");
        },
      })
      .add({
        targets: bannerTxt,
        begin: function () {
          bannerTxt.classList.add("on");
        },
      })
      .add({
        targets: bannerVisual,
        begin: function () {
          bannerVisual.classList.add("on");
        },
      });
  } else {
    let defaultAnim = anime.timeline({
      duration: 250,
    });

    console.log("Default Animated");

    defaultAnim
      .add({
        targets: loader,
        complete: function () {
          loader.classList.add("off");
        },
      })
      .add({
        targets: htmlDom,
        complete: function () {
          htmlDom.classList.remove("no-scroll");
        },
      });
  }
}
