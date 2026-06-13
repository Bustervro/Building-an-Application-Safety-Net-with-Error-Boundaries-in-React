import { useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
import WeatherWidget from "./WeatherWidget";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState({
    city: "Seattle",
    temp: 65,
    condition: "Cloudy",
  });

  return (
    <div className="app">
      <h1>Social Media Dashboard</h1>

      <div className="card">
        <h2>Posts</h2>
        <p>Your social media posts are still working.</p>
      </div>

      <ErrorBoundary>
        <WeatherWidget weatherData={weatherData} />
      </ErrorBoundary>

      <div className="buttons">
        <button onClick={() => setWeatherData({
          city: "Seattle",
          temp: 65,
          condition: "Cloudy",
        })}>
          Normal Weather
        </button>

        <button onClick={() => setWeatherData({
          city: "Phoenix",
          temp: 102,
          condition: "Sunny",
        })}>
          Hot Weather
        </button>

        <button onClick={() => setWeatherData({
          city: "Chicago",
          temp: 30,
          condition: "Snowy",
        })}>
          Cold Weather
        </button>

        <button onClick={() => setWeatherData(null)}>
          Missing Data
        </button>

        <button onClick={() => setWeatherData({ corrupted: true })}>
          Corrupted Data
        </button>

        <button onClick={() => setWeatherData(undefined)}>
          Undefined Data
        </button>
      </div>
    </div>
  );
}

export default App;
