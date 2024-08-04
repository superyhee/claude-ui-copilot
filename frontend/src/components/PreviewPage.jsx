import React from 'react';
import { Box, Typography, Stack, Container, Grid, Button, Card, CardContent, CardMedia, Avatar, Divider, IconButton } from '@mui/material';
import { FaLaptopCode, FaChartLine, FaRocket, FaQuestionCircle } from 'react-icons/fa';
import { FiMail, FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';

const LandingPage = () => {
  const features = [
    { icon: <FaLaptopCode size={32} />, title: 'Feature 1', description: 'Powerful coding capabilities' },
    { icon: <FaChartLine size={32} />, title: 'Feature 2', description: 'Advanced analytics and reporting' },
    { icon: <FaRocket size={32} />, title: 'Feature 3', description: 'Accelerate your business growth' },
  ];

  const testimonials = [
    { avatar: <Avatar alt="User 1">U1</Avatar>, name: 'User 1', quote: 'This startup is amazing! It has transformed my business.' },
    { avatar: <Avatar alt="User 2">U2</Avatar>, name: 'User 2', quote: 'I highly recommend this startup to anyone looking for a powerful solution.' },
    { avatar: <Avatar alt="User 3">U3</Avatar>, name: 'User 3', quote: 'The support team is incredibly responsive and helpful.' },
  ];

  const faqs = [
    { question: 'What is this startup about?', answer: 'This startup provides innovative solutions to help businesses grow and succeed.' },
    { question: 'How much does it cost?', answer: 'We offer flexible pricing plans to fit your needs and budget.' },
    { question: 'Do you offer customer support?', answer: 'Yes, we have a dedicated support team available to assist you.' },
  ];

  return (
    <Box>
      {/* Header */}
      <Box sx={{ py: 2, bgcolor: 'primary.main', color: 'common.white' }}>
        <Container maxWidth="lg">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" component="div">
              Startup Logo
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button color="inherit">Home</Button>
              <Button color="inherit">Features</Button>
              <Button color="inherit">Pricing</Button>
              <Button color="inherit">Contact</Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Hero */}
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h1" gutterBottom>
                Welcome to Our Startup
              </Typography>
              <Typography variant="body1" gutterBottom>
                Discover the power of our innovative solutions and unlock your business potential.
              </Typography>
              <Button variant="contained" color="primary">
                Learn More
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  backgroundImage: 'linear-gradient(to right, #6a11cb, #2575fc)',
                  borderRadius: '50%',
                  p: 4,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <CardMedia
                  component="img"
                  alt="Hero Image"
                  image="https://placehold.co/400x400"
                  sx={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            Key Features
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card>
                  <CardContent>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box sx={{ bgcolor: 'primary.main', color: 'common.white', borderRadius: '50%', p: 2 }}>
                        {feature.icon}
                      </Box>
                      <Typography variant="h6" component="h3">
                        {feature.title}
                      </Typography>
                    </Stack>
                    <Typography variant="body1" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Social Proof */}
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            What Our Customers Say
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card>
                  <CardContent>
                    <Stack direction="row" spacing={2} alignItems="center">
                      {testimonial.avatar}
                      <Typography variant="subtitle1" component="div">
                        {testimonial.name}
                      </Typography>
                    </Stack>
                    <Typography variant="body1" color="text.secondary">
                      {testimonial.quote}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FAQ */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            Frequently Asked Questions
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {faqs.map((faq, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card>
                  <CardContent>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <FaQuestionCircle size={24} />
                      <Typography variant="h6" component="h3">
                        {faq.question}
                      </Typography>
                    </Stack>
                    <Typography variant="body1" color="text.secondary">
                      {faq.answer}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Banner */}
      <Box sx={{ py: 8, bgcolor: 'primary.main', color: 'common.white' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            Unlock Your Business Potential
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            Get started with our powerful solutions and take your business to new heights.
          </Typography>
          <Box display="flex" justifyContent="center">
            <Button variant="contained" color="inherit">
              Get Started
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ py: 4, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" component="h3" gutterBottom>
                Startup Logo
              </Typography>
              <Typography variant="body1" gutterBottom>
                We are dedicated to providing innovative solutions to help businesses grow and succeed.
              </Typography>
              <Stack direction="row" spacing={2}>
                <IconButton aria-label="Twitter">
                  <FiTwitter />
                </IconButton>
                <IconButton aria-label="Facebook">
                  <FiFacebook />
                </IconButton>
                <IconButton aria-label="Instagram">
                  <FiInstagram />
                </IconButton>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" component="h3" gutterBottom>
                Quick Links
              </Typography>
              <Stack spacing={1}>
                <Button>Home</Button>
                <Button>Features</Button>
                <Button>Pricing</Button>
                <Button>Contact</Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" component="h3" gutterBottom>
                Contact Us
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body1">
                  <FiMail style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
                  contact@startup.com
                </Typography>
                <Typography variant="body1">
                  123 Main Street
                  <br />
                  City, State 12345
                  <br />
                  USA
                </Typography>
              </Stack>
            </Grid>
          </Grid>
          <Divider sx={{ my: 4 }} />
          <Typography variant="body2" color="text.secondary" align="center">
            &copy; {new Date().getFullYear()} Startup. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;