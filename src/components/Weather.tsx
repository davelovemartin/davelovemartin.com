import React, { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { WeatherDisplay } from "./WeatherDisplay.tsx";
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
    temp_c: z.number(),
    condition: z.object({
      text: z.string(),
    }),
  }),
});

export type WeatherData = z.infer<typeof WeatherData> | undefined;

const LocationInput: React.FC<{
  inputRef: React.Ref<HTMLInputElement>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ inputRef, onChange }) => (
  <label>
    Location:
    <input
      ref={inputRef}
      type="text"
      name="location"
      onChange={onChange}
    ></input>
  </label>
);

const LocationButton: React.FC<{
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  title: string;
}> = ({ onClick, title }) => <button onClick={onClick}>{title}</button>;

const defaultErrorMessage = "An error occurred while fetching weather";

const Weather = () => {
  const [weather, setWeather] = useState<WeatherData>();
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [location, setLocation] = useState("Bristol");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    focus(inputRef);
    fetchWeather(location);
  }, [location]);

  async function fetchWeather(location: string) {
    try {
      const weatherResponse = await fetch(
        `http://localhost:8888/.netlify/functions/getWeather?location=${location}`
      );
      const json = (await weatherResponse.json()) as WeatherData;
      setWeather(json);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message || defaultErrorMessage);
    }
  }

  function focus(inputRef: React.RefObject<HTMLInputElement>) {
    inputRef.current?.focus();
  }

  return (
    <div className={style.weather}>
      <WeatherDisplay weather={weather} />
      <div className={style.form}>
        <LocationInput
          inputRef={inputRef}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
        />
        <LocationButton
          onClick={() => setLocation(inputValue)}
          title="check weather"
        />
      </div>
      {errorMessage && <p>{errorMessage}</p>}
      <small>
        powered by:{" "}
        <a href="https://www.weatherapi.com/" title="Free Weather API">
          WeatherAPI.com
        </a>
      </small>
    </div>
  );
};

export default Weather;
