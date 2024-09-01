import React, { useState } from 'react';
import { Box, Typography, AppBar, Toolbar, Button, Container, Grid, Card, CardContent, Avatar, Accordion, AccordionSummary, AccordionDetails, TextField, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import { ExpandMore, Star, CheckCircle, Group, Menu, Dashboard, Business, PeopleAlt, BarChart, Settings, ExitToApp } from '@mui/icons-material';

const LandingPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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

  const recentProjects = [
    { name: 'Project Alpha', client: 'Global Corp', status: 'Completed' },
    { name: 'Project Beta', client: 'Tech Innovators', status: 'In Progress' },
    { name: 'Project Gamma', client: 'Future Systems', status: 'Planning' },
  ];

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {['Dashboard', 'Projects', 'Clients', 'Analytics', 'Settings'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0 ? <Dashboard /> : 
               index === 1 ? <Business /> :
               index === 2 ? <PeopleAlt /> :
               index === 3 ? <BarChart /> :
               <Settings />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          {isMobile && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer}
            >
              <Menu />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EnterpriseX
          </Typography>
          {!isMobile && (
            <>
              <Button color="inherit">Solutions</Button>
              <Button color="inherit">Services</Button>
              <Button color="inherit">Industries</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Contact</Button>
            </>
          )}
          <Button color="inherit" startIcon={<ExitToApp />}>Login</Button>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
      >
        {drawerContent}
      </Drawer>

      <Box sx={{ 
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <Container>
          <Typography variant="h2" gutterBottom>
            Enterprise Solutions for the Digital Age
          </Typography>
          <Typography variant="h5" gutterBottom>
            Transforming businesses with cutting-edge technology
          </Typography>
          <Button variant="contained" color="secondary" size="large" sx={{ mt: 2 }}>
            Schedule a Consultation
          </Button>
        </Container>
      </Box>

      <Container sx={{ my: 8 }}>
        <Typography variant="h4" gutterBottom align="center">
          Our Core Competencies
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card raised>
                <CardContent>
                  <Avatar sx={{ bgcolor: 'primary.main', mb: 2, width: 56, height: 56 }}>
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
            Client Success Stories
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card raised>
                  <CardContent>
                    <Typography variant="body1" paragraph>
                      "{testimonial.content}"
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
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
          Recent Projects
        </Typography>
        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Project Name</TableCell>
                <TableCell>Client</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {recentProjects.map((project, index) => (
                <TableRow key={index}>
                  <TableCell>{project.name}</TableCell>
                  <TableCell>{project.client}</TableCell>
                  <TableCell>{project.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

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

      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
        <Container>
          <Typography variant="h4" gutterBottom align="center">
            Ready to Elevate Your Enterprise?
          </Typography>
          <Typography variant="h6" paragraph align="center">
            Let's discuss how we can drive your digital transformation
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button variant="contained" color="secondary" size="large">
              Request a Demo
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
                1234 Enterprise Ave<br />
                New York, NY 10001<br />
                Email: info@enterprisex.com<br />
                Phone: (555) 123-4567
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Quick Links
              </Typography>
              <Typography variant="body2">
                <Button color="inherit">About Us</Button><br />
                <Button color="inherit">Services</Button><br />
                <Button color="inherit">Case Studies</Button><br />
                <Button color="inherit">Careers</Button>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" gutterBottom>
                Stay Updated
              </Typography>
              <TextField
                label="Email Address"
                variant="outlined"
                fullWidth
                margin="normal"
                size="small"
              />
              <Button variant="contained" color="primary">
                Subscribe to Newsletter
              </Button>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Typography variant="body2" align="center">
              © 2023 EnterpriseX. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;