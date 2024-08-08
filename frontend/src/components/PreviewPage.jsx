import React, { useState, useEffect } from 'react';
import { Box, Typography, Stack, Grid, Button, Card, CardContent, CardActions, CardMedia, TextField, AppBar, Toolbar, IconButton, Badge, Drawer, List, ListItem, ListItemText } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

const ProductCard = ({ product, addToCart }) => (
  <Card>
    <CardMedia
      component="img"
      height="140"
      image={`https://placehold.co/300x200?text=${product.name}`}
      alt={product.name}
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
        {product.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        ${product.price.toFixed(2)}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={() => addToCart(product)}>Add to Cart</Button>
    </CardActions>
  </Card>
);

const ECommerceWebsite = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Mock fetching products
    const mockProducts = [
      { id: 1, name: 'Product 1', price: 19.99 },
      { id: 2, name: 'Product 2', price: 29.99 },
      { id: 3, name: 'Product 3', price: 39.99 },
      { id: 4, name: 'Product 4', price: 49.99 },
    ];
    setProducts(mockProducts);
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-Commerce Store
          </Typography>
          <IconButton color="inherit" onClick={() => setIsCartOpen(true)}>
            <Badge badgeContent={cart.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 4 }}>
        <Grid container spacing={4}>
          {products.map(product => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} addToCart={addToCart} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Drawer anchor="right" open={isCartOpen} onClose={() => setIsCartOpen(false)}>
        <Box sx={{ width: 300, p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Shopping Cart
          </Typography>
          <List>
            {cart.map((item, index) => (
              <ListItem key={index} secondaryAction={
                <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
              }>
                <ListItemText primary={item.name} secondary={`$${item.price.toFixed(2)}`} />
              </ListItem>
            ))}
          </List>
          <Typography variant="h6">
            Total: ${totalPrice.toFixed(2)}
          </Typography>
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Checkout
          </Button>
        </Box>
      </Drawer>

      <Drawer anchor="left" open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <List>
            {['Home', 'Products', 'About', 'Contact'].map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default ECommerceWebsite;