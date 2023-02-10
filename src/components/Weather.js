import 'styles/Weather.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Weather = () => {
  const [weatherData, setWeatherData] = useState({});
  const getWeatherData = async () => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );
    const data = await res.data;
    setWeatherData({
      name: data.name,
      weather: data.weather[0].main,
      icon_src: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temp: data.main.temp,
      feels_like: data.main.feels_like,
      temp_max: data.main.temp_max,
      temp_min: data.main.temp_min,
    });
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div className="weather_container">
      <h1>⛅️ 지금 서울의 날씨 ☀️</h1>
      <ul className="weather_data_wrapper">
        <li className="weather_desc">
          <img src={weatherData.icon_src} alt="weather icon" />
          <p>{weatherData.weather}</p>
        </li>
        <li className="weather_temp">
          <p>{weatherData.temp} ℃</p>
          <p>체감온도 {weatherData.feels_like} ℃</p>
        </li>
      </ul>
    </div>
  );
};

export default Weather;
