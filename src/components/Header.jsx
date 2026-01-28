import { useRef } from "react";
import { getWeatherByCity } from "../services/weatherService";
import { useWeather } from "../context/WeatherContext";

function Header() {
  const inputRef = useRef(null);
  const { setCurrentTemp, setCurrentCity, setWeatherCode, setDailyForecast } = useWeather();

  const handleSubmit = () => {
    const city = inputRef.current?.value || "";
    if (city.trim() !== "") {
      getWeatherByCity(city)
        .then((data) => {
          // You can update state or context here with the fetched data
          setCurrentTemp(data.current.temperature);
          setWeatherCode(data.current.weathercode);
          setCurrentCity(city);
          setDailyForecast(data.daily);
        })
        .catch((error) => {
          console.error("Error fetching weather for", city, ":", error);
        });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="flex justify-around relative">
      <iconify-icon
        icon="mdi:magnify"
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pl-1"
        width="20"
        height="20"
      />
      <input
        type="text"
        ref={inputRef}
        id="city-input"
        onKeyDown={handleKeyDown}
        className="border border-gray-300 m-2 p-2 pl-7 text-black placeholder-gray-500 placeholder-opacity-75 rounded min-w-24 grow"
        placeholder=""
      />
      <button
        type="button"
        onClick={handleSubmit}
        className="m-2 rounded bg-blue-300 p-2 border border-gray-100 hover:scale-105 flex items-center cursor-pointer active:scale-95"
      >
        Search
      </button>
    </div>
  );
}

export default Header;
