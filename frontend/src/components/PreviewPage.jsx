import React from 'react';
import { Box, Typography, Stack, Button, Avatar } from '@mui/material';

const PreviewPage = () => {
  const userData = {
    name: 'yang',
    profileUrl: 'buymecoffee.com/superhew',
  };

  const earningData = {
    last30Days: {
      total: 0,
      supporters: 0,
      membership: 0,
      extras: 0,
    },
  };

  const moreWaysToEarn = [
    {
      icon: <Avatar alt="Membership icon" src="https://placehold.co/50x50" />,
      title: 'Membership',
      description: 'Monthly membership for your biggest fans and supporters.',
      action: 'Enable',
    },
    {
      icon: <Avatar alt="Shop icon" src="https://placehold.co/50x50" />,
      title: 'Shop',
      description: 'Introducing Shop, the creative way to sell.',
      action: 'Enable',
    },
    {
      icon: <Avatar alt="Exclusive posts icon" src="https://placehold.co/50x50" />,
      title: 'Exclusive posts',
      description: 'Publish your best content exclusively for your supporters and members.',
      action: 'Write a post',
    },
  ];

  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100%' }}>
      <Stack spacing={2}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar alt="User avatar" src="https://placehold.co/50x50" />
            <Box>
              <Typography variant="h6">Hi, {userData.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {userData.profileUrl}
              </Typography>
            </Box>
          </Stack>
          <Button variant="contained" color="primary">
            Share page
          </Button>
        </Stack>
        <Box>
          <Typography variant="h6">Earnings</Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="h5">${earningData.last30Days.total}</Typography>
            <Stack direction="row" spacing={1}>
              <Typography variant="body2" color="text.secondary">
                ${earningData.last30Days.supporters} Supporters
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ${earningData.last30Days.membership} Membership
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ${earningData.last30Days.extras} Extras
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box>
          <Typography variant="body1" color="text.secondary">
            You don't have any supporters yet
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Share your page with your audience to get started
          </Typography>
        </Box>
        <Typography variant="h6">More ways to earn</Typography>
        <Stack direction="row" spacing={2}>
          {moreWaysToEarn.map((item, index) => (
            <Box key={index} sx={{ backgroundColor: '#fff', p: 2, borderRadius: 1 }}>
              {item.icon}
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
              <Button variant="contained" color="primary">
                {item.action}
              </Button>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default PreviewPage;