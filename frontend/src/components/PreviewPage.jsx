import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';

const PreviewPage = () => {
  return (
    <Box sx={{ backgroundImage: 'linear-gradient(to right, #a6c1ee, #fbc2eb)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ maxWidth: '600px', textAlign: 'center' }}>
        <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>
          ChatGPT on your desktop
        </Typography>
        <Typography variant="body1" sx={{ color: 'white', mb: 4 }}>
          Chat about email, screenshots, files, and anything on your screen.
        </Typography>
        <Button variant="contained" color="primary" sx={{ backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#e0e0e0' } }}>
          Learn more
        </Button>
      </Box>
      <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: 4 }}>
        <Box sx={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'white' }} />
        <Box sx={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.5)' }} />
        <Box sx={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.5)' }} />
      </Stack>
    </Box>
  );
};

export default PreviewPage;