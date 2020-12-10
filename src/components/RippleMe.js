import React from "react";
import $ from "jquery";
import ripples from "jquery.ripples";

export default function RippleMe() {
  const rippleObj = document.querySelector(".side-visual");
  if (rippleObj) {
    let screenSize = $(window).width();

    if ($(window).width() < 768) {
      screenSize = 512;
    } else {
      screenSize = 256;
    }

    $(".side-visual").ripples({
      dropRadius: 20,
      perturbance: 0.04,
      resolution: screenSize,
      imageUrl: "img/svg/water-shape.svg",
    });

    // Automatic drops
    setInterval(function () {
      var $el = $(".side-visual");
      var x = Math.random() * $el.outerWidth();
      var y = Math.random() * $el.outerHeight();
      var dropRadius = 20;
      var strength = 0.01;

      $el.ripples("drop", x, y, dropRadius, strength);
    }, 400);
  }
}
