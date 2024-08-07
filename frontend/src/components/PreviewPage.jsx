import React from 'react';
import { Box, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 278 },
  { name: 'May', value: 189 },
  { name: 'Jun', value: 239 },
  { name: 'Jul', value: 349 },
];

const PreviewPage = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#000', color: '#fff', p: 2 }}>
      <Box sx={{ width: '20%', border: '1px solid #fff', mr: 2, p: 2 }}>
        <Typography variant="h6">navigator</Typography>
      </Box>
      <Box sx={{ width: '80%', border: '1px solid #fff', p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Chart</Typography>
        <ResponsiveContainer width="100%" height="90%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#fff" />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default PreviewPage;