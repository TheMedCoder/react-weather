import { useWeather } from "../context/WeatherContext";

function Forecast() {
    const { dailyForecast, currentWeatherUnit } = useWeather();

    if (!dailyForecast) {
        return null; // Or you could return the dummy data here as a fallback/loading state
    }

    const { time, temperature_2m_max, temperature_2m_min } = dailyForecast;

    const getDayName = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-US", { weekday: "short" });
    };

    return (
        <div className="bg-blue-300 p-4 mt-12 rounded-xl">
            <h2 className="text-2xl font-bold mb-2">Forecast</h2>
            <div className="flex gap-4 overflow-x-auto pb-2">
                {time.map((t, index) => (
                    <div key={index} className="text-center min-w-[3.5rem] flex flex-col items-center">
                        <p className="font-semibold">{getDayName(t)}</p>
                        <div className="flex flex-col text-sm">
                            <span className="font-bold">{Math.round(temperature_2m_max[index])}°</span>
                            <span className="text-gray-700">{Math.round(temperature_2m_min[index])}°</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Forecast;