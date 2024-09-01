import React, { useState, useEffect } from 'react';
import { Box, Typography, Stack, Card, CardContent, Grid, IconButton } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { WbSunny, Cloud, Opacity, AcUnit, Air } from '@mui/icons-material';

const WeatherApp = () => {
  const [currentWeather, setCurrentWeather] = useState({
    temperature: 25,
    condition: 'Sunny',
    humidity: 60,
    windSpeed: 10,
  });

  const [forecast, setForecast] = useState([
    { day: 'Mon', temp: 26, icon: 'WbSunny' },
    { day: 'Tue', temp: 28, icon: 'WbSunny' },
    { day: 'Wed', temp: 24, icon: 'Cloud' },
    { day: 'Thu', temp: 22, icon: 'Opacity' },
    { day: 'Fri', temp: 25, icon: 'WbSunny' },
    { day: 'Sat', temp: 27, icon: 'WbSunny' },
    { day: 'Sun', temp: 23, icon: 'Cloud' },
  ]);

  const [hourlyForecast, setHourlyForecast] = useState([
    { hour: '12AM', temp: 22 },
    { hour: '3AM', temp: 21 },
    { hour: '6AM', temp: 20 },
    { hour: '9AM', temp: 23 },
    { hour: '12PM', temp: 26 },
    { hour: '3PM', temp: 28 },
    { hour: '6PM', temp: 27 },
    { hour: '9PM', temp: 24 },
  ]);

  useEffect(() => {
    // Mock API call to fetch weather data
    // In a real application, you would make an API call here
  }, []);

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case 'Sunny':
        return <WbSunny />;
      case 'Cloudy':
        return <Cloud />;
      case 'Rainy':
        return <Opacity />;
      case 'Snowy':
        return <AcUnit />;
      default:
        return <WbSunny />;
    }
  };

  return (
    <Box sx={{ p: 2, backgroundColor: '#1976d2', minHeight: '100vh', color: 'white' }}>
      <Stack spacing={4}>
        <Typography variant="h4" align="center">Weather Forecast</Typography>
        
        <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
          <CardContent>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="h2">{currentWeather.temperature}°C</Typography>
              <IconButton size="large" sx={{ color: 'white' }}>
                {getWeatherIcon(currentWeather.condition)}
              </IconButton>
            </Stack>
            <Typography variant="h6">{currentWeather.condition}</Typography>
            <Typography>Humidity: {currentWeather.humidity}%</Typography>
            <Typography>Wind: {currentWeather.windSpeed} km/h</Typography>
          </CardContent>
        </Card>

        <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>7-Day Forecast</Typography>
            <Grid container spacing={2}>
              {forecast.map((day, index) => (
                <Grid item xs={12 / 7} key={index}>
                  <Stack alignItems="center" spacing={1}>
                    <Typography>{day.day}</Typography>
                    <IconButton size="small" sx={{ color: 'white' }}>
                      {getWeatherIcon(day.icon)}
                    </IconButton>
                    <Typography>{day.temp}°C</Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>

        <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', height: 300 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>Hourly Forecast</Typography>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={hourlyForecast}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="temp" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
};

export default WeatherApp;