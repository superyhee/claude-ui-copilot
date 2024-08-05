import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', value: 10 },
  { name: 'Feb', value: 20 },
  { name: 'Mar', value: 30 },
  { name: 'Apr', value: 40 },
  { name: 'May', value: 50 },
  { name: 'Jun', value: 60 },
  { name: 'Jul', value: 70 },
  { name: 'Aug', value: 80 },
  { name: 'Sep', value: 90 },
  { name: 'Oct', value: 100 },
  { name: 'Nov', value: 110 },
  { name: 'Dec', value: 120 },
];

const PreviewPage = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#000000' }}>
      <Box sx={{ width: '20%', backgroundColor: '#282828', p: 2 }}>
        <Typography variant="h6" sx={{ color: '#FFFFFF' }}>
          navigator
        </Typography>
      </Box>
      <Box sx={{ width: '80%', p: 2 }}>
        <LineChart width={800} height={400} data={data}>
          <XAxis dataKey="name" stroke="#FFFFFF" />
          <YAxis stroke="#FFFFFF" />
          <CartesianGrid stroke="#282828" strokeDasharray="5 5" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
        <Typography variant="h6" sx={{ color: '#FFFFFF' }}>
          Chart
        </Typography>
      </Box>
    </Box>
  );
};

export default PreviewPage;