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
  console.log(weatherData);

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <section className="weather_section">
      <h1>지금 서울의 날씨</h1>
      <div>
        <img src={weatherData.icon_src} alt="weather icon" />
        <p>{weatherData.weather}</p>
      </div>
      <div>
        <div>
          <p>{weatherData.temp} ℃</p>
          <p>체감온도 {weatherData.feels_like} ℃</p>
        </div>
        <div>
          <>
            <p>최저 {weatherData.temp_min} ℃</p>
            <p>최고 {weatherData.temp_max} ℃</p>
          </>
        </div>
      </div>
    </section>
  );
};

export default Weather;
