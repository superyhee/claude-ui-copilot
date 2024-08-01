import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const PreviewPage = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', bgcolor: '#f5f5f5' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: 'white', border: '1px solid #ccc', borderRadius: 2, p: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: '#e0e0e0', p: 4, mb: 2, borderRadius: 2 }}>
          <Typography variant="body1" sx={{ color: 'black' }}>Upload or drag your file</Typography>
        </Box>
        <Button variant="contained" sx={{ bgcolor: '#e0e0e0', color: 'black', mb: 2 }}>confirm</Button>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: '#e0e0e0', p: 4, borderRadius: 2 }}>
          <Typography variant="body1" sx={{ color: 'black' }}>File list</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PreviewPage;