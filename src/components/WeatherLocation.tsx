import React, { useContext } from "react";
import style from "./WeatherLocation.module.css";
import type { WeatherData } from "./Weather";

const WeatherLocation: React.FC<{ weather: WeatherData }> = ({ weather }) => {
  if (!weather) return;
  return (
    <div className={style.weatherLocation}>
      <div>{weather.location.name}</div>
      <div>
        {weather.location.lat} | {weather.location.lon}
      </div>
    </div>
  );
};

export default WeatherLocation;
