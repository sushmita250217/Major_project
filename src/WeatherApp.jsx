import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Navbar from './component/Navbar';
import LanguageButton from './component/LanguageButton';
import Search from './component/Search';
import Card from './component/Card';

const WeatherApp = () => {
  const { t } = useTranslation();
  const [weatherData, setWeatherData] = useState(null);

  // Only use weathercode to decide image
  const getWeatherIcon = (weathercode) => {
    switch (weathercode) {
      case 0: // Clear sky
        return '/weather-update-app/assets/images/Clear.png';

      case 1: // Mainly clear
      case 2: // Partly cloudy
      case 3: // Overcast
      case 45: // Fog
      case 48: // Depositing rime fog
        return '/weather-update-app/assets/images/Clear.png';

      case 51: // Light drizzle
      case 53: // Moderate drizzle
      case 55: // Dense drizzle
      case 61: // Slight rain
      case 63: // Moderate rain
      case 65: // Heavy rain
      case 80: // Rain showers
      case 81:
      case 82:
        return '/weather-update-app/assets/images/Rain.png';

      case 71: // Light snow
      case 73: // Moderate snow
      case 75: // Heavy snow
      case 77: // Snow grains
      case 85: // Light snow showers
      case 86: // Heavy snow showers
        return '/weather-update-app/assets/images/Winter.png';

      case 95: // Thunderstorm
      case 96:
      case 99:
        return '/weather-update-app/assets/images/Thunderstrom.png';

      default:
        return '/weather-update-app/assets/images/Clear.png'; // fallback icon
    }
  };

  // Use weathercode only for quote keys; no windy quote
  const getWeatherQuoteKey = (weathercode) => {
    switch (weathercode) {
      case 0:
        return 'sunny_quote';
      case 1:
      case 2:
      case 3:
      case 45:
      case 48:
        return 'sunny_quote'; // or 'cloudy_quote' if you want
      case 51:
      case 53:
      case 55:
      case 61:
      case 63:
      case 65:
      case 80:
      case 81:
      case 82:
        return 'rainy_quote';
      case 71:
      case 73:
      case 75:
      case 77:
      case 85:
      case 86:
        return 'winter_quote';
      case 95:
      case 96:
      case 99:
        return 'thunder_quote';
      default:
        return 'sunny_quote';
    }
  };

  const fetchWeather = async (city) => {
    try {
      if (!city || city.trim() === '') {
        alert('Please enter a city name');
        return;
      }

      // Get latitude and longitude
      const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`);
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error('City not found');
      }

      const { latitude, longitude, name } = geoData.results[0];

      // Get weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();

      const iconPath = getWeatherIcon(weatherData.current_weather.weathercode);
      const quoteKey = getWeatherQuoteKey(weatherData.current_weather.weathercode);

      const mappedData = {
        location: { name },
        current: {
          temp_c: weatherData.current_weather.temperature,
          condition: {
            text: `Code ${weatherData.current_weather.weathercode}`,
            icon: iconPath,
          },
          quoteKey,
        },
      };

      setWeatherData(mappedData);
    } catch (error) {
      alert(error.message || 'Something went wrong');
      setWeatherData(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-sky-200 to-sky-300 font-roboto text-slate-700">
      <Navbar heading="title" />

      <div className="flex flex-col items-center justify-center py-10 px-4 max-w-md mx-auto">
        <h2 className="mb-6 text-center font-bold text-slate-700">{t('description')}</h2>

        <LanguageButton />

        <Search onSearch={fetchWeather} />

        {weatherData && (
          <Card
            city={weatherData.location.name}
            temperature={`${weatherData.current.temp_c}°C`}
            imageSrc1={weatherData.current.condition.icon}
            quoteKey={weatherData.current.quoteKey}
          />
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
