import { useWeather } from "../context/WeatherContext";
import CuteSunSvg from "./icons/CuteSunSvg";


function MainWeather() {
    const { currentTemp, currentCity, weatherCode, currentWeatherUnit } = useWeather();
    const isSunny = weatherCode === 0 || weatherCode === 1;
    const isCloudy = weatherCode >= 2 && weatherCode <= 4;
    return (
        <div className="flex justify-center items-center grow">
            <div className="text-center mt-12">
                {isSunny ? (
                    <CuteSunSvg size={75} className="absolute self-center z-0" />
                ) : isCloudy ? (
                    <span role="img" aria-label="cloud" className="absolute bottom-58 self-center z-0" style={{ fontSize: 75 }}>☁️</span>
                ) : null}
                <h1 className="relative text-4xl font-bold text-slate-600 z-10 [-webkit-text-stroke:8px_#dff2fe] [paint-order:stroke_fill]">{currentCity}</h1>
                <p className="text-2xl text-slate-600">{currentTemp}°{currentWeatherUnit}</p>
                <p className="text-xl text-slate-600">
                    {isSunny ? "Sunny" : isCloudy ? "Cloudy" : ""}
                </p>
            </div>
        </div>
    );
}

export default MainWeather;