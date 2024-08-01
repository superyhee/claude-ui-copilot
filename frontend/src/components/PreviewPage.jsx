import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';

const PreviewPage = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
      <Stack spacing={4}>
        <Box sx={{ border: '1px solid #ff0000', p: 4, backgroundColor: '#ffffff' }}>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>Upload or drag your file</Typography>
          <Stack direction="row" spacing={2} sx={{ mt: 2, justifyContent: 'center' }}>
            <Button variant="contained" color="primary">confirm</Button>
            <Button variant="contained" color="primary">cancel</Button>
          </Stack>
        </Box>
        <Box sx={{ border: '1px solid #ff0000', p: 4, backgroundColor: '#ffffff' }}>
          <Typography variant="h6" sx={{ borderBottom: '1px solid #ff0000', pb: 1 }}>File list</Typography>
          <Box sx={{ height: 200, backgroundColor: '#ffffff' }}>
            <img src="https://placehold.co/600x400" alt="Placeholder image" />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default PreviewPage;