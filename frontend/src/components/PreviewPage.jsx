import { Box, Typography, Stack } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

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
      <Stack alignItems="center" spacing={2}>
        <Typography variant="h5">Company Budget</Typography>
        <LineChart
          width={600}
          height={400}
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <XAxis dataKey="year" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="budget" stroke="#8884d8" />
        </LineChart>
      </Stack>
      <Stack alignItems="center" spacing={2} mt={4}>
        <img
          src="https://placehold.co/600x400"
          alt="A placeholder image for visual appeal"
        />
      </Stack>
    </Box>
  );
};

export default PreviewPage;