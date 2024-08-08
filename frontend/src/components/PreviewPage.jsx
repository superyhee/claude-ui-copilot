import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
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
    <Box sx={{ p: 4, backgroundColor: '#ffffff', height: '100vh' }}>
      <Paper elevation={3} sx={{ p: 3, maxWidth: 800, margin: 'auto' }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
          Top 9 Use Cases for Generative AI
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom sx={{ mb: 3 }}>
          % of organizations implementing generative AI use cases, by function
        </Typography>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Legend />
            <Bar dataKey="value2023" name="2023" fill="#00B7C2" />
            <Bar dataKey="value2024" name="2024" fill="#0070AD" />
          </BarChart>
        </ResponsiveContainer>
        <Typography variant="caption" display="block" align="right" sx={{ mt: 2 }}>
          Copyright © 2024 Capgemini. All rights reserved.
        </Typography>
        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          Source:Capgemini Research Institute, Generative AI executive survey, April 2023, N = 800 organizations; Generative AI executive survey, May–June 2024, N = 1,016 organizations that are at least exploring generative AI capabilities; N varies per functional use case, ranging from 499 to 716.
        </Typography>
        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          *ESG/sustainability and human resources were excluded from the 2023 research.
        </Typography>
        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          ** "Implementation" refers to organizations that have partially scaled the functional use case in question.
        </Typography>
        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          ***In the 2024 averages, respondents from the public sector and India are excluded, as they were not included in the 2023 research.
        </Typography>
      </Paper>
    </Box>
  );
};

export default PreviewPage;