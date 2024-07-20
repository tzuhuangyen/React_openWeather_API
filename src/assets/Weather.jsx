// src/Weather.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Ensure `error` is declared

  const openWeatherApiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const unsplashApiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

  useEffect(() => {
    // Try to get user location when component mounts
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherByCoordinates(latitude, longitude);
        },
        (error) => {
          console.error('Error getting geolocation:', error.message);
          // Optionally, you could fetch weather data for a default city
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const fetchWeatherByCoordinates = async (lat, lon) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            lat,
            lon,
            units: 'metric',
            appid: openWeatherApiKey,
          },
        }
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error(
        'Error fetching weather data:',
        error.response ? error.response.data : error.message
      );
      setError('Error fetching weather data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (weatherData) {
      fetchBackgroundImage(weatherData.name);
    }
  }, [weatherData]);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            q: city,
            units: 'metric',
            appid: openWeatherApiKey, // 使用正确的 API 密钥
          },
        }
      );
      setWeatherData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(
        'Error fetching weather data:',
        error.response ? error.response.data : error.message
      );
      setError('Error fetching weather data');
    } finally {
      setLoading(false);
    }
  };

  const fetchBackgroundImage = async (city) => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos`,
        {
          params: {
            query: city,
            client_id: unsplashApiKey,
          },
        }
      );
      if (response.data.results && response.data.results.length > 0) {
        const imageUrl = response.data.results[0].urls.full;
        document.body.style.backgroundImage = `url(${imageUrl})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
      } else {
        document.body.style.backgroundImage =
          'url("https://source.unsplash.com/1600x900/?nature,landscape")';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
      }
    } catch (error) {
      console.error(
        'Error fetching background image:',
        error.response ? error.response.data : error.message
      );
      setBackgroundImage(
        'https://source.unsplash.com/1600x900/?nature,landscape'
      );
    }
  };

  const handleSearch = () => {
    fetchWeather(city);
  };

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <div className='card'>
        <div>
          <input
            type='text'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyUp={handleKeyUp}
            placeholder='Enter city'
          />
          <button onClick={handleSearch}>Search</button>
          {weatherData && (
            <div className='weather'>
              <div className='city'>Weather in {weatherData.name}</div>
              <div className='country'>{weatherData.sys.country}</div>
              <img
                className='icon'
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt={weatherData.weather[0].description}
              />
              <div className='description'>
                {weatherData.weather[0].description}
              </div>
              <div className='temp'>{weatherData.main.temp.toFixed(1)}°C</div>
              <div className='temp-max'>
                Max Temp: {weatherData.main.temp_max.toFixed(1)}°C
              </div>
              <div className='temp-min'>
                Min Temp: {weatherData.main.temp_min.toFixed(1)}°C
              </div>
              <div className='humidity'>
                Humidity: {weatherData.main.humidity}%
              </div>
              <div className='time'>
                Local time:{' '}
                {new Date(
                  (weatherData.dt + weatherData.timezone) * 1000
                ).toLocaleTimeString()}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Weather;
