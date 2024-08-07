import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

const AILogoSvg = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#2c3e50" />
    <circle cx="100" cy="100" r="70" fill="none" stroke="#3498db" strokeWidth="10" />
    <path d="M70 100 Q 100 50, 130 100 M70 100 Q 100 150, 130 100" fill="none" stroke="#3498db" strokeWidth="10" />
    <circle cx="85" cy="85" r="10" fill="#3498db" />
    <circle cx="115" cy="85" r="10" fill="#3498db" />
    <path d="M85 130 Q 100 145, 115 130" fill="none" stroke="#3498db" strokeWidth="6" />
    <text x="100" y="180" fontFamily="Arial" fontSize="24" fill="#3498db" textAnchor="middle">NEUROLINK</text>
  </svg>
);

const PreviewPage = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100%' }}>
      <Stack alignItems="center" spacing={4}>
        <Typography variant="h4" color="primary">Neurolink Logo Concept</Typography>
        <AILogoSvg />
        <Typography variant="body1" align="center" sx={{ maxWidth: '600px' }}>
          This conceptual logo for Neurolink features a minimalist design incorporating neural network motifs. 
          The dark background represents the complexity of the human brain, while the blue elements symbolize 
          technology and innovation. The circular pattern and interconnected lines suggest connectivity and 
          the bridging of mind and machine.
        </Typography>
      </Stack>
    </Box>
  );
};

export default PreviewPage;