import React, { useState } from 'react';
import { Box, Typography, Stack, Grid, Card, CardContent, CardMedia, Button, AppBar, Toolbar, IconButton, Badge } from '@mui/material';
import { ShoppingCart as ShoppingCartIcon, Menu as MenuIcon } from '@mui/icons-material';

const flowerData = [
  { id: 1, name: 'Rose Bouquet', price: 29.99, image: 'https://placehold.co/300x200?text=Rose+Bouquet' },
  { id: 2, name: 'Tulip Arrangement', price: 24.99, image: 'https://placehold.co/300x200?text=Tulip+Arrangement' },
  { id: 3, name: 'Sunflower Bunch', price: 19.99, image: 'https://placehold.co/300x200?text=Sunflower+Bunch' },
  { id: 4, name: 'Orchid Plant', price: 39.99, image: 'https://placehold.co/300x200?text=Orchid+Plant' },
];

const FlowerShop = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (flower) => {
    setCartItems([...cartItems, flower]);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blooming Bliss Flower Shop
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={cartItems.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 4, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
        <Typography variant="h4" gutterBottom align="center">
          Welcome to Blooming Bliss
        </Typography>
        <Typography variant="subtitle1" gutterBottom align="center">
          Discover our beautiful flower arrangements
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {flowerData.map((flower) => (
            <Grid item xs={12} sm={6} md={3} key={flower.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={flower.image}
                  alt={flower.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {flower.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ${flower.price.toFixed(2)}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    onClick={() => addToCart(flower)}
                  >
                    Add to Cart
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

export default FlowerShop;