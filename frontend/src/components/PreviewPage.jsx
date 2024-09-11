import React, { useState } from 'react';
import { Box, Typography, Stack, AppBar, Toolbar, Button, Card, CardContent, Grid, TextField, IconButton, Accordion, AccordionSummary, AccordionDetails, Drawer, List, ListItem, ListItemText, Container, Paper, Chip } from '@mui/material';
import { Menu as MenuIcon, ExpandMore as ExpandMoreIcon, Facebook, Twitter, Instagram, ArrowForward, Close } from '@mui/icons-material';

const PreviewPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const testimonials = [
    { name: 'John Doe', text: 'This startup changed my life!', avatar: 'https://placehold.co/50x50?text=JD' },
    { name: 'Jane Smith', text: 'Incredible service and support.', avatar: 'https://placehold.co/50x50?text=JS' },
    { name: 'Mike Johnson', text: 'I cannot recommend them enough.', avatar: 'https://placehold.co/50x50?text=MJ' },
  ];

  const faqs = [
    { question: 'What services do you offer?', answer: 'We offer a wide range of innovative solutions...' },
    { question: 'How can I get started?', answer: 'Getting started is easy! Simply sign up on our website...' },
    { question: 'What makes your startup unique?', answer: 'Our unique approach combines cutting-edge technology...' },
  ];

  const features = [
    { title: 'Innovative Technology', description: 'Cutting-edge solutions for modern problems', icon: 'https://placehold.co/80x80?text=Tech' },
    { title: 'User-Friendly Interface', description: 'Intuitive design for seamless user experience', icon: 'https://placehold.co/80x80?text=UI' },
    { title: '24/7 Support', description: 'Round-the-clock assistance for our valued customers', icon: 'https://placehold.co/80x80?text=Support' },
  ];

  return (
    <Box sx={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', color: '#1a73e8' }}>
              StartupLogo
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              {['Home', 'Features', 'Testimonials', 'FAQ', 'Contact'].map((item) => (
                <Button key={item} sx={{ color: '#333', mx: 1 }}>{item}</Button>
              ))}
            </Box>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ display: { md: 'none' } }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <IconButton sx={{ mb: 2 }} onClick={() => setDrawerOpen(false)}>
            <Close />
          </IconButton>
          <List>
            {['Home', 'Features', 'Testimonials', 'FAQ', 'Contact'].map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box sx={{
        background: 'linear-gradient(45deg, #1a73e8 30%, #8e24aa 90%)',
        padding: '8rem 2rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <Container maxWidth="md">
          <Typography variant="h2" gutterBottom fontWeight="bold">
            Revolutionize Your Business
          </Typography>
          <Typography variant="h5" paragraph>
            Empower your startup with our innovative solutions and take your business to new heights.
          </Typography>
          <Button variant="contained" size="large" endIcon={<ArrowForward />}
            sx={{ mt: 4, backgroundColor: 'white', color: '#1a73e8', '&:hover': { backgroundColor: '#f5f5f5' } }}>
            Get Started
          </Button>
        </Container>
      </Box>

      <Container sx={{ my: 8 }}>
        <Typography variant="h4" gutterBottom align="center" fontWeight="bold" color="#333">
          Our Features
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper elevation={3} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: '0.3s', '&:hover': { transform: 'translateY(-5px)' } }}>
                <img src={feature.icon} alt={`${feature.title} icon`} style={{ width: 80, height: 80, marginBottom: 16 }} />
                <Typography variant="h6" gutterBottom align="center" fontWeight="bold">
                  {feature.title}
                </Typography>
                <Typography align="center">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ backgroundColor: '#f0f4f8', py: 8 }}>
        <Container>
          <Typography variant="h4" gutterBottom align="center" fontWeight="bold" color="#333">
            What Our Customers Say
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <CardContent>
                    <Typography variant="body1" paragraph>
                      "{testimonial.text}"
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <img src={testimonial.avatar} alt={`${testimonial.name}'s avatar`} style={{ width: 50, height: 50, borderRadius: '50%', marginRight: 16 }} />
                      <Typography variant="subtitle1" fontWeight="bold">
                        {testimonial.name}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container sx={{ my: 8 }}>
        <Typography variant="h4" gutterBottom align="center" fontWeight="bold" color="#333">
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="bold">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>

      <Box sx={{
        backgroundColor: '#1a73e8',
        color: 'white',
        py: 6,
        textAlign: 'center'
      }}>
        <Container>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            Ready to Get Started?
          </Typography>
          <Typography variant="h6" paragraph>
            Join thousands of satisfied customers and transform your business today.
          </Typography>
          <Button variant="contained" size="large" 
            sx={{ mt: 2, backgroundColor: 'white', color: '#1a73e8', '&:hover': { backgroundColor: '#f5f5f5' } }}>
            Sign Up Now
          </Button>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: '#212121', color: 'white', py: 6 }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Contact Us
              </Typography>
              <Typography paragraph>
                123 Startup Street, Silicon Valley, CA 94000
              </Typography>
              <Typography paragraph>
                Email: info@startup.com
              </Typography>
              <Typography>
                Phone: (123) 456-7890
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Follow Us
              </Typography>
              <IconButton color="inherit"><Facebook /></IconButton>
              <IconButton color="inherit"><Twitter /></IconButton>
              <IconButton color="inherit"><Instagram /></IconButton>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Newsletter
              </Typography>
              <TextField
                variant="outlined"
                placeholder="Enter your email"
                fullWidth
                sx={{ backgroundColor: 'white', mb: 2 }}
              />
              <Button variant="contained" fullWidth>
                Subscribe
              </Button>
            </Grid>
          </Grid>
          <Typography variant="body2" align="center" sx={{ mt: 4 }}>
            © 2023 Our Startup. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default PreviewPage;