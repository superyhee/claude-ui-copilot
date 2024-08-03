import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const PreviewPage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '500px' }}>
        <Box sx={{ border: '1px solid red', p: 2, bgcolor: '#ffedf5' }}>
          <Typography variant="body1">Upload or drag your file</Typography>
        </Box>
        <Box sx={{ border: '1px solid red', p: 2, bgcolor: '#ffedf5' }}>
          <Typography variant="body1">File list</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '200px', mt: 2 }}>
        <Button variant="contained" color="error" sx={{ borderRadius: '16px' }}>confirm</Button>
        <Button variant="outlined" color="error" sx={{ borderRadius: '16px' }}>cancel</Button>
      </Box>
    </Box>
  );
};

export default PreviewPage;