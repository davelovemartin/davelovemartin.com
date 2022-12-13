import React from "react";
import styles from "./Graphic.module.css";

const Graphic = ({ children }) => (
  <div className={styles.graphic}>{children}</div>
);

export default Graphic;
