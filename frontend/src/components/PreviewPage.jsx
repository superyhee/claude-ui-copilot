import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

const PreviewPage = () => {
  const blogPostTitles = ['Blog post title', 'Blog post title', 'Blog post title'];

  return (
    <Box sx={{ backgroundColor: 'black', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 2, backgroundColor: 'black', color: 'white' }}>
        <Typography variant="h5">Site title</Typography>
      </Box>
      <Box sx={{ p: 2, backgroundColor: 'black', flex: 1, overflowY: 'auto' }}>
        <Stack spacing={2}>
          {blogPostTitles.map((title, index) => (
            <Box key={index} sx={{ p: 2, backgroundColor: 'white', color: 'black' }}>
              <Typography variant="h6">{title}</Typography>
            </Box>
          ))}
        </Stack>
      </Box>
      <Box
        sx={{
          height: '200px',
          backgroundColor: 'gray',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6">image background</Typography>
        <img src="https://placehold.co/200x100" alt="Placeholder Image" />
      </Box>
    </Box>
  );
};

export default PreviewPage;