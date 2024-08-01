import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

const PreviewPage = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100%' }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box
            sx={{
              p: 4,
              bgcolor: '#d9d9d9',
              border: '1px solid #a9a9a9',
              borderRadius: 1,
            }}
          >
            <Typography variant="body1" color="text.primary">
              Upload or drag your file
            </Typography>
          </Box>
          <Box
            sx={{
              mt: 2,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                bgcolor: '#d9d9d9',
                color: '#000',
                '&:hover': {
                  bgcolor: '#a9a9a9',
                },
              }}
            >
              confirm
            </Button>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              p: 2,
              bgcolor: '#d9d9d9',
              border: '1px solid #a9a9a9',
              borderRadius: 1,
            }}
          >
            <Typography variant="h6" color="text.primary">
              File list
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PreviewPage;