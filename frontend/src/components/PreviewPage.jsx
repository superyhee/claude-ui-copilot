import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';

const PreviewPage = () => {
  const handleUpload = () => {
    // Implement file upload functionality
  };

  const handleCancel = () => {
    // Implement cancel functionality
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', bgcolor: '#f5f5f5' }}>
      <Stack spacing={2} alignItems="center">
        <Box sx={{ bgcolor: '#ffdada', p: 4, borderRadius: 2, border: '1px solid #ff6b6b' }}>
          <Typography variant="body1" sx={{ color: '#ff6b6b' }}>Upload or drag your file</Typography>
        </Box>
        <Box sx={{ bgcolor: '#ffdada', p: 2, borderRadius: 2, border: '1px solid #ff6b6b' }}>
          <Typography variant="body1" sx={{ color: '#ff6b6b' }}>File list</Typography>
        </Box>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="error" onClick={handleUpload}>
            confirm
          </Button>
          <Button variant="outlined" color="error" onClick={handleCancel}>
            cancel
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default PreviewPage;