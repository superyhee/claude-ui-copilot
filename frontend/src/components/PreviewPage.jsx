import React from 'react';
import { Box, Typography, Button, AppBar, Toolbar } from '@mui/material';

const PreviewPage = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static" sx={{ bgcolor: 'white', color: 'black', boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box component="img" src="https://placehold.co/40x40" alt="Logo" />
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Typography variant="body1">Research</Typography>
            <Typography variant="body1">Products</Typography>
            <Typography variant="body1">Safety</Typography>
            <Typography variant="body1">Company</Typography>
          </Box>
          <Box component="img" src="https://placehold.co/24x24" alt="Search Icon" />
        </Toolbar>
      </AppBar>
      <Box sx={{ flex: 1, bgcolor: 'linear-gradient(135deg, #e66465, #9198e5)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', p: 4, color: 'white' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>ChatGPT on your desktop</Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>Chat about email, screenshots, files, and anything on your screen.</Typography>
        <Button variant="contained" sx={{ bgcolor: 'white', color: 'black' }}>Learn more</Button>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
        <Box component="span" sx={{ bgcolor: 'grey', width: 8, height: 8, borderRadius: '50%', mx: 1 }} />
        <Box component="span" sx={{ bgcolor: 'grey', width: 8, height: 8, borderRadius: '50%', mx: 1 }} />
        <Box component="span" sx={{ bgcolor: 'grey', width: 8, height: 8, borderRadius: '50%', mx: 1 }} />
      </Box>
    </Box>
  );
};

export default PreviewPage;