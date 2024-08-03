import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

const PreviewPage = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Box sx={{ backgroundColor: '#fff', border: '1px solid #ff0000', p: 4, textAlign: 'center' }}>
            <Typography variant="body1" gutterBottom>Upload or drag your file</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Button variant="contained" color="primary" sx={{ mr: 2 }}>confirm</Button>
              <Button variant="contained" color="secondary">cancel</Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ backgroundColor: '#fff', border: '1px solid #ff0000', p: 4, textAlign: 'center' }}>
            <Typography variant="body1">File list</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PreviewPage;