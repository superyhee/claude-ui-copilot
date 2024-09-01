import React, { useState, useEffect } from 'react';
import { Box, Typography, Stack, Card, CardContent, Grid, IconButton, Container, Paper, Divider } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { WbSunny, Cloud, Opacity, AcUnit, Air, LocationOn } from '@mui/icons-material';

const WeatherApp = () => {
  const [currentWeather, setCurrentWeather] = useState({
    temperature: 25,
    condition: 'Sunny',
    humidity: 60,
    windSpeed: 10,
    location: 'New York City',
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
    <Box sx={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(to bottom, #1e88e5, #64b5f6)',
      color: 'white',
      pt: 4,
      pb: 8
    }}>
      <Container maxWidth="md">
        <Stack spacing={4}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 4, backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="h4">Weather Forecast</Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <LocationOn />
                <Typography variant="h6">{currentWeather.location}</Typography>
              </Stack>
            </Stack>
          </Paper>
          
          <Paper elevation={3} sx={{ p: 3, borderRadius: 4, backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={6}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Typography variant="h1">{currentWeather.temperature}°C</Typography>
                  <IconButton size="large" sx={{ color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.2)', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.3)' } }}>
                    {getWeatherIcon(currentWeather.condition)}
                  </IconButton>
                </Stack>
                <Typography variant="h5" sx={{ mt: 2 }}>{currentWeather.condition}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={2}>
                  <Typography variant="body1">Humidity: {currentWeather.humidity}%</Typography>
                  <Typography variant="body1">Wind: {currentWeather.windSpeed} km/h</Typography>
                </Stack>
              </Grid>
            </Grid>
          </Paper>

          <Paper elevation={3} sx={{ p: 3, borderRadius: 4, backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
            <Typography variant="h6" gutterBottom>7-Day Forecast</Typography>
            <Divider sx={{ mb: 2, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
            <Grid container spacing={2}>
              {forecast.map((day, index) => (
                <Grid item xs={6} sm={3} md={12 / 7} key={index}>
                  <Paper elevation={2} sx={{ p: 2, textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                    <Typography>{day.day}</Typography>
                    <IconButton size="small" sx={{ color: 'white', my: 1 }}>
                      {getWeatherIcon(day.icon)}
                    </IconButton>
                    <Typography>{day.temp}°C</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>

          <Paper elevation={3} sx={{ p: 3, borderRadius: 4, backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', height: 400 }}>
            <Typography variant="h6" gutterBottom>Hourly Forecast</Typography>
            <Divider sx={{ mb: 2, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
            <ResponsiveContainer width="100%" height="85%">
              <LineChart data={hourlyForecast}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.2)" />
                <XAxis dataKey="hour" stroke="white" />
                <YAxis stroke="white" />
                <Tooltip contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', border: 'none' }} />
                <Line type="monotone" dataKey="temp" stroke="#ffffff" strokeWidth={2} dot={{ fill: '#ffffff' }} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
};

export default WeatherApp;