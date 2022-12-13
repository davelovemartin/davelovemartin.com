import React from "react";
import style from "./RadioButton.module.css";

const RadioButton = (props) => {
  const { name, value, checked, onChange } = props;
  return (
    <label className={style.radioButton}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {value}
    </label>
  );
};

export default RadioButton;
