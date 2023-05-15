import React from "react";
import "./SVG.css"
const SVG = () => {
  return (
    <div>
      <div>
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 300"
          xmlns="http://www.w3.org/2000/svg"
          class="transition duration-300 ease-in-out delay-150"
        >
           
          <defs>
            <linearGradient id="gradient" x1="38%" y1="1%" x2="62%" y2="99%">
              <stop offset="5%" stop-color="#ab4059"></stop>
              <stop offset="95%" stop-color="#38235D"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,500 C 0,500 0,250 0,250 C 137.21428571428572,221.39285714285714 274.42857142857144,192.78571428571428 399,221 C 523.5714285714286,249.21428571428572 635.5000000000001,334.25 735,323 C 834.4999999999999,311.75 921.5714285714284,204.21428571428572 1037,176 C 1152.4285714285716,147.78571428571428 1296.2142857142858,198.89285714285714 1440,250 C 1440,250 1440,500 1440,500 Z"
            stroke="none"
            stroke-width="0"
            fill="url(#gradient)"
            fill-opacity="1"
            class="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default SVG;
