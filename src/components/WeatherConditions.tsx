import React from "react";
import type { WeatherData } from "./Weather";

const WeatherConditions: React.FC<{ weather: WeatherData }> = ({ weather }) => {
  if (!weather) return;
  return <p>{weather.current.condition.text.trim()}</p>;
};

export default WeatherConditions;
