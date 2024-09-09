import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Stack } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const PreviewPage = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TESLA
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit">Vehicles</Button>
            <Button color="inherit">Energy</Button>
            <Button color="inherit">Charging</Button>
            <Button color="inherit">Discover</Button>
            <Button color="inherit">Shop</Button>
          </Box>
          <Box sx={{ display: 'flex', gap: 1, ml: 2 }}>
            <IconButton color="inherit">
              <HelpOutlineIcon />
            </IconButton>
            <IconButton color="inherit">
              <LanguageIcon />
            </IconButton>
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          flexGrow: 1,
          backgroundImage: 'url(https://placehold.co/1920x1080?text=Tesla+Model+Y+on+road)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 4,
        }}
      >
        <Box>
          <Typography variant="h2" component="h1" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
            Model Y
          </Typography>
          <Typography variant="h5" sx={{ color: 'white', mb: 0.5 }}>
            1.99% APR Financing
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'white' }}>
            From $31,490*
          </Typography>
        </Box>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button variant="contained" sx={{ bgcolor: '#3E6AE1', color: 'white', width: 200, py: 1 }}>
            Order Now
          </Button>
          <Button variant="contained" sx={{ bgcolor: 'white', color: 'black', width: 200, py: 1 }}>
            Experience Model Y
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default PreviewPage;