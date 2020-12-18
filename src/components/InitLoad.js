import React from "react";

export default function InitLoad() {
  const loader = document.querySelector("#loader");
  loader.classList.remove("off");
}

export function workInitLoad() {
  const loader = document.querySelector("#loader");
  const bannerTxt = document.querySelector(".banner-txt");
  const bannerVisual = document.querySelector(".banner-visual");

  if (loader && bannerTxt && bannerVisual) {
    loader.classList.remove("off");
    bannerTxt.classList.remove("on");
    bannerVisual.classList.remove("on");
  }
}
