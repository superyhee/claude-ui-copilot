import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';

const data1 = [
  { name: 'Apr', value: 200 },
  { name: 'May', value: 400 },
  { name: 'Jun', value: 300 },
  { name: 'Jul', value: 100 },
];

const data2 = [
  { name: 'Jan', value: 100 },
  { name: 'Feb', value: 200 },
  { name: 'Mar', value: 400 },
  { name: 'Apr', value: 600 },
  { name: 'May', value: 800 },
  { name: 'Jun', value: 900 },
];

const PreviewPage = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Stack direction="row" spacing={4}>
        <Box sx={{ backgroundColor: '#fff', p: 2, borderRadius: 2 }}>
          <Stack spacing={1}>
            <Box sx={{ backgroundColor: '#333', p: 1, borderRadius: 1 }} />
            <Box sx={{ backgroundColor: '#333', p: 1, borderRadius: 1 }} />
            <Box sx={{ backgroundColor: '#333', p: 1, borderRadius: 1 }} />
            <Box sx={{ backgroundColor: '#333', p: 1, borderRadius: 1 }} />
          </Stack>
        </Box>
        <Box sx={{ backgroundColor: '#fff', p: 2, borderRadius: 2 }}>
          <Stack direction="row" spacing={2}>
            <Box sx={{ backgroundColor: '#333', p: 2, borderRadius: 2 }}>
              <Typography variant="h6" color="#fff">234</Typography>
            </Box>
            <Box sx={{ backgroundColor: '#333', p: 2, borderRadius: 2 }}>
              <Typography variant="h6" color="#fff">434</Typography>
            </Box>
            <Box sx={{ backgroundColor: '#333', p: 2, borderRadius: 2 }}>
              <Typography variant="h6" color="#fff">434</Typography>
            </Box>
          </Stack>
          <Stack direction="row" spacing={2} mt={2}>
            <Box sx={{ backgroundColor: '#333', p: 2, borderRadius: 2 }}>
              <BarChart width={200} height={100} data={data1}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
              <Typography variant="body1" color="#fff" textAlign="center">Chart</Typography>
            </Box>
            <Box sx={{ backgroundColor: '#333', p: 2, borderRadius: 2 }}>
              <LineChart width={200} height={100} data={data2}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
              <Typography variant="body1" color="#fff" textAlign="center">Chart</Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default PreviewPage;