import React from 'react';
import { Box, Typography, Stack, PieChart, Pie, Cell, Legend, ResponsiveContainer } from '@mui/material';

const PreviewPage = () => {
  const data = [
    { name: 'Dogs', value: 79 },
    { name: 'Cats', value: 17 },
    { name: 'Rats', value: 3 },
  ];

  const COLORS = ['#FFFFFF', '#C0C0C0', '#8FBC8F'];

  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100%' }}>
      <Stack alignItems="center" spacing={2}>
        <Typography variant="h5">Pets adopted by volunteers</Typography>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Stack>
    </Box>
  );
};

export default PreviewPage;