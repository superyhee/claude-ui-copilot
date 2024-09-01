import React from 'react';
import { Box, Typography, AppBar, Toolbar, Button, Container, Grid, Card, CardContent, Avatar, Accordion, AccordionSummary, AccordionDetails, TextField } from '@mui/material';
import { ExpandMore, Star, CheckCircle, Group } from '@mui/icons-material';

const LandingPage = () => {
  const features = [
    { title: 'Innovation', description: 'Cutting-edge technology solutions', icon: <Star /> },
    { title: 'Reliability', description: '99.9% uptime guarantee', icon: <CheckCircle /> },
    { title: 'Support', description: '24/7 customer assistance', icon: <Group /> },
  ];

  const testimonials = [
    { name: 'John Doe', company: 'Tech Co', content: 'Amazing service! Highly recommended.' },
    { name: 'Jane Smith', company: 'Innovate Inc', content: 'Transformed our business processes.' },
  ];

  const faqs = [
    { question: 'What services do you offer?', answer: 'We offer a wide range of innovative tech solutions.' },
    { question: 'How can I get started?', answer: 'Simply contact our sales team for a personalized demo.' },
  ];

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TechStartup
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ 
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <Container>
          <Typography variant="h2" gutterBottom>
            Revolutionize Your Business
          </Typography>
          <Typography variant="h5">
            Innovative solutions for the digital age
          </Typography>
        </Container>
      </Box>

      <Container sx={{ my: 8 }}>
        <Typography variant="h4" gutterBottom align="center">
          Our Features
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card>
                <CardContent>
                  <Avatar sx={{ bgcolor: 'secondary.main', mb: 2 }}>
                    {feature.icon}
                  </Avatar>
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
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
                      "{testimonial.content}"
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

      <Container sx={{ my: 8 }}>
        <Typography variant="h4" gutterBottom align="center">
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

      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 4 }}>
        <Container>
          <Typography variant="h5" gutterBottom align="center">
            Ready to Transform Your Business?
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button variant="contained" color="secondary">
              Get Started Now
            </Button>
          </Box>
        </Container>
      </Box>

      <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="space-between">
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2">
                123 Tech Street<br />
                San Francisco, CA 94122<br />
                Email: info@techstartup.com<br />
                Phone: (123) 456-7890
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Quick Links
              </Typography>
              <Typography variant="body2">
                <Button color="inherit">About Us</Button><br />
                <Button color="inherit">Services</Button><br />
                <Button color="inherit">Careers</Button><br />
                <Button color="inherit">Contact</Button>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Newsletter
              </Typography>
              <TextField
                label="Email Address"
                variant="outlined"
                fullWidth
                margin="normal"
                size="small"
              />
              <Button variant="contained" color="primary">
                Subscribe
              </Button>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Typography variant="body2" align="center">
              © 2023 TechStartup. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;