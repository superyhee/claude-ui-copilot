import React, { useState, useEffect } from 'react';
import { Box, Typography, Stack, TextField, Button, Card, CardContent, Grid, Container, Paper, IconButton } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useForm, Controller } from 'react-hook-form';
import { WbSunny, Cloud, AcUnit, Opacity, Search } from '@mui/icons-material';

const WeatherForecast = () => {
  const [weatherData, setWeatherData] = useState(null);
  const { control, handleSubmit } = useForm();

  const mockWeatherData = {
    city: 'New York',
    current: { temp: 22, humidity: 60, description: 'Partly cloudy' },
    forecast: [
      { day: 'Mon', temp: 20, humidity: 65 },
      { day: 'Tue', temp: 22, humidity: 62 },
      { day: 'Wed', temp: 25, humidity: 58 },
      { day: 'Thu', temp: 23, humidity: 61 },
      { day: 'Fri', temp: 21, humidity: 63 },
    ],
  };

  useEffect(() => {
    setWeatherData(mockWeatherData);
  }, []);

  const onSubmit = (data) => {
    setTimeout(() => {
      setWeatherData({
        ...mockWeatherData,
        city: data.city,
      });
    }, 1000);
  };

  const getWeatherIcon = (description) => {
    if (description.toLowerCase().includes('sunny')) return <WbSunny fontSize="large" />;
    if (description.toLowerCase().includes('cloudy')) return <Cloud fontSize="large" />;
    return <AcUnit fontSize="large" />;
  };

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #1E90FF, #87CEFA)', color: 'white' }}>
      <Container maxWidth="sm">
        <Stack alignItems="center" spacing={4} sx={{ py: 4 }}>
          <Typography variant="h3" gutterBottom fontWeight="bold">
            Weather
          </Typography>

          <Paper elevation={3} sx={{ width: '100%', p: 2, borderRadius: 20, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack direction="row" spacing={2}>
                <Controller
                  name="city"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'City is required' }}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      label="Enter City"
                      variant="outlined"
                      fullWidth
                      error={!!error}
                      helperText={error?.message}
                      InputProps={{
                        style: { color: 'white' },
                      }}
                      InputLabelProps={{
                        style: { color: 'white' },
                      }}
                    />
                  )}
                />
                <IconButton type="submit" sx={{ p: '10px', color: 'white' }}>
                  <Search />
                </IconButton>
              </Stack>
            </form>
          </Paper>

          {weatherData && (
            <Card sx={{ width: '100%', borderRadius: 4, overflow: 'hidden', backgroundColor: 'rgba(255, 255, 255, 0.2)', boxShadow: 'none' }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h4" gutterBottom>
                  {weatherData.city}
                </Typography>
                <Grid container spacing={3} alignItems="center">
                  <Grid item xs={12}>
                    <Stack spacing={2} alignItems="center">
                      <Box display="flex" alignItems="center" justifyContent="center">
                        {getWeatherIcon(weatherData.current.description)}
                        <Typography variant="h1" sx={{ ml: 2 }}>
                          {weatherData.current.temp}°
                        </Typography>
                      </Box>
                      <Typography variant="h5">{weatherData.current.description}</Typography>
                      <Box display="flex" alignItems="center">
                        <Opacity />
                        <Typography sx={{ ml: 1 }}>Humidity: {weatherData.current.humidity}%</Typography>
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          )}

          {weatherData && (
            <Card sx={{ width: '100%', borderRadius: 4, overflow: 'hidden', backgroundColor: 'rgba(255, 255, 255, 0.2)', boxShadow: 'none' }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                  5-Day Forecast
                </Typography>
                <Grid container spacing={2}>
                  {weatherData.forecast.map((day, index) => (
                    <Grid item xs={2.4} key={index}>
                      <Stack alignItems="center" spacing={1}>
                        <Typography>{day.day}</Typography>
                        {getWeatherIcon(day.temp > 22 ? 'sunny' : 'cloudy')}
                        <Typography>{day.temp}°</Typography>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default WeatherForecast;