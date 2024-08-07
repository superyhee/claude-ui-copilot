import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const PreviewPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src="https://placehold.co/30x30" alt="Company logo" style={{ verticalAlign: 'middle' }} />
          </Typography>
          <Button color="inherit">Research</Button>
          <Button color="inherit">Products</Button>
          <Button color="inherit">Safety</Button>
          <Button color="inherit">Company</Button>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container maxWidth={false} disableGutters>
        <Box
          sx={{
            height: '80vh',
            background: 'linear-gradient(45deg, #e6f2ff 0%, #ffe6f2 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: 4,
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
            ChatGPT on your desktop
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ color: 'white', maxWidth: '600px', mb: 4 }}>
            Chat about email, screenshots, files, and anything on your screen.
          </Typography>
          <Button variant="contained" sx={{ backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#f0f0f0' } }}>
            Learn more
          </Button>
        </Box>
      </Container>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        {[0, 1, 2, 3, 4].map((index) => (
          <Box
            key={index}
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: index === 0 ? 'black' : '#ccc',
              mx: 0.5,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default PreviewPage;