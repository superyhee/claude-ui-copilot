import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

const PreviewPage = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#000' }}>
      <Box sx={{ bgcolor: '#333', p: 2 }}>
        <Stack spacing={2}>
          <Typography variant="body1" sx={{ color: '#fff' }}>
            navigation
          </Typography>
          <Typography variant="body1" sx={{ color: '#fff' }}>
            title
          </Typography>
          <Typography variant="body1" sx={{ color: '#fff' }}>
            menu
          </Typography>
        </Stack>
      </Box>
      <Box sx={{ flex: 1, bgcolor: '#f5f5f5', p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ bgcolor: '#ffcdd2', p: 2, width: '80%', height: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h5" sx={{ color: '#000' }}>
            chart
          </Typography>
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <img src="https://placehold.co/400x200" alt="Line chart with a sharp upward curve" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PreviewPage;