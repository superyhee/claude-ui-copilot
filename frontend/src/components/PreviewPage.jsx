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

  return <span className="text-5xl">{iconMap[icon]}</span>;
};

const WeatherApp = () => {
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    setCurrentWeather(weatherData[0]);
  }, []);

  if (!currentWeather) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 text-white p-8 font-sans">
      <div className="max-w-md mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center text-yellow-300 drop-shadow-lg">Weather Forecast</h1>
        <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-3xl p-8 mb-8 shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-semibold">New York</h2>
              <p className="text-2xl mt-2 text-yellow-200">{currentWeather.day}</p>
            </div>
            <WeatherIcon icon={currentWeather.icon} />
          </div>
          <p className="text-7xl font-bold mt-6 text-center">{currentWeather.temp}°C</p>
        </div>
        <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
          <h3 className="text-2xl font-semibold mb-6 text-center text-yellow-300">7-Day Forecast</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={weatherData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
              <XAxis dataKey="day" stroke="white" />
              <YAxis stroke="white" />
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(255,255,255,0.9)', color: '#333', borderRadius: '10px', padding: '10px' }}
                itemStyle={{ color: '#333' }}
              />
              <Line type="monotone" dataKey="temp" stroke="#FFD700" strokeWidth={3} dot={{ stroke: '#FFD700', strokeWidth: 2, r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex justify-between mt-8">
            {weatherData.map((day) => (
              <div key={day.day} className="flex flex-col items-center">
                <p className="text-sm font-medium">{day.day}</p>
                <WeatherIcon icon={day.icon} />
                <p className="text-sm font-bold mt-1">{day.temp}°</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;