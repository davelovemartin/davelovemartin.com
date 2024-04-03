import React from "react";
import WeatherConditions from "./WeatherConditions.tsx";
import WeatherTemperature from "./WeatherTemperature.tsx";
import WeatherLocation from "./WeatherLocation.tsx";
import WeatherIcon from "./WeatherIcon.tsx";
import type { WeatherData } from "./Weather.tsx";

export const WeatherDisplay: React.FC<{ weather: WeatherData }> = ({
  weather,
}) => {
  return (
    <>
      <WeatherIcon weather={weather} />
      <WeatherLocation weather={weather} />
      <WeatherConditions weather={weather} />
      <WeatherTemperature weather={weather} />
    </>
  );
};
