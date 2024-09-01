import React, { useState } from 'react';
import { Box, Typography, Stack, Drawer, List, ListItem, ListItemIcon, ListItemText, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { Spa, ContentCut, Brush, ColorLens, LocalOffer } from '@mui/icons-material';

const drawerWidth = 240;

const sidebarItems = [
  { text: 'Haircuts', icon: <ContentCut /> },
  { text: 'Coloring', icon: <ColorLens /> },
  { text: 'Styling', icon: <Brush /> },
  { text: 'Spa Services', icon: <Spa /> },
  { text: 'Special Offers', icon: <LocalOffer /> },
];

const services = [
  { id: 1, name: 'Mens Haircut', price: '$30', image: 'https://placehold.co/300x200?text=Mens+Haircut' },
  { id: 2, name: 'Womens Haircut', price: '$45', image: 'https://placehold.co/300x200?text=Womens+Haircut' },
  { id: 3, name: 'Hair Coloring', price: '$80', image: 'https://placehold.co/300x200?text=Hair+Coloring' },
  { id: 4, name: 'Hair Styling', price: '$55', image: 'https://placehold.co/300x200?text=Hair+Styling' },
  { id: 5, name: 'Facial Treatment', price: '$70', image: 'https://placehold.co/300x200?text=Facial+Treatment' },
  { id: 6, name: 'Manicure', price: '$25', image: 'https://placehold.co/300x200?text=Manicure' },
];

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Haircuts');

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <List>
          {sidebarItems.map((item) => (
            <ListItem
              button
              key={item.text}
              selected={selectedCategory === item.text}
              onClick={() => setSelectedCategory(item.text)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          {selectedCategory}
        </Typography>
        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={service.image}
                  alt={service.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {service.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.price}
                  </Typography>
                  <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ShopPage;