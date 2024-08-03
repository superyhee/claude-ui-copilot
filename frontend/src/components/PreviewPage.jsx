import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

const PreviewPage = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Dialog</Typography>
      <Box sx={{ border: '1px solid #000', p: 2, backgroundColor: '#fff', display: 'flex', gap: 2 }}>
        <Box sx={{ border: '2px solid #0000ff', p: 2, backgroundColor: '#f0f8ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="body1">Upload or drag your file</Typography>
        </Box>
        <Box sx={{ border: '2px solid #0000ff', p: 2, backgroundColor: '#f0f8ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h6">File list</Typography>
        </Box>
      </Box>
      <Grid container justifyContent="flex-end" sx={{ mt: 2, gap: 1 }}>
        <Grid item>
          <Button variant="contained" sx={{ backgroundColor: '#ff0000' }}>confirm</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" sx={{ backgroundColor: '#ff0000' }}>cancel</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PreviewPage;