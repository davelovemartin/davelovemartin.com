import React from "react";
import type { WeatherData } from "./Weather.tsx";
import style from "./WeatherTemperature.module.css";

const WeatherTemperature: React.FC<{ weather: WeatherData }> = ({
  weather,
}) => {
  if (!weather) return;
  return (
    <div className={style.weatherTemperature}>
      {weather.current.temp_c}
      <span>°C</span>
    </div>
  );
};

export default WeatherTemperature;
