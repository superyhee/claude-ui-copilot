import React from 'react';
import { Box, Typography, Stack, Avatar, Button, Chip } from '@mui/material';

const PreviewPage = () => {
  const earnings = [
    { label: 'Supporters', value: 0, color: '#ffd700' },
    { label: 'Membership', value: 0, color: '#ff69b4' },
    { label: 'Extras', value: 0, color: '#00bfff' },
  ];

  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100%' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar alt="User Avatar" src="https://placehold.co/40x40" />
          <Typography variant="h6">Hi, yang</Typography>
          <Typography variant="body2">buymeacoffee.com/superhew</Typography>
        </Stack>
        <Button variant="contained" color="primary">
          Share page
        </Button>
      </Stack>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={4} mb={4}>
        <Typography variant="h4">Earnings</Typography>
        <Chip label="Last 30 days" variant="outlined" />
      </Stack>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} mb={4}>
        <Typography variant="h3" fontWeight="bold" color="text.primary">
          $0
        </Typography>
        {earnings.map((earning, index) => (
          <Stack key={index} direction="row" alignItems="center" spacing={1}>
            <Typography variant="h5" fontWeight="bold" color={earning.color}>
              ${earning.value}
            </Typography>
            <Typography variant="body1">{earning.label}</Typography>
          </Stack>
        ))}
      </Stack>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Typography variant="body1" color="text.secondary">
          You don't have any supporters yet
        </Typography>
        <Typography variant="body1" color="text.primary">
          Share your page with your audience to get started.
        </Typography>
      </Stack>
    </Box>
  );
};

export default PreviewPage;