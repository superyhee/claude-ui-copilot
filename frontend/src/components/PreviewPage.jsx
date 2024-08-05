import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const PreviewPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Blog Post 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://placehold.co/400x300/000/fff?text=Blog+Image+1',
    },
    {
      id: 2,
      title: 'Blog Post 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'https://placehold.co/400x300/000/fff?text=Blog+Image+2',
    },
    {
      id: 3,
      title: 'Blog Post 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      imageUrl: 'https://placehold.co/400x300/000/fff?text=Blog+Image+3',
    },
    {
      id: 4,
      title: 'Blog Post 4',
      description: 'Nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'https://placehold.co/400x300/000/fff?text=Blog+Image+4',
    },
  ];

  return (
    <Box sx={{ p: 4, backgroundColor: '#000000', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4" sx={{ color: '#ffffff', mb: 4, textAlign: 'center' }}>
        Blog
      </Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ flexGrow: 1 }}>
        {blogPosts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card sx={{ maxWidth: 400, margin: 'auto' }}>
              <CardMedia
                component="img"
                height="200"
                image={post.imageUrl}
                alt={`Blog Image ${post.id}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PreviewPage;