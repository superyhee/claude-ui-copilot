import React from 'react';
import { Box, Typography, Button, AppBar, Toolbar, Container, Grid, Card, CardContent, Accordion, AccordionSummary, AccordionDetails, TextField } from '@mui/material';
import { styled } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const GradientBackground = styled(Box)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  color: 'white',
  padding: '4rem 0',
});

const FeatureIcon = styled(Box)({
  fontSize: '3rem',
  marginBottom: '1rem',
});

const testimonials = [
  { name: 'John Doe', text: 'Great service! Highly recommended.' },
  { name: 'Jane Smith', text: 'Innovative solutions that really work.' },
];

const faqs = [
  { question: 'What services do you offer?', answer: 'We offer a range of innovative solutions for startups.' },
  { question: 'How can I get started?', answer: 'Contact us for a free consultation to discuss your needs.' },
];

const LandingPage = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            StartupLogo
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>

      <GradientBackground>
        <Container>
          <Typography variant="h2" gutterBottom>
            Innovate. Grow. Succeed.
          </Typography>
          <Typography variant="h5" paragraph>
            We help startups transform ideas into successful businesses.
          </Typography>
          <Button variant="contained" size="large">
            Get Started
          </Button>
        </Container>
      </GradientBackground>

      <Container sx={{ my: 8 }}>
        <Typography variant="h4" gutterBottom align="center">
          Our Features
        </Typography>
        <Grid container spacing={4}>
          {['Innovative Solutions', 'Expert Guidance', 'Scalable Technology'].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card>
                <CardContent>
                  <FeatureIcon>
                    <StarIcon fontSize="inherit" />
                  </FeatureIcon>
                  <Typography variant="h6" gutterBottom>
                    {feature}
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ bgcolor: '#f5f5f5', py: 8 }}>
        <Container>
          <Typography variant="h4" gutterBottom align="center">
            What Our Clients Say
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="body1" paragraph>
                      "{testimonial.text}"
                    </Typography>
                    <Typography variant="subtitle1">- {testimonial.name}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container sx={{ my: 8 }}>
        <Typography variant="h4" gutterBottom align="center">
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>

      <GradientBackground>
        <Container>
          <Typography variant="h4" gutterBottom align="center">
            Ready to Take Your Startup to the Next Level?
          </Typography>
          <Typography variant="h6" paragraph align="center">
            Sign up now and get 30% off your first month!
          </Typography>
          <Box display="flex" justifyContent="center">
            <Button variant="contained" size="large" sx={{ bgcolor: 'white', color: 'primary.main' }}>
              Sign Up Now
            </Button>
          </Box>
        </Container>
      </GradientBackground>

      <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2">
                We are a startup dedicated to helping other startups succeed.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2">
                <PhoneIcon fontSize="small" /> +1 234 567 8900
              </Typography>
              <Typography variant="body2">
                <EmailIcon fontSize="small" /> info@startuphub.com
              </Typography>
              <Typography variant="body2">
                <LocationOnIcon fontSize="small" /> 123 Startup Street, SV 12345
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Stay Connected
              </Typography>
              <TextField
                fullWidth
                label="Enter your email"
                variant="outlined"
                size="small"
                sx={{ mb: 2 }}
              />
              <Button variant="contained">Subscribe</Button>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Typography variant="body2" align="center">
              © 2023 StartupHub. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;