import axios from 'axios';
import { useEffect, useState } from 'react';

const Weather = () => {
  const [weatherData, setWeatherData] = useState({});
  const getWeatherData = async () => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );
    const data = await res.data;
    console.log(data);
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

  return <section></section>;
};

export default Weather;
