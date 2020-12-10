import React from "react";
import InViewPort from "./InViewPort";

export default function RevealWork(itemReveal) {
  [].forEach.call(itemReveal, function (item) {
    if (InViewPort(item)) {
      // console.log("Visible");
      item.classList.add("on");
    } else {
      //   console.log("Not Visible");
      // item.classList.remove("on");
    }
  });
}
