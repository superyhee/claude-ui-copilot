import React, { useState, useEffect } from 'react';
import { Box, Typography, Stack, TextField, Button, Card, CardContent, Grid } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useForm, Controller } from 'react-hook-form';

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
    // Simulate API call
    setTimeout(() => {
      setWeatherData({
        ...mockWeatherData,
        city: data.city,
      });
    }, 1000);
  };

  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Stack alignItems="center" spacing={4}>
        <Typography variant="h4" gutterBottom>
          Weather Forecast
        </Typography>

        <Card sx={{ width: '100%', maxWidth: 600 }}>
          <CardContent>
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
                <Button type="submit" variant="contained" color="primary">
                  Search
                </Button>
              </Stack>
            </form>
          </CardContent>
        </Card>

        {weatherData && (
          <Card sx={{ width: '100%', maxWidth: 600 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {weatherData.city}
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6">Current Weather</Typography>
                  <Typography>Temperature: {weatherData.current.temp}°C</Typography>
                  <Typography>Humidity: {weatherData.current.humidity}%</Typography>
                  <Typography>Description: {weatherData.current.description}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <img
                    src="https://placehold.co/200x200"
                    alt="Current weather condition illustration"
                    style={{ width: '100%', maxWidth: 200 }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        )}

        {weatherData && (
          <Card sx={{ width: '100%', maxWidth: 600 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                5-Day Forecast
              </Typography>
              <LineChart width={500} height={300} data={weatherData.forecast}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="temp" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line yAxisId="right" type="monotone" dataKey="humidity" stroke="#82ca9d" />
              </LineChart>
            </CardContent>
          </Card>
        )}
      </Stack>
    </Box>
  );
};

export default WeatherForecast;