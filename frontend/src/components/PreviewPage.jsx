import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

const AILogoSvg = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="90" fill="#4a90e2" />
    <path d="M50 100 Q 100 50, 150 100 T 50 100" fill="none" stroke="#ffffff" strokeWidth="8" />
    <circle cx="75" cy="75" r="15" fill="#ffffff" />
    <circle cx="125" cy="75" r="15" fill="#ffffff" />
    <path d="M70 130 Q 100 160, 130 130" fill="none" stroke="#ffffff" strokeWidth="8" />
    <text x="100" y="185" fontFamily="Arial" fontSize="24" fill="#ffffff" textAnchor="middle">AI</text>
  </svg>
);

const PreviewPage = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100%' }}>
      <Stack alignItems="center" spacing={4}>
        <Typography variant="h4" color="primary">AI Company Logo</Typography>
        <AILogoSvg />
        <Typography variant="body1" align="center">
          This is a conceptual AI company logo featuring a stylized face within a blue circle.
          The design incorporates curved lines to represent intelligence and connectivity,
          with the text AI at the bottom to emphasize the companys focus.
        </Typography>
      </Stack>
    </Box>
  );
};

export default PreviewPage;