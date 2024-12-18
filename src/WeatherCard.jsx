import React from "react";

const WeatherCard = ({ weatherData }) => {
  const { name, main, weather, wind } = weatherData;

  return (
    <div className="weather-card">
      <h2>Weather in {name}</h2>
      <p>Temperature: {main.temp}°C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} m/s</p>
      <p>Condition: {weather[0].description}</p>
    </div>
  );
};

export default WeatherCard;
