import React from 'react';
import { Box, Typography, Button, Stack, Card, CardMedia, CardContent, Grid, Container, AppBar, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const products = [
  {
    id: 1,
    title: 'Video Generation Service',
    description: 'Our AI-powered video generation service allows you to create high-quality videos effortlessly.',
    imageUrl: 'https://placehold.co/300x200?text=Video+Generation+Service',
  },
  {
    id: 2,
    title: 'Custom Video Templates',
    description: 'Customize our pre-designed video templates to match your brand identity and style.',
    imageUrl: 'https://placehold.co/300x200?text=Custom+Video+Templates',
  },
  {
    id: 3,
    title: 'Video Analytics',
    description: 'Get valuable insights into your video performance with our comprehensive analytics tools.',
    imageUrl: 'https://placehold.co/300x200?text=Video+Analytics',
  },
];

const services = [
  {
    id: 1,
    title: 'Video Editing',
    description: 'Our expert video editors can help you polish your videos to perfection.',
    imageUrl: 'https://placehold.co/300x200?text=Video+Editing',
  },
  {
    id: 2,
    title: 'Voiceover Services',
    description: 'Add professional voiceovers to your videos in various languages and accents.',
    imageUrl: 'https://placehold.co/300x200?text=Voiceover+Services',
  },
  {
    id: 3,
    title: 'Video Optimization',
    description: 'Optimize your videos for better performance and higher engagement across platforms.',
    imageUrl: 'https://placehold.co/300x200?text=Video+Optimization',
  },
];

const contactInfo = {
  address: '123 Main Street, Videoville USA',
  phone: '555-555-5555',
  email: 'contact@videogeneration.com',
};

const about = {
  description: 'At VideoGeneration Inc., we believe in the power of video to connect, educate, and inspire. Our cutting-edge AI technology and expert team enable businesses to create stunning videos that captivate their audience and drive engagement.',
  imageUrl: 'https://placehold.co/600x400?text=About+VideoGeneration+Inc.',
};

const chartData = [
  { name: 'Jan', value: 100 },
  { name: 'Feb', value: 150 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 180 },
  { name: 'May', value: 250 },
  { name: 'Jun', value: 220 },
  { name: 'Jul', value: 280 },
];

const PreviewPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      <AppBar position="static" sx={{ bgcolor: '#999999' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            VideoGeneration Inc.
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 4, bgcolor: '#ebebeb', flexGrow: 1 }}>
        <Stack alignItems="center" spacing={2}>
          <Typography variant="h5" color="#333333">
            AI-Powered Video Generation
          </Typography>
          <Button variant="contained" color="primary">Get Started</Button>
        </Stack>
        <Grid container spacing={2} justifyContent="center" marginTop={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={isMobile ? 12 : 6} md={4}>
              <Card sx={{ bgcolor: '#ffffff', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.imageUrl}
                  alt={`Image for ${product.title}`}
                />
                <CardContent>
                  <Typography variant="h6" color="#333333">{product.title}</Typography>
                  <Typography variant="body2" color="#666666">{product.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" color="#333333" align="center">
            Additional Services
          </Typography>
          <Grid container spacing={2} justifyContent="center" marginTop={2}>
            {services.map((service) => (
              <Grid item key={service.id} xs={12} sm={6} md={4}>
                <Card sx={{ bgcolor: '#ffffff', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={service.imageUrl}
                    alt={`Image for ${service.title}`}
                  />
                  <CardContent>
                    <Typography variant="h6" color="#333333">{service.title}</Typography>
                    <Typography variant="body2" color="#666666">{service.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" color="#333333" align="center">
            Contact Us
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="body1" color="#666666">
              Address: {contactInfo.address}
            </Typography>
            <Typography variant="body1" color="#666666">
              Phone: {contactInfo.phone}
            </Typography>
            <Typography variant="body1" color="#666666">
              Email: {contactInfo.email}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" color="#333333" align="center">
            About VideoGeneration Inc.
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CardMedia
              component="img"
              image={about.imageUrl}
              alt="About VideoGeneration Inc. Image"
              sx={{ maxWidth: '600px' }}
            />
            <Typography variant="body1" color="#666666" sx={{ mt: 2 }}>
              {about.description}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" color="#333333" align="center">
            Video Generation Trends
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Box>
      <Box component="footer" sx={{ bgcolor: '#ebebeb', py: 2 }}>
        <Container maxWidth="sm">
          <Typography variant="body1" align="center" color="#333333">
            © {new Date().getFullYear()} VideoGeneration Inc. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default PreviewPage;