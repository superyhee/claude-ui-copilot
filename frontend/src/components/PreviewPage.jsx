import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Stack } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const PreviewPage = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'black' }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
            TESLA
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Button color="inherit" sx={{ color: 'white' }}>Vehicles</Button>
            <Button color="inherit" sx={{ color: 'white' }}>Energy</Button>
            <Button color="inherit" sx={{ color: 'white' }}>Charging</Button>
            <Button color="inherit" sx={{ color: 'white' }}>Discover</Button>
            <Button color="inherit" sx={{ color: 'white' }}>Shop</Button>
          </Box>
          <Box sx={{ display: 'flex', gap: 1, ml: 2 }}>
            <IconButton color="inherit" sx={{ color: 'white' }}>
              <HelpOutlineIcon />
            </IconButton>
            <IconButton color="inherit" sx={{ color: 'white' }}>
              <LanguageIcon />
            </IconButton>
            <IconButton color="inherit" sx={{ color: 'white' }}>
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          flexGrow: 1,
          backgroundImage: 'url(https://placehold.co/1920x1080?text=Tesla+Model+Y+on+a+scenic+mountain+road)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 4,
        }}
      >
        <Box>
          <Typography variant="h2" component="h1" sx={{ color: 'white', fontWeight: 'bold', mb: 1, textTransform: 'uppercase' }}>
            Model Y
          </Typography>
          <Typography variant="h5" sx={{ color: 'white', mb: 0.5 }}>
            Lease starting at $399/mo*
          </Typography>
        </Box>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ mb: 4 }}>
          <Button variant="contained" sx={{ bgcolor: 'rgba(23, 26, 32, 0.8)', color: 'white', width: 250, py: 1, fontSize: '14px', '&:hover': { bgcolor: 'rgba(23, 26, 32, 1)' } }}>
            Custom Order
          </Button>
          <Button variant="contained" sx={{ bgcolor: 'rgba(244, 244, 244, 0.65)', color: 'rgba(23, 26, 32, 0.8)', width: 250, py: 1, fontSize: '14px', '&:hover': { bgcolor: 'rgba(244, 244, 244, 0.8)' } }}>
            Demo Drive
          </Button>
        </Stack>
      </Box>
      <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.6)', textAlign: 'center', py: 2 }}>
        *Excludes taxes and fees with price subject to change. Available in select states.
      </Typography>
    </Box>
  );
};

export default PreviewPage;