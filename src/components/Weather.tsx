import React, { createContext, useEffect, useRef, useState } from "react";
import { z } from "zod";
import WeatherDisplay from "./WeatherDisplay";
import style from "./Weather.module.css";

const WeatherData = z.object({
  location: z.object({
    country: z.string(),
    lat: z.number(),
    localtime: z.string(),
    localtime_epoch: z.number(),
    lon: z.number(),
    name: z.string(),
    region: z.string(),
    tz_id: z.string(),
  }),
  current: z.object({
    condition: z.object({
      text: z.string(),
    }),
  }),
});

type WeatherData = z.infer<typeof WeatherData>;

type WeatherContextType = {
  weather: WeatherData;
};

const LocationInput: React.FC<{
  inputRef: React.Ref<HTMLInputElement>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ inputRef, onChange }) => (
  <input ref={inputRef} type="text" name="location" onChange={onChange}></input>
);

const LocationButton: React.FC<{
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  title: string;
}> = ({ onClick, title }) => <button onClick={onClick}>{title}</button>;

const defaultErrorMessage = "An error occurred while fetching weather";

export const WeatherContext = createContext<WeatherContextType | null>(null);

const Weather = () => {
  const [weather, setWeather] = useState<WeatherData>();
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [location, setLocation] = useState("Bristol");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchWeather()
      .then((data) => data.json())
      .then((json) => setWeather(json))
      .catch((error) => setErrorMessage(error.message || defaultErrorMessage));
    focus(inputRef);
  }, [location]);

  async function fetchWeather() {
    const weatherResponse = await fetch(
      `http://localhost:8888/.netlify/functions/getWeather?location=${location}`
    );
    if (!weatherResponse.ok) {
      throw new Error(`API call failed with status ${weatherResponse.status}`);
    }
    return weatherResponse;
  }

  function focus(inputRef: React.RefObject<HTMLInputElement>) {
    inputRef.current?.focus();
  }

  return (
    <div className={style.weather}>
      {weather && (
        <WeatherContext.Provider value={weather}>
          <WeatherDisplay />
        </WeatherContext.Provider>
      )}
      <LocationInput
        inputRef={inputRef}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <LocationButton
        onClick={() => setLocation(inputValue)}
        title="check weather"
      />
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Weather;
