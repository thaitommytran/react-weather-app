import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7f67218278dceab792b4806b6e3026ab`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios
        .get(url)
        .then((res) => {
          console.log(res.data);
          setData(res.data);
          setLocation("");
        })
        .catch((err) => console.log(err));
    }
  };

  const toFahenheit = (kelvinTemp) => {
    return `${Math.round((kelvinTemp - 273.15) * (9 / 5) + 32)}°F`;
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            <h1>{data.main && toFahenheit(data.main.temp)}</h1>
          </div>
          <div className="description">
            <p>{data.weather && data.weather[0].main}</p>
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              <p className="bold">
                {data.main && toFahenheit(data.main.feels_like)}
              </p>
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              <p className="bold">
                {data.main && `${data.main.humidity}%`}
              </p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p className="bold">
                {data.wind && `${Math.round(data.wind.speed)} MPH`}
              </p>
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
