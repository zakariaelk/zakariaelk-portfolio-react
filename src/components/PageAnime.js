import React from "react";
import anime from "animejs/lib/anime.es.js";

export default function PageAnime() {
  const loader = document.querySelector("#loader");
  const htmlDom = document.querySelector("html");
  let defaultAnim = anime.timeline({
    duration: 250,
  });

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

export function homeAnim() {
  const loader = document.querySelector("#loader");
  const htmlDom = document.querySelector("html");
  const welcomeTxt = document.querySelector(".welcome-statement");
  const discoverBtn = document.querySelector(".discover");
  const homeCanvas = document.querySelector(".side-visual");

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
}

/* 2. Work Page Anime */

export function workAnim() {
  const loader = document.querySelector("#loader");
  const htmlDom = document.querySelector("html");
  const bannerTxt = document.querySelector(".banner-txt");
  const bannerVisual = document.querySelector(".banner-visual");

  let workAnim = anime.timeline({
    duration: 250,
  });

  workAnim
    .add({
      targets: loader,
      // begin: function () {
      //   loader.classList.remove("off");
      // },
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
}
