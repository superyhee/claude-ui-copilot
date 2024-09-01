import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const weatherData = [
  { day: 'Mon', temp: 22, icon: 'sunny' },
  { day: 'Tue', temp: 24, icon: 'partly-cloudy' },
  { day: 'Wed', temp: 20, icon: 'rainy' },
  { day: 'Thu', temp: 23, icon: 'cloudy' },
  { day: 'Fri', temp: 25, icon: 'sunny' },
  { day: 'Sat', temp: 21, icon: 'partly-cloudy' },
  { day: 'Sun', temp: 19, icon: 'rainy' },
];

const WeatherIcon = ({ icon }) => {
  const iconMap = {
    sunny: '☀️',
    'partly-cloudy': '⛅',
    cloudy: '☁️',
    rainy: '🌧️',
  };

  return <span className="text-4xl">{iconMap[icon]}</span>;
};

const WeatherApp = () => {
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    setCurrentWeather(weatherData[0]);
  }, []);

  if (!currentWeather) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 text-white p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-4">Weather App</h1>
        <div className="bg-white bg-opacity-20 rounded-3xl p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-semibold">New York</h2>
              <p className="text-xl">{currentWeather.day}</p>
            </div>
            <WeatherIcon icon={currentWeather.icon} />
          </div>
          <p className="text-6xl font-bold mt-4">{currentWeather.temp}°C</p>
        </div>
        <div className="bg-white bg-opacity-20 rounded-3xl p-6">
          <h3 className="text-xl font-semibold mb-4">7-Day Forecast</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={weatherData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
              <XAxis dataKey="day" stroke="white" />
              <YAxis stroke="white" />
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(255,255,255,0.8)', color: '#333' }}
                itemStyle={{ color: '#333' }}
              />
              <Line type="monotone" dataKey="temp" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex justify-between mt-4">
            {weatherData.map((day) => (
              <div key={day.day} className="flex flex-col items-center">
                <p className="text-sm">{day.day}</p>
                <WeatherIcon icon={day.icon} />
                <p className="text-sm">{day.temp}°</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;