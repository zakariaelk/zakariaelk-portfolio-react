import React from "react";

export default function InViewPort(elem) {
  var elemPos = elem.getBoundingClientRect();
  return !(elemPos.top > 900);
}
