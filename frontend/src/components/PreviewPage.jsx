import React from 'react';
import { Box, Typography, Stack, Container, Grid, Button, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const LandingPage = () => {
  const features = [
    {
      icon: <img src="https://placehold.co/64x64" alt="Feature 1 Icon" />,
      title: 'Feature 1',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    },
    {
      icon: <img src="https://placehold.co/64x64" alt="Feature 2 Icon" />,
      title: 'Feature 2',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    },
    {
      icon: <img src="https://placehold.co/64x64" alt="Feature 3 Icon" />,
      title: 'Feature 3',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    }
  ];

  const testimonials = [
    {
      avatar: <img src="https://placehold.co/64x64" alt="Testimonial Avatar" />,
      name: 'John Doe',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      avatar: <img src="https://placehold.co/64x64" alt="Testimonial Avatar" />,
      name: 'Jane Smith',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];

  const faqs = [
    {
      question: 'What is your startup about?',
      answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    },
    {
      question: 'How do I get started?',
      answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    },
    {
      question: 'What are the pricing plans?',
      answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    }
  ];

  return (
    <Box>
      {/* Header */}
      <Box sx={{ py: 2, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Container maxWidth="lg">
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <Typography variant="h6" component="div">
                {/* Logo */}
                <img src="https://placehold.co/120x40" alt="Company Logo" />
              </Typography>
            </Grid>
            <Grid item xs>
              <Stack direction="row" spacing={2} justifyContent="flex-end">
                {/* Navigation */}
                <Button variant="text" color="inherit">Home</Button>
                <Button variant="text" color="inherit">Features</Button>
                <Button variant="text" color="inherit">Pricing</Button>
                <Button variant="text" color="inherit">Contact</Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Hero */}
      <Box
        sx={{
          py: 12,
          bgcolor: 'background.paper',
          backgroundImage: 'linear-gradient(to bottom right, #007bff, #6610f2)',
          color: 'primary.contrastText'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" align="center" gutterBottom>
            Welcome to Our Startup
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>
            We offer innovative solutions to help you achieve your goals.
          </Typography>
          <Stack alignItems="center" spacing={2}>
            <Button variant="contained" color="primary">Get Started</Button>
          </Stack>
        </Container>
      </Box>

      {/* Features */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            Key Features
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardMedia>
                    {feature.icon}
                  </CardMedia>
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
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
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            What People Say
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card>
                  <CardContent>
                    <Stack direction="row" spacing={2} alignItems="center">
                      {testimonial.avatar}
                      <Typography variant="h6" component="h3">
                        {testimonial.name}
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color="textSecondary">
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
      <Box sx={{ py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            Frequently Asked Questions
          </Typography>
          {faqs.map((faq, index) => (
            <Card key={index} sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  {faq.question}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {faq.answer}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Container>
      </Box>

      {/* Banner */}
      <Box sx={{ py: 8, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            Limited Time Offer
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>
            Get 50% off our premium plan for the first 3 months.
          </Typography>
          <Stack alignItems="center" spacing={2}>
            <Button variant="contained" color="secondary">Sign Up Now</Button>
          </Stack>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ py: 4, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" component="h3" gutterBottom>
                Company
              </Typography>
              <Typography variant="body2" color="textSecondary">
                About Us
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Careers
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Blog
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" component="h3" gutterBottom>
                Resources
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Documentation
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Tutorials
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Support
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" component="h3" gutterBottom>
                Legal
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Privacy Policy
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Terms of Use
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" component="h3" gutterBottom>
                Follow Us
              </Typography>
              <Stack direction="row" spacing={1}>
                <IconButton color="primary">
                  <FaFacebook />
                </IconButton>
                <IconButton color="primary">
                  <FaTwitter />
                </IconButton>
                <IconButton color="primary">
                  <FaInstagram />
                </IconButton>
                <IconButton color="primary">
                  <FaYoutube />
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;