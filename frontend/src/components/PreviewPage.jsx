import React from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';

const PreviewPage = () => {
  return (
    <Box sx={{ p: 4, bgcolor: '#f5f5f5', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h5" sx={{ mb: 4 }}>Dialog</Typography>
      <Stack direction="row" spacing={4} alignItems="center">
        <Box sx={{ bgcolor: '#fff', border: '1px solid #000', p: 4, width: 300, height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography>Upload or drag your file</Typography>
        </Box>
        <Box sx={{ bgcolor: '#fff', border: '1px solid #000', p: 2, width: 200, height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography>File list</Typography>
        </Box>
      </Stack>
      <Stack direction="row" spacing={2} mt={4}>
        <Button variant="contained" color="error" sx={{ bgcolor: '#ff0000' }}>confirm</Button>
        <Button variant="contained" color="error" sx={{ bgcolor: '#ff0000' }}>cancel</Button>
      </Stack>
    </Box>
  );
};

export default PreviewPage;