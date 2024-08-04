import React from 'react';
import { Box, Typography, Stack, Button, Grid } from '@mui/material';

const PreviewPage = () => {
  return (
    <Box sx={{ bgcolor: 'background.default', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ bgcolor: '#333', p: 4, borderRadius: 2, width: 300 }}>
        <Box sx={{ bgcolor: '#000', borderRadius: 1, p: 2, mb: 2 }}>
          <Typography variant="h6" sx={{ color: '#fff', textAlign: 'right' }}>
            0
          </Typography>
        </Box>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth>
              1
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth>
              2
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth>
              3
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth>
              +
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth>
              4
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth>
              5
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth>
              6
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth>
              -
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth>
              7
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth>
              8
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth>
              9
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth>
              /
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth>
              .
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth>
              *
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth>
              -
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth>
              =
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PreviewPage;