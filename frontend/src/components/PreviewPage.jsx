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
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #87CEEB, #E0F7FA)' }}>
      <Container maxWidth="md">
        <Stack alignItems="center" spacing={4} sx={{ py: 4 }}>
          <Typography variant="h3" gutterBottom fontWeight="bold" color="primary">
            Weather Forecast
          </Typography>

          <Paper elevation={3} sx={{ width: '100%', p: 2, borderRadius: 2 }}>
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
                    />
                  )}
                />
                <IconButton type="submit" color="primary" sx={{ p: '10px' }}>
                  <Search />
                </IconButton>
              </Stack>
            </form>
          </Paper>

          {weatherData && (
            <Card elevation={5} sx={{ width: '100%', borderRadius: 4, overflow: 'hidden' }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h4" gutterBottom color="primary">
                  {weatherData.city}
                </Typography>
                <Grid container spacing={3} alignItems="center">
                  <Grid item xs={12} md={6}>
                    <Stack spacing={2}>
                      <Typography variant="h5">Current Weather</Typography>
                      <Box display="flex" alignItems="center">
                        {getWeatherIcon(weatherData.current.description)}
                        <Typography variant="h6" sx={{ ml: 2 }}>
                          {weatherData.current.temp}°C
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <Opacity color="primary" />
                        <Typography sx={{ ml: 1 }}>Humidity: {weatherData.current.humidity}%</Typography>
                      </Box>
                      <Typography>{weatherData.current.description}</Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <img
                      src="https://placehold.co/300x200"
                      alt="Current weather condition illustration"
                      style={{ width: '100%', borderRadius: 8 }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          )}

          {weatherData && (
            <Card elevation={5} sx={{ width: '100%', borderRadius: 4, overflow: 'hidden' }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom color="primary">
                  5-Day Forecast
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={weatherData.forecast}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                    <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                    <Tooltip />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="temp" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line yAxisId="right" type="monotone" dataKey="humidity" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default WeatherForecast;