import React from 'react';
import { AppBar, Toolbar, Typography, Box, Container, Grid, Paper, Icon } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CampaignIcon from '@mui/icons-material/Campaign';
import GroupIcon from '@mui/icons-material/Group';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import CheckIcon from '@mui/icons-material/Check';

const LandingPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" elevation={1}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            MY LANDING PAGE
          </Typography>
          <Box>
            {['FEATURES', 'ABOUT', 'SERVICES', 'GALLERY', 'TESTIMONIALS'].map((item) => (
              <Typography key={item} component="span" sx={{ ml: 2, color: '#666', fontSize: '0.9rem' }}>
                {item}
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        <Box sx={{ my: 8 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
            FEATURES
          </Typography>
          <Box sx={{ width: '40px', height: '3px', bgcolor: '#3f51b5', mx: 'auto', mb: 4 }} />
          
          <Grid container spacing={4} justifyContent="center">
            {[
              { icon: <ChatIcon />, title: 'Lorem ipsum' },
              { icon: <CampaignIcon />, title: 'Lorem ipsum' },
              { icon: <GroupIcon />, title: 'Lorem ipsum' },
              { icon: <AutoFixHighIcon />, title: 'Lorem ipsum' },
            ].map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper elevation={0} sx={{ textAlign: 'center', p: 2, bgcolor: 'transparent' }}>
                  <Icon component="div" sx={{ fontSize: 60, color: '#3f51b5', bgcolor: '#e8eaf6', borderRadius: '50%', p: 2, mb: 2 }}>
                    {feature.icon}
                  </Icon>
                  <Typography variant="h6" gutterBottom>{feature.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ my: 8 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <img src="https://placehold.co/600x400" alt="Workshop interior" style={{ width: '100%', height: 'auto' }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                ABOUT US
              </Typography>
              <Box sx={{ width: '40px', height: '3px', bgcolor: '#3f51b5', mb: 2 }} />
              <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mt: 2 }}>
                Why Choose Us?
              </Typography>
              <Grid container spacing={2}>
                {[
                  'Lorem ipsum dolor', 'Tempor incididunt', 'Lorem ipsum dolor', 'Incididunt ut labore',
                  'Aliquip ex ea commodo', 'Lorem ipsum dolor', 'Exercitation ullamco', 'Lorem ipsum dolor'
                ].map((item, index) => (
                  <Grid item xs={6} key={index}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <CheckIcon sx={{ color: '#3f51b5', mr: 1 }} />
                      <Typography variant="body2">{item}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;