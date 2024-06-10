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
      var randomDelay;
      var randomDuration;
      var randomHeight = Math.random() * 2 + 12; // Random height between 10vh and 30vh

      // Check if the device width is less than or equal to 768px
      if (window.innerWidth <= 768) {
        randomDelay = Math.random() * 5 + 5; // Random delay between 10 and 20 seconds for mobile
        randomDuration = Math.random() * 100 + 20; // Random duration between 20 and 22 seconds for mobile
      } else {
        randomDelay = Math.random() * 8; // Random delay between 0 and 8 seconds for desktop
        randomDuration = Math.random() * 5 + 4; // Random duration between 4 and 9 seconds for desktop
      }

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
