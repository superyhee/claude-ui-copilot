import { Box, Typography, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PreviewPage = () => {
  const theme = useTheme();

  const data = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 600 },
    { name: 'Mar', value: 800 },
    { name: 'Apr', value: 1000 },
    { name: 'May', value: 1200 },
    { name: 'Jun', value: 1400 },
    { name: 'Jul', value: 1600 },
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', p: 4, height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4" sx={{ mb: 4, color: 'text.primary', fontWeight: 'bold' }}>
        Your Dashboard
      </Typography>
      <Box sx={{ bgcolor: 'background.paper', p: 4, borderRadius: 2, boxShadow: theme.shadows[4], flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" sx={{ mb: 2, color: 'text.primary' }}>
          Monthly Revenue
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke={theme.palette.primary.main} />
          </LineChart>
        </ResponsiveContainer>
        <Stack direction="row" spacing={4} mt={4}>
          <Box sx={{ bgcolor: '#008000', p: 2, width: 250, height: 200, borderRadius: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="body1" sx={{ color: 'white', textAlign: 'center' }}>
              <img src="https://placehold.co/100x100?text=Icon" alt="Green Icon" />
              <br />
              You have 10 new supporters!
            </Typography>
          </Box>
          <Box sx={{ bgcolor: '#ffa500', p: 2, width: 250, height: 200, borderRadius: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="body1" sx={{ color: 'black', textAlign: 'center' }}>
              <img src="https://placehold.co/100x100?text=Icon" alt="Orange Icon" />
              <br />
              Your campaign reached $5,000!
            </Typography>
          </Box>
          <Box sx={{ bgcolor: '#87ceeb', p: 2, width: 250, height: 200, borderRadius: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="body1" sx={{ color: 'black', textAlign: 'center' }}>
              <img src="https://placehold.co/100x100?text=Icon" alt="Blue Icon" />
              <br />
              You have a new message!
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default PreviewPage;