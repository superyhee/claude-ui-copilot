import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PreviewPage = () => {
  const data = [
    { year: 2018, budget: 300000 },
    { year: 2019, budget: 100000 },
    { year: 2020, budget: 350000 },
    { year: 2021, budget: 380000 },
    { year: 2022, budget: 400000 },
  ];

  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100%' }}>
      <Stack alignItems="center" spacing={4}>
        <Typography variant="h4" gutterBottom>
          Yearly Budget Overview
        </Typography>
        <Box sx={{ width: '100%', height: 400 }}>
          <ResponsiveContainer>
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="budget" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </Box>
        <Typography variant="body1" align="center" sx={{ maxWidth: 600 }}>
          This chart displays the companys total yearly budget from 2018 to 2022. 
          We can observe significant fluctuations, with a notable dip in 2019 and a steady increase thereafter.
        </Typography>
      </Stack>
    </Box>
  );
};

export default PreviewPage;