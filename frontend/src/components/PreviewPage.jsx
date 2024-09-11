import React from 'react';
import { Box, Typography, Stack, AppBar, Toolbar, Button, Card, CardContent, Grid, TextField, IconButton, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Menu as MenuIcon, ExpandMore as ExpandMoreIcon, Facebook, Twitter, Instagram } from '@mui/icons-material';

const PreviewPage = () => {
  const testimonials = [
    { name: 'John Doe', text: 'This startup changed my life!' },
    { name: 'Jane Smith', text: 'Incredible service and support.' },
    { name: 'Mike Johnson', text: 'I cannot recommend them enough.' },
  ];

  const faqs = [
    { question: 'What services do you offer?', answer: 'We offer a wide range of innovative solutions...' },
    { question: 'How can I get started?', answer: 'Getting started is easy! Simply sign up on our website...' },
    { question: 'What makes your startup unique?', answer: 'Our unique approach combines cutting-edge technology...' },
  ];

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            StartupLogo
          </Typography>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box sx={{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        padding: '4rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <Typography variant="h2" gutterBottom>
          Welcome to Our Startup
        </Typography>
        <Typography variant="h5">
          We're revolutionizing the industry with our innovative solutions.
        </Typography>
        <Button variant="contained" sx={{ mt: 4, backgroundColor: 'white', color: '#FE6B8B' }}>
          Learn More
        </Button>
      </Box>

      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          Our Features
        </Typography>
        <Grid container spacing={4}>
          {[1, 2, 3].map((item) => (
            <Grid item xs={12} md={4} key={item}>
              <Card>
                <CardContent>
                  <img src={`https://placehold.co/100x100?text=Feature ${item}`} alt={`Feature ${item} icon`} />
                  <Typography variant="h6" gutterBottom>
                    Feature {item}
                  </Typography>
                  <Typography>
                    Description of feature {item} and its benefits to users.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ backgroundColor: '#e0e0e0', p: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          What Our Customers Say
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="body1" gutterBottom>
                    "{testimonial.text}"
                  </Typography>
                  <Typography variant="subtitle2">
                    - {testimonial.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <Box sx={{
        backgroundColor: '#3f51b5',
        color: 'white',
        p: 4,
        textAlign: 'center'
      }}>
        <Typography variant="h5" gutterBottom>
          Special Offer!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Sign up now and get 3 months free on any plan.
        </Typography>
        <Button variant="contained" sx={{ mt: 2, backgroundColor: 'white', color: '#3f51b5' }}>
          Get Started
        </Button>
      </Box>

      <Box sx={{ backgroundColor: '#212121', color: 'white', p: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography>
              123 Startup Street, Silicon Valley, CA 94000
            </Typography>
            <Typography>
              Email: info@startup.com
            </Typography>
            <Typography>
              Phone: (123) 456-7890
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <IconButton color="inherit"><Facebook /></IconButton>
            <IconButton color="inherit"><Twitter /></IconButton>
            <IconButton color="inherit"><Instagram /></IconButton>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Newsletter
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Enter your email"
              fullWidth
              sx={{ backgroundColor: 'white' }}
            />
            <Button variant="contained" sx={{ mt: 2 }}>
              Subscribe
            </Button>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" sx={{ mt: 4 }}>
          © 2023 Our Startup. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default PreviewPage;