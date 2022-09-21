import React, { useState } from "react";
import axios from "axios";

function App() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&appid={7f67218278dceab792b4806b6e3026ab}`;

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Dallas</p>
          </div>
          <div className="temp">
            <h1>60°F</h1>
          </div>
          <div className="descripton">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>65°F</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            12 MPH
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
