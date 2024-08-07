import React, { useState } from 'react';
import { Box, Typography, Button, AppBar, Toolbar, Container, Grid, Card, CardContent, Accordion, AccordionSummary, AccordionDetails, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { styled } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const GradientBackground = styled(Box)({
  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  color: 'white',
  padding: '4rem 0',
});

const FeatureIcon = styled(Box)({
  fontSize: '3rem',
  marginBottom: '1rem',
  color: '#2196F3',
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
  const [openLogin, setOpenLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOpenLogin = () => {
    setOpenLogin(true);
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  const handleLogin = () => {
    // Mock login functionality
    console.log('Login with:', email, password);
    handleCloseLogin();
  };

  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: '#1565C0' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            StartupLogo
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit" onClick={handleOpenLogin}>Login</Button>
        </Toolbar>
      </AppBar>

      <Dialog open={openLogin} onClose={handleCloseLogin}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLogin}>Cancel</Button>
          <Button onClick={handleLogin}>Login</Button>
        </DialogActions>
      </Dialog>

      <GradientBackground>
        <Container>
          <Typography variant="h2" gutterBottom>
            Innovate. Grow. Succeed.
          </Typography>
          <Typography variant="h5" paragraph>
            We help startups transform ideas into successful businesses.
          </Typography>
          <Button variant="contained" size="large" sx={{ backgroundColor: '#FFFFFF', color: '#2196F3' }}>
            Get Started
          </Button>
        </Container>
      </GradientBackground>

      <Container sx={{ my: 8 }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ color: '#1565C0' }}>
          Our Features
        </Typography>
        <Grid container spacing={4}>
          {['Innovative Solutions', 'Expert Guidance', 'Scalable Technology'].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
                <CardContent>
                  <FeatureIcon>
                    <StarIcon fontSize="inherit" />
                  </FeatureIcon>
                  <Typography variant="h6" gutterBottom sx={{ color: '#1565C0' }}>
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

      <Box sx={{ bgcolor: '#E3F2FD', py: 8 }}>
        <Container>
          <Typography variant="h4" gutterBottom align="center" sx={{ color: '#1565C0' }}>
            What Our Clients Say
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
                  <CardContent>
                    <Typography variant="body1" paragraph>
                      "{testimonial.text}"
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: '#1565C0' }}>- {testimonial.name}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container sx={{ my: 8 }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ color: '#1565C0' }}>
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" sx={{ color: '#1565C0' }}>{faq.question}</Typography>
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
            <Button variant="contained" size="large" sx={{ bgcolor: 'white', color: '#2196F3' }}>
              Sign Up Now
            </Button>
          </Box>
        </Container>
      </GradientBackground>

      <Box component="footer" sx={{ bgcolor: '#1565C0', color: 'white', py: 6 }}>
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
                sx={{ mb: 2, backgroundColor: 'white' }}
              />
              <Button variant="contained" sx={{ backgroundColor: '#FFFFFF', color: '#2196F3' }}>Subscribe</Button>
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