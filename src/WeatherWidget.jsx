function WeatherWidget({ weatherData }) {
  if (!weatherData || weatherData.corrupted) {
    throw new Error("Weather data is corrupted");
  }

  return (
    <div className="card">
      <h2>Weather Widget</h2>
      <p>City: {weatherData.city}</p>
      <p>Temperature: {weatherData.temp}°F</p>
      <p>Condition: {weatherData.condition}</p>
    </div>
  );
}

export default WeatherWidget;
