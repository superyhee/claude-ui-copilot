import { Box, Typography, Stack } from '@mui/material';

const PreviewPage = () => {
  return (
    <Box sx={{ bgcolor: 'black', p: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Stack direction="row" spacing={4}>
        <Box sx={{ bgcolor: '#ffd700', p: 2, width: 250, height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="body1" sx={{ color: 'black', textAlign: 'center' }}>
            You don't have any supporters yet Share your page with your audience to get started.
          </Typography>
        </Box>
        <Box sx={{ bgcolor: '#ffd700', p: 2, width: 250, height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="body1" sx={{ color: 'black', textAlign: 'center' }}>
            You don't have any supporters yet Share your page with your audience to get started.
          </Typography>
        </Box>
        <Box sx={{ bgcolor: '#ffd700', p: 2, width: 250, height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="body1" sx={{ color: 'black', textAlign: 'center' }}>
            You don't have any supporters yet Share your page with your audience to get started.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default PreviewPage;