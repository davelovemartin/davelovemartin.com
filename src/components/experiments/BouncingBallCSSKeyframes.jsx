import React from "react";
import style from "./BouncingBallCSSKeyframes.module.css";

const BouncingBallOne = () => (
  <svg width="192px" height="192px" viewBox="0 0 200 200">
    <circle className={style.ball} cx="40" cy="20" r="20"></circle>
  </svg>
);

export default BouncingBallOne;
