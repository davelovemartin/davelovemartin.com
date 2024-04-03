import React from "react";
import { Sun } from "@drawings/Sun.tsx";
import { Cloud } from "@drawings/Cloud.tsx";
import { Fog } from "@drawings/Fog.tsx";
import type { WeatherData } from "./Weather";

const weatherSymbol = {
  ["Sunny"]: <Sun />,
  ["Clear"]: <Sun />,
  ["Partly cloudy"]: <Cloud variant="SUN" />,
  ["Cloudy"]: <Cloud />,
  ["Overcast"]: <Cloud />,
  ["Mist"]: <Fog />,
  ["Patchy rain possible"]: <Cloud variant="RAIN" />,
  ["Patchy snow possible"]: <Cloud variant="SNOW" />,
  ["Patchy sleet possible"]: <Cloud variant="RAIN" />,
  ["Patchy freezing drizzle possible"]: <Cloud variant="RAIN" />,
  ["Thundery outbreaks possible"]: <Cloud variant="RAIN" />,
  ["Blowing snow"]: <Cloud variant="SNOW" />,
  ["Blizzard"]: <Cloud variant="SNOW" />,
  ["Fog"]: <Fog />,
  ["Freezing fog"]: <Fog />,
  ["Patchy light drizzle"]: <Cloud variant="RAIN" />,
  ["Light drizzle"]: <Cloud variant="RAIN" />,
  ["Freezing drizzle"]: <Cloud variant="RAIN" />,
  ["Heavy freezing drizzle"]: <Cloud variant="RAIN" />,
  ["Patchy light rain"]: <Cloud variant="RAIN" />,
  ["Light rain"]: <Cloud variant="RAIN" />,
  ["Moderate rain at times"]: <Cloud variant="RAIN" />,
  ["Moderate rain"]: <Cloud variant="RAIN" />,
  ["Heavy rain at times"]: <Cloud variant="RAIN" />,
  ["Heavy rain"]: <Cloud variant="RAIN" />,
  ["Light freezing rain"]: <Cloud variant="RAIN" />,
  ["Moderate or heavy freezing rain"]: <Cloud variant="RAIN" />,
  ["Light sleet"]: <Cloud variant="RAIN" />,
  ["Moderate or heavy sleet"]: <Cloud variant="RAIN" />,
  ["Patchy light snow"]: <Cloud variant="SNOW" />,
  ["Light snow"]: <Cloud variant="SNOW" />,
  ["Patchy moderate snow"]: <Cloud variant="SNOW" />,
  ["Moderate snow"]: <Cloud variant="SNOW" />,
  ["Patchy heavy snow"]: <Cloud variant="SNOW" />,
  ["Heavy snow"]: <Cloud variant="SNOW" />,
  ["Ice pellets"]: <Cloud variant="SNOW" />,
  ["Light rain shower"]: <Cloud variant="RAIN" />,
  ["Moderate or heavy rain shower"]: <Cloud variant="RAIN" />,
  ["Torrential rain shower"]: <Cloud variant="RAIN" />,
  ["Light sleet showers"]: <Cloud variant="RAIN" />,
  ["Moderate or heavy sleet showers"]: <Cloud variant="RAIN" />,
  ["Light snow showers"]: <Cloud variant="SNOW" />,
  ["Moderate or heavy snow showers"]: <Cloud variant="SNOW" />,
  ["Light showers of ice pellets"]: <Cloud variant="SNOW" />,
  ["Moderate or heavy showers of ice pellets"]: <Cloud variant="SNOW" />,
  ["Patchy light rain with thunder"]: <Cloud variant="RAIN" />,
  ["Moderate or heavy rain with thunder"]: <Cloud variant="RAIN" />,
  ["Patchy light snow with thunder"]: <Cloud variant="SNOW" />,
  ["Moderate or heavy snow with thunder"]: <Cloud variant="SNOW" />,
};

const WeatherIcon: React.FC<{ weather: WeatherData }> = ({ weather }) => {
  if (!weather) return <Cloud />;
  return weatherSymbol[weather.current.condition.text.trim()];
};

export default WeatherIcon;
