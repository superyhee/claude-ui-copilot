import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';

const PreviewPage = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
      <Stack spacing={2}>
        <Box sx={{ border: '1px solid #ff0000', backgroundColor: '#fff', p: 4, textAlign: 'center' }}>
          <Typography variant="body1" color="initial">Upload or drag your file</Typography>
        </Box>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="primary">confirm</Button>
          <Button variant="contained" color="primary">cancel</Button>
        </Stack>
        <Box sx={{ border: '1px solid #ff0000', backgroundColor: '#fff', p: 4 }}>
          <Typography variant="h6" color="initial">File list</Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default PreviewPage;