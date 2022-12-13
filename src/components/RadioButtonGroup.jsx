import React from "react";
import style from "./RadioButtonGroup.module.css";

const RadioButtonGroup = ({ children }) => (
  <div className={style.radioButtonGroup}>{children}</div>
);

export default RadioButtonGroup;
