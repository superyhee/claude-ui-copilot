import React from 'react';
import { Box, Typography, Stack, AppBar, Toolbar, Button, Card, CardContent, Grid, TextField, Accordion, AccordionSummary, AccordionDetails, useMediaQuery, useTheme } from '@mui/material';
import { ExpandMore, Star, CheckCircle, Person } from '@mui/icons-material';

const LandingPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const features = [
    { title: 'Easy to Use', description: 'Our platform is designed with simplicity in mind.', icon: <Star /> },
    { title: 'Secure', description: 'Your data is protected with state-of-the-art encryption.', icon: <CheckCircle /> },
    { title: '24/7 Support', description: 'Our team is always here to help you.', icon: <Person /> },
  ];

  const testimonials = [
    { name: 'John Doe', comment: 'This startup has revolutionized our workflow!' },
    { name: 'Jane Smith', comment: 'Incredible service and support. Highly recommended!' },
  ];

  const faqs = [
    { question: 'What makes your startup unique?', answer: 'Our innovative approach and customer-centric focus set us apart.' },
    { question: 'How do I get started?', answer: 'Simply sign up on our website and follow the easy onboarding process.' },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#2c3e50' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            StartupLogo
          </Typography>
          {!isMobile && (
            <>
              <Button color="inherit">Home</Button>
              <Button color="inherit">Features</Button>
              <Button color="inherit">Pricing</Button>
              <Button color="inherit">Contact</Button>
            </>
          )}
          {isMobile && (
            <Button color="inherit">Menu</Button>
          )}
        </Toolbar>
      </AppBar>

      <Box sx={{ 
        background: 'linear-gradient(45deg, #3498db 30%, #2980b9 90%)',
        color: 'white',
        padding: isMobile ? '2rem' : '4rem',
        textAlign: 'center'
      }}>
        <Typography variant={isMobile ? 'h3' : 'h2'} gutterBottom>
          Revolutionize Your Business
        </Typography>
        <Typography variant={isMobile ? 'body1' : 'h5'}>
          Our startup provides cutting-edge solutions to streamline your operations
        </Typography>
        <Button variant="contained" sx={{ mt: 4, backgroundColor: '#e74c3c', color: 'white', '&:hover': { backgroundColor: '#c0392b' } }}>
          Get Started
        </Button>
      </Box>

      <Box sx={{ py: 8, backgroundColor: '#ecf0f1' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Key Features
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card sx={{ backgroundColor: '#fff', transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 3 } }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ color: '#2c3e50' }}>
                    {feature.icon} {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ bgcolor: '#34495e', py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: 'white' }}>
          What Our Customers Say
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {testimonials.map((testimonial, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card sx={{ backgroundColor: '#fff', transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 3 } }}>
                <CardContent>
                  <Typography variant="body1" paragraph sx={{ color: '#2c3e50' }}>
                    "{testimonial.comment}"
                  </Typography>
                  <Typography variant="subtitle2" align="right" sx={{ color: '#7f8c8d' }}>
                    - {testimonial.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ py: 8, backgroundColor: '#ecf0f1' }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: '#2c3e50' }}>
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{ backgroundColor: '#fff', '&:hover': { backgroundColor: '#f7f9f9' } }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6" sx={{ color: '#2c3e50' }}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: '#7f8c8d' }}>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <Box sx={{ 
        bgcolor: '#e74c3c', 
        color: 'white', 
        py: 4,
        textAlign: 'center'
      }}>
        <Typography variant="h5" gutterBottom>
          Limited Time Offer!
        </Typography>
        <Typography variant="body1" paragraph>
          Sign up now and get 3 months free on any plan
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: '#2c3e50', '&:hover': { backgroundColor: '#34495e' } }}>
          Claim Offer
        </Button>
      </Box>

      <Box component="footer" sx={{ bgcolor: '#2c3e50', py: 6 }}>
        <Typography variant="body2" color="white" align="center">
          © 2023 StartupName. All rights reserved.
        </Typography>
        <Typography variant="body2" color="white" align="center">
          Privacy Policy | Terms of Service | Contact Us
        </Typography>
      </Box>
    </Box>
  );
};

export default LandingPage;