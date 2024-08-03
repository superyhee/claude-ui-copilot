import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

const PreviewPage = () => {
  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(to right, #e6b3ff, #ff99cc)' }}>
      <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh' }}>
        <Grid item xs={12} md={8}>
          <Box sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h2" sx={{ fontWeight: 'bold', color: 'white', mb: 2 }}>
              ChatGPT on your desktop
            </Typography>
            <Typography variant="h5" sx={{ color: 'white', mb: 4 }}>
              Chat about email, screenshots, files, and anything on your screen.
            </Typography>
            <Button variant="contained" color="inherit" sx={{ borderRadius: 20 }}>
              Learn more
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <img src="https://placehold.co/32x32" alt="Placeholder" style={{ marginRight: 8 }} />
        <img src="https://placehold.co/32x32" alt="Placeholder" style={{ marginRight: 8 }} />
        <img src="https://placehold.co/32x32" alt="Placeholder" style={{ marginRight: 8 }} />
        <img src="https://placehold.co/32x32" alt="Placeholder" style={{ marginRight: 8 }} />
        <img src="https://placehold.co/32x32" alt="Placeholder" />
      </Box>
    </Box>
  );
};

export default PreviewPage;