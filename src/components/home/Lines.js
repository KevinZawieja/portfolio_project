import React, { useEffect } from "react";
import "../../home.scss";
const Line = () => (
  <div className="line">
    <div className="drop"></div>
    <div className="drop"></div>
    <div className="drop"></div>
  </div>
);

const Lines = () => {
  useEffect(() => {
    var drops = document.querySelectorAll(".drop");
    drops.forEach(function (drop) {
      var randomDelay = Math.random() * 8;
      var randomDuration = Math.random() * 5 + 4; // Random duration between 2 and 7 seconds
      var randomHeight = Math.random() * 2 + 12; // Random height between 10vh and 30vh
      drop.style.animationDelay = randomDelay + "s";
      drop.style.animationDuration = randomDuration + "s";
      drop.style.height = randomHeight + "vh";
    });
  }, []);

  return (
    <div className="lines">
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
    </div>
  );
};

export default Lines;
