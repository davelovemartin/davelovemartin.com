import React, { useContext } from "react";
import { WeatherContext } from "./Weather";

const WeatherDisplay: React.FC = () => {
  const weather = useContext(WeatherContext);
  if (!weather) return;
  return <p>{weather.current.condition.text ?? ""}</p>;
};

export default WeatherDisplay;
