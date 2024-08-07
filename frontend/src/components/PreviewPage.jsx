import React from 'react';
import { Box, Typography, Stack, AppBar, Toolbar, Button, Card, CardContent, Grid, TextField, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore, Star, CheckCircle, Person } from '@mui/icons-material';

const LandingPage = () => {
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
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            StartupLogo
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ 
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: 'white',
        padding: '4rem',
        textAlign: 'center'
      }}>
        <Typography variant="h2" gutterBottom>
          Revolutionize Your Business
        </Typography>
        <Typography variant="h5">
          Our startup provides cutting-edge solutions to streamline your operations
        </Typography>
        <Button variant="contained" sx={{ mt: 4, backgroundColor: 'white', color: '#FE6B8B' }}>
          Get Started
        </Button>
      </Box>

      <Box sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Key Features
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item key={index} xs={12} sm={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {feature.icon} {feature.title}
                  </Typography>
                  <Typography variant="body2">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ bgcolor: '#f5f5f5', py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          What Our Customers Say
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {testimonials.map((testimonial, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="body1" paragraph>
                    "{testimonial.comment}"
                  </Typography>
                  <Typography variant="subtitle2" align="right">
                    - {testimonial.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <Box sx={{ 
        bgcolor: '#3f51b5', 
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
        <Button variant="contained" color="secondary">
          Claim Offer
        </Button>
      </Box>

      <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Typography variant="body2" color="text.secondary" align="center">
          © 2023 StartupName. All rights reserved.
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          Privacy Policy | Terms of Service | Contact Us
        </Typography>
      </Box>
    </Box>
  );
};

export default LandingPage;