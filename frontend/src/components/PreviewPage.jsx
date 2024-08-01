import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

const PreviewPage = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', bgcolor: '#f5f5f5' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 2, bgcolor: '#fff', border: '1px solid #ff0000' }}>
            <Typography variant="body1" align="center">Upload or drag your file</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Button variant="contained" color="primary" sx={{ mr: 1 }}>confirm</Button>
              <Button variant="outlined" color="primary">cancel</Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 2, bgcolor: '#fff', border: '1px solid #ff0000' }}>
            <Typography variant="body1" align="center">File list</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PreviewPage;