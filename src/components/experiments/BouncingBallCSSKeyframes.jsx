import React from "react";
import style from "./BouncingBallCSSKeyframes.module.css";

const BouncingBallOne = () => (
  <svg>
    <circle className={style.ball} cx="38" cy="10" r="10"></circle>
  </svg>
);

export default BouncingBallOne;
