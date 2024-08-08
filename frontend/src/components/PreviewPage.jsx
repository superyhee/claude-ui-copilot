import React from 'react';
import { Box, Typography, AppBar, Toolbar, Button, Container, Grid, Card, CardContent, CardMedia, TextField } from '@mui/material';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
});

const HeroSection = styled(Box)({
  backgroundImage: 'url(https://placehold.co/1200x600?text=AI+Technology)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '60vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  textAlign: 'center',
});

const FeatureCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: '0.3s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
  },
});

const PreviewPage = () => {
  return (
    <Box>
      <StyledAppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AI SaaS Co.
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </StyledAppBar>

      <HeroSection>
        <Container>
          <Typography variant="h2" gutterBottom>
            Revolutionize Your Business with AI
          </Typography>
          <Typography variant="h5" paragraph>
            Harness the power of artificial intelligence to drive growth and innovation
          </Typography>
          <Button variant="contained" size="large" sx={{ mt: 2 }}>
            Get Started
          </Button>
        </Container>
      </HeroSection>

      <Container sx={{ my: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Our Features
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {[
            { title: 'Smart Analytics', description: 'Gain insights from your data with our AI-powered analytics', image: 'https://placehold.co/300x200?text=Analytics' },
            { title: 'Predictive Modeling', description: 'Forecast trends and make data-driven decisions', image: 'https://placehold.co/300x200?text=Predictive+Modeling' },
            { title: 'Natural Language Processing', description: 'Understand and generate human-like text', image: 'https://placehold.co/300x200?text=NLP' },
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <FeatureCard>
                <CardMedia
                  component="img"
                  height="140"
                  image={feature.image}
                  alt={feature.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="sm">
          <Typography variant="h3" align="center" gutterBottom>
            Contact Us
          </Typography>
          <form noValidate autoComplete="off">
            <TextField fullWidth label="Name" margin="normal" />
            <TextField fullWidth label="Email" margin="normal" />
            <TextField fullWidth label="Message" margin="normal" multiline rows={4} />
            <Button variant="contained" color="primary" fullWidth size="large" sx={{ mt: 2 }}>
              Send Message
            </Button>
          </form>
        </Container>
      </Box>

      <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            © 2023 AI SaaS Co. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default PreviewPage;