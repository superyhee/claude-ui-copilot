import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { SvgIcon } from '@mui/material';

const TreeIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M12,2L4,20h16L12,2z M12,6.5l4.5,10.5h-9L12,6.5z" />
  </SvgIcon>
);

const PreviewPage = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100%' }}>
      <Stack alignItems="center" spacing={3}>
        <TreeIcon sx={{ fontSize: 100, color: '#4CAF50' }} />
        <Typography variant="h5" color="#2E7D32">绿色树木标志</Typography>
        <Typography variant="body1" align="center" maxWidth={600}>
          这是一个简约而富有象征意义的绿色树木标志。它代表了自然、生长和环保的理念。
          树木的形状简洁明了，易于识别，同时绿色的色调传递出生机和活力。
        </Typography>
      </Stack>
    </Box>
  );
};

export default PreviewPage;