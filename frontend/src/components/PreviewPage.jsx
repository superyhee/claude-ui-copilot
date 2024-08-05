import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const PreviewPage = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: '#000000', height: '100vh' }}>
      <Typography variant="h4" sx={{ color: '#ffffff', mb: 4 }}>
        Blog
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Box sx={{ backgroundColor: '#ffffff', p: 2 }}>
            <Typography variant="body1">Blog1...</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ backgroundColor: '#ffffff', p: 2 }}>
            <Typography variant="body1">Blog2...</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ backgroundColor: '#ffffff', p: 2 }}>
            <Typography variant="body1">Blog3...</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ backgroundColor: '#ffffff', p: 2 }}>
            <Typography variant="body1">Blog4...</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PreviewPage;