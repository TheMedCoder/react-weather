import { useEffect } from "react";
import "./App.css";
import "iconify-icon";
import CloudSvg from "./components/background/CloudSvg";
import SunCloudSvg from "./components/background/SunCloudSvg";
import Forecast from "./components/Forecast";
import MainWeather from "./components/MainWeather";
import Header from "./components/Header";
import { getWeatherByCity } from "./services/weatherService";
import { useWeather } from "./context/WeatherContext";

function getRandomFloat(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}

function getRandomStyle() {
  return {
    animationDuration: `${getRandomFloat(10, 20)}s`,
    animationDelay: `${getRandomFloat(0, 4)}s`,
  };
}

function App() {
  const { setCurrentTemp, setCurrentCity, setWeatherCode, setDailyForecast } = useWeather();

  useEffect(() => {
    getWeatherByCity("London").then((data) => {
       setCurrentTemp(data.current.temperature);
       setWeatherCode(data.current.weathercode);
       setCurrentCity("London");
       setDailyForecast(data.daily);
    }).catch(err => console.error(err));
  }, []);

  return (
    
    <div className="app-background">
      <CloudSvg className="bg-element cloud-1 float-around" style={getRandomStyle()} />
      <CloudSvg className="bg-element cloud-2 float-around" style={getRandomStyle()} />
      <CloudSvg className="bg-element cloud-3 float-around" style={getRandomStyle()} />
      <CloudSvg className="bg-element cloud-4 float-around" style={getRandomStyle()} />
        <SunCloudSvg className="bg-element sun-cloud-bg" />
      <div className="flex flex-col p-4 rounded-2xl border-2 border-gray-300 bg-sky-100 weather-card-container max-w-4/5 lg:max-w-1/3">
        <Header />
        <div className="flex flex-col">
          <MainWeather />
          <Forecast />
        </div>
      </div>
    </div>
  );
}

export default App;

