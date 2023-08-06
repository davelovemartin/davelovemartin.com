import React from "react";
import style from "./BouncingBallOne.module.css";

const BouncingBallOne = () => (
  <svg width="200px" height="200px" viewBox="0 0 200 200">
    <circle className={style.ball} cx="40" cy="20" r="20"></circle>
  </svg>
);

export default BouncingBallOne;
