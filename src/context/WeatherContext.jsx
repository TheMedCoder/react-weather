import { createContext, useState, useContext } from "react";

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [currentTemp, setCurrentTemp] = useState(null);
  const [currentCity, setCurrentCity] = useState("");
  const[weatherCode, setWeatherCode]=useState(null);
  const [dailyForecast, setDailyForecast] = useState(null);
  const [currentWeatherUnit, setCurrentWeatherUnit] = useState("C"); // "C" for Celsius, "F" for Fahrenheit
  return (
    <WeatherContext.Provider value={{ currentTemp, setCurrentTemp, currentCity, setCurrentCity, weatherCode, setWeatherCode, dailyForecast, setDailyForecast, currentWeatherUnit, setCurrentWeatherUnit }}>
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  return useContext(WeatherContext);
}