import React from 'react';
import { Box, Typography, Stack, Card, CardMedia } from '@mui/material';

const PreviewPage = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100vh' }}>
      <Typography variant="h4" gutterBottom align="center">
        Blog
      </Typography>
      <Stack spacing={4} direction="row" justifyContent="center" alignItems="center">
        <Card>
          <CardMedia
            component="img"
            alt="Placeholder Image"
            height="140"
            image="https://placehold.co/300x200"
          />
        </Card>
        <Card>
          <CardMedia
            component="img"
            alt="Placeholder Image"
            height="140"
            image="https://placehold.co/300x200"
          />
        </Card>
      </Stack>
      <Stack spacing={4} direction="row" justifyContent="center" alignItems="center">
        <Card>
          <CardMedia
            component="img"
            alt="Placeholder Image"
            height="140"
            image="https://placehold.co/300x200"
          />
        </Card>
        <Card>
          <CardMedia
            component="img"
            alt="Placeholder Image"
            height="140"
            image="https://placehold.co/300x200"
          />
        </Card>
      </Stack>
    </Box>
  );
};

export default PreviewPage;