import React from 'react';
import { Box, Typography, AppBar, Toolbar, Button, Container, Grid, Card, CardContent, CardMedia, Accordion, AccordionSummary, AccordionDetails, TextField, IconButton } from '@mui/material';
import { ExpandMore, Star, CheckCircle, Email, Phone, Facebook, Twitter, Instagram } from '@mui/icons-material';

const LandingPage = () => {
  const features = [
    { title: 'Innovative Solutions', description: 'Cutting-edge technology to solve modern problems', icon: 'https://placehold.co/100x100?text=Innovation' },
    { title: 'Expert Team', description: 'Highly skilled professionals dedicated to your success', icon: 'https://placehold.co/100x100?text=Team' },
    { title: 'Customer-Centric', description: 'Your satisfaction is our top priority', icon: 'https://placehold.co/100x100?text=Customer' },
  ];

  const testimonials = [
    { name: 'John Doe', company: 'Tech Co', text: 'This startup has transformed our business operations.' },
    { name: 'Jane Smith', company: 'Innovate Inc', text: 'Incredible service and support. Highly recommended!' },
  ];

  const faqs = [
    { question: 'What services do you offer?', answer: 'We offer a wide range of innovative solutions tailored to your business needs.' },
    { question: 'How can I get started?', answer: 'Contact our team for a free consultation to discuss your requirements.' },
  ];

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            StartupX
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ 
        backgroundImage: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: 'white',
        padding: '100px 0',
        textAlign: 'center'
      }}>
        <Typography variant="h2" gutterBottom>
          Revolutionize Your Business
        </Typography>
        <Typography variant="h5">
          Cutting-edge solutions for the modern enterprise
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Features
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={feature.icon}
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
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ backgroundColor: '#f5f5f5', py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom>
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
                    <Typography variant="subtitle1">
                      {testimonial.name}, {testimonial.company}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ my: 8 }}>
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
      </Container>

      <Box sx={{ 
        backgroundColor: '#1976d2',
        color: 'white',
        py: 4,
        textAlign: 'center'
      }}>
        <Container>
          <Typography variant="h4" gutterBottom>
            Ready to Get Started?
          </Typography>
          <Typography variant="subtitle1" paragraph>
            Join the thousands of businesses that have already revolutionized their operations with us.
          </Typography>
          <Button variant="contained" color="secondary" size="large">
            Contact Us Now
          </Button>
        </Container>
      </Box>

      <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="space-between">
            <Grid item xs={12} md={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We are a leading startup dedicated to providing innovative solutions for businesses worldwide.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                123 Innovation Street, Tech City, 12345
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: info@startupx.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Phone: +1 (123) 456-7890
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Follow Us
              </Typography>
              <IconButton color="inherit">
                <Facebook />
              </IconButton>
              <IconButton color="inherit">
                <Twitter />
              </IconButton>
              <IconButton color="inherit">
                <Instagram />
              </IconButton>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Typography variant="body2" color="text.secondary" align="center">
              © 2023 StartupX. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;