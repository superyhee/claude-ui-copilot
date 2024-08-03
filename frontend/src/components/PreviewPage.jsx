import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

const PreviewPage = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100%' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Dialog
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box
            sx={{
              backgroundColor: '#fff',
              border: '1px solid #000',
              p: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant="body1">Upload or drag your file</Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              backgroundColor: '#fff',
              border: '1px solid #000',
              p: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant="body1">File list</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained" color="error" sx={{ mr: 2 }}>
            cancel
          </Button>
          <Button variant="contained" color="primary">
            confirm
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PreviewPage;