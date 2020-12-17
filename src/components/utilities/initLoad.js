export default function initLoad() {
  const loader = document.querySelector("#loader");
  const bannerTxt = document.querySelector(".banner-txt");
  const bannerVisual = document.querySelector(".banner-visual");

  loader.classList.remove("off");
  bannerTxt.classList.remove("on");
  bannerVisual.classList.remove("on");
}
