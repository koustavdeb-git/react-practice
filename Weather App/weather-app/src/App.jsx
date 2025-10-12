import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const updatedInput = (e) => {
    setCity(e.target.value)
    console.log(e.target.value);
  }

  const apiKey = '1e10e16983e1f239ef3e60aa8f388e5b';
  const apiCall = async (params) => {

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);

      if (!response.ok) {
        alert("City not found! Please enter proper city name.")
        throw new Error("City not found")
      }
      const data = await response.json();
      console.log(data);
      setWeather(data);

    } catch (error) {
      console.log('Error: ', error);

    }

  };

  return (

    <div className="wrapper">
      <div className="input-wrapper col-8 form-group">
        <h1>Weather App</h1>
        <div className="searchBox mt-5">
          <input type='text' placeholder='Enter city' className='form-control' value={city} onChange={updatedInput}></input>

        </div>
        <div className="searchBtn mt-3">
          <button className='btn btn-primary' onClick={apiCall}>Search</button>
        </div>

        {weather && (
          <div className="weatherCard mt-5">
            <h2 className='mb-4'>City Name- {weather.name}</h2>
            <p>🌡 Temperature: {weather.main.temp} °C</p>
            <p>☁ Condition: {weather.weather[0].description}</p>
            <p>💨 Wind Speed: {weather.wind.speed} m/s</p>
          </div>
        )}

      </div>


    </div>

  )
}

export default App
