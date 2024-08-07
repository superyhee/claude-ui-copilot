import { Box, Typography, Stack } from '@mui/material';

const RobotSvg = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="50" width="100" height="100" fill="#3f51b5" />
    <circle cx="75" cy="85" r="10" fill="#fff" />
    <circle cx="125" cy="85" r="10" fill="#fff" />
    <rect x="70" y="120" width="60" height="10" fill="#fff" />
    <line x1="50" y1="160" x2="30" y2="180" stroke="#3f51b5" strokeWidth="5" />
    <line x1="150" y1="160" x2="170" y2="180" stroke="#3f51b5" strokeWidth="5" />
  </svg>
);

const PreviewPage = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100%' }}>
      <Stack alignItems="center" spacing={4}>
        <Typography variant="h4" color="primary">Robot Generator</Typography>
        <RobotSvg />
        <Typography variant="body1" align="center">
          This is a simple robot SVG image generated using basic shapes and lines.
          The robot has a square body, circular eyes, and a rectangular mouth.
        </Typography>
      </Stack>
    </Box>
  );
};

export default PreviewPage;