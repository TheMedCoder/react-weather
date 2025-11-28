async function getWeatherByCity(cityName) {
  try {
    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`;
    const geoResponse = await fetch(geoUrl);
    const geoData = await geoResponse.json();

    if (!geoData.results || geoData.results.length === 0) {
      throw new Error("City not found");
    }

    const { latitude, longitude } = geoData.results[0];
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,weathercode&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`;
    const weatherResponse = await fetch(weatherUrl);
    const weatherData = await weatherResponse.json();

    console.log("Fetched weather data:", weatherData);
    return {
      city: geoData.results[0].name,
      country: geoData.results[0].country,
      current: weatherData.current_weather,
      daily: weatherData.daily,
      hourly: weatherData.hourly,
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}

export { getWeatherByCity };