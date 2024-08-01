import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';

const PreviewPage = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
      <Stack spacing={2} alignItems="center">
        <Box sx={{ border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#fff', p: 2, width: 300 }}>
          <Typography variant="body1" align="center">Upload or drag your file</Typography>
        </Box>
        <Button variant="contained" color="primary" sx={{ backgroundColor: '#00b050', borderRadius: '16px', py: 1, px: 3 }}>
          confirm
        </Button>
        <Box sx={{ border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#fff', p: 2, width: 300 }}>
          <Typography variant="body1" align="center">File list</Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default PreviewPage;