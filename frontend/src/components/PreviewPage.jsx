import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

const PreviewPage = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ backgroundColor: '#fff5f5', p: 4, border: '1px solid #ff0000' }}>
            <Typography variant="body1" align="center" gutterBottom>
              Upload or drag your file
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                confirm
              </Button>
              <Button variant="contained" color="secondary">
                cancel
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ backgroundColor: '#fff5f5', p: 4, border: '1px solid #ff0000' }}>
            <Typography variant="h6" gutterBottom>
              File list
            </Typography>
            <Box sx={{ backgroundColor: '#ffffff', p: 2, border: '1px solid #cccccc', height: 200 }}>
              <img src="https://placehold.co/400x200" alt="Placeholder Image" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PreviewPage;