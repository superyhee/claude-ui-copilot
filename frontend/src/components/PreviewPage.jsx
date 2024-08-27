import React from 'react';
import { AppBar, Box, Button, IconButton, TextField, Toolbar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const PreviewPage = () => {
  const gradientBackground = 'linear-gradient(135deg, #b3d4fc 0%, #e6a8d7 50%, #ffa8b6 100%)';
  
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Box component="img" src="https://placehold.co/30x30" alt="Company logo" sx={{ mr: 2 }} />
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <Button color="inherit">Research</Button>
            <Button color="inherit">Products</Button>
            <Button color="inherit">Safety</Button>
            <Button color="inherit">Company</Button>
          </Box>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      
      <Box
        sx={{
          flexGrow: 1,
          background: gradientBackground,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          p: 4,
        }}
      >
        <Typography variant="h2" component="h1" sx={{ color: 'white', mb: 2, fontWeight: 'bold' }}>
          ChatGPT on your desktop
        </Typography>
        <Typography variant="h6" sx={{ color: 'white', mb: 4, maxWidth: '600px' }}>
          Chat about email, screenshots, files, and anything on your screen.
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: 'white',
            color: 'black',
            '&:hover': { bgcolor: 'white' },
            borderRadius: '20px',
            px: 4,
          }}
        >
          Learn more
        </Button>
      </Box>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 2, bgcolor: 'rgba(255, 255, 255, 0.3)' }}>
        {[0, 1, 2, 3, 4].map((index) => (
          <Box
            key={index}
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              mx: 0.5,
              bgcolor: index === 0 ? 'black' : 'rgba(0, 0, 0, 0.3)',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default PreviewPage;