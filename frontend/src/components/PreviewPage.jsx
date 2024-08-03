import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';

const PreviewPage = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
      <Stack spacing={2} alignItems="center">
        <Box sx={{ border: '2px solid #ff0000', p: 4, backgroundColor: '#ffffff' }}>
          <Typography variant="body1" align="center" sx={{ mb: 2 }}>
            Upload or drag your file
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button variant="contained" color="primary" sx={{ textTransform: 'none' }}>
              confirm
            </Button>
            <Button variant="contained" color="inherit" sx={{ textTransform: 'none' }}>
              cancel
            </Button>
          </Stack>
        </Box>
        <Box sx={{ border: '2px solid #ff0000', p: 4, backgroundColor: '#ffffff' }}>
          <Typography variant="body1" align="center">
            File list
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default PreviewPage;