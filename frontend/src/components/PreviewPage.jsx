import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Marketing', value2023: 2, value2024: 19 },
  { name: 'Product design/R&D', value2023: 3, value2024: 19 },
  { name: 'ESG/sustainability*', value2023: 0, value2024: 22 },
  { name: 'Human resources*', value2023: 0, value2024: 24 },
  { name: 'Finance', value2023: 5, value2024: 25 },
  { name: 'Sales/customer operations', value2023: 4, value2024: 25 },
  { name: 'Logistics', value2023: 2, value2024: 26 },
  { name: 'Risk management', value2023: 4, value2024: 26 },
  { name: 'IT', value2023: 4, value2024: 27 },
];

const PreviewPage = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: '#ffffff', height: '100%' }}>
      <Stack alignItems="center" spacing={2}>
        <Typography variant="h4" fontWeight="bold" textAlign="center">
          Top 9 Use Cases for Generative AI
        </Typography>
        <Typography variant="subtitle1" textAlign="center">
          % of organizations implementing generative AI use cases, by function
        </Typography>
        <Box sx={{ width: '100%', height: 500 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 100,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" tickFormatter={(value) => `${value}%`} />
              <YAxis dataKey="name" type="category" tick={{ fontSize: 12 }} />
              <Tooltip formatter={(value) => `${value}%`} />
              <Legend />
              <Bar dataKey="value2023" name="2023" fill="#39c0c8" barSize={20} />
              <Bar dataKey="value2024" name="2024" fill="#0070ad" barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </Box>
        <Box sx={{ width: '100%', mt: 2 }}>
          <Typography variant="caption" sx={{ fontStyle: 'italic' }}>
            Copyright © 2024 Capgemini. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ display: 'block', mt: 1 }}>
            Source: Capgemini Research Institute, Generative AI executive survey, April 2023, N = 800 organizations; Generative AI executive survey, May-June 2024, N = 1,031 organizations that are at least exploring generative AI capabilities; N varies per functional use case, ranging from 499 to 716.
          </Typography>
          <Typography variant="caption" sx={{ display: 'block' }}>
            *ESG/sustainability and human resources were excluded from the 2023 research.
          </Typography>
          <Typography variant="caption" sx={{ display: 'block' }}>
            ** Implementation refers to organizations that have partially scaled the functional use case in question.
          </Typography>
          <Typography variant="caption" sx={{ display: 'block' }}>
            ***In the 2024 averages, respondents from the public sector and India are excluded, as they were not included in the 2023 research.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default PreviewPage;