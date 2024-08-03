import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

const PreviewPage = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100%' }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box sx={{ backgroundColor: '#ffcdd2', p: 4, borderRadius: 1 }}>
            <Typography variant="body1" align="center">
              Upload or drag your file
            </Typography>
          </Box>
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" color="primary" sx={{ mr: 2 }}>
              confirm
            </Button>
            <Button variant="contained" color="primary">
              cancel
            </Button>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ backgroundColor: '#ffcdd2', p: 2, borderRadius: 1 }}>
            <Typography variant="body1">File list</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PreviewPage;