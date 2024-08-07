import React, { useState } from 'react';
import { AppBar, Box, Button, Card, CardContent, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, IconButton, Link, List, ListItem, ListItemText, Stack, Toolbar, Typography } from '@mui/material';
import { ShoppingCart, Add, Remove, Close } from '@mui/icons-material';

const CoffeeShopPage = () => {
  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  const products = [
    { id: 1, name: 'Espresso', price: 2.99, image: 'https://placehold.co/300x200?text=Espresso' },
    { id: 2, name: 'Cappuccino', price: 3.99, image: 'https://placehold.co/300x200?text=Cappuccino' },
    { id: 3, name: 'Latte', price: 4.99, image: 'https://placehold.co/300x200?text=Latte' },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const handleOpenCart = () => setOpenCart(true);
  const handleCloseCart = () => setOpenCart(false);

  return (
    <Box sx={{ backgroundColor: '#F3E5F5', minHeight: '100vh' }}>
      <AppBar position="static" sx={{ backgroundColor: '#6A1B9A' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Pacifico, cursive' }}>
            Cozy Coffee Corner
          </Typography>
          <Button color="inherit" component={Link} href="#home">Home</Button>
          <Button color="inherit" component={Link} href="#products">Products</Button>
          <Button color="inherit" component={Link} href="#about">About</Button>
          <IconButton color="inherit" onClick={handleOpenCart}>
            <ShoppingCart />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box id="home" sx={{ backgroundImage: 'url(https://placehold.co/1200x600?text=Coffee+Shop+Hero)', backgroundSize: 'cover', height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h2" sx={{ color: '#FFFFFF', textAlign: 'center', textShadow: '2px 2px 4px rgba(0,0,0,0.5)', fontFamily: 'Pacifico, cursive' }}>
          Welcome to Cozy Coffee Corner
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#4A148C', fontFamily: 'Roboto Slab, serif' }}>Our Philosophy</Typography>
        <Typography variant="body1" paragraph sx={{ color: '#4A148C' }}>
          At Cozy Coffee Corner, we believe in crafting the perfect cup of coffee with love and care. Our beans are ethically sourced and roasted to perfection, ensuring a rich and flavorful experience with every sip.
        </Typography>

        <Box id="products" sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ color: '#4A148C', fontFamily: 'Roboto Slab, serif' }}>Our Products</Typography>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item xs={12} sm={4} key={product.id}>
                <Card sx={{ backgroundColor: '#E1BEE7', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: '#4A148C' }}>
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ${product.price.toFixed(2)}
                    </Typography>
                    <Button onClick={() => addToCart(product)} startIcon={<Add />} sx={{ mt: 2, backgroundColor: '#8E24AA', color: 'white', '&:hover': { backgroundColor: '#6A1B9A' } }}>
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ my: 4, backgroundColor: '#CE93D8', p: 3, borderRadius: 2 }}>
          <Typography variant="h5" gutterBottom sx={{ color: '#4A148C' }}>Special Offer!</Typography>
          <Typography variant="body1" sx={{ color: '#4A148C' }}>
            Buy any two drinks and get a free pastry of your choice. Limited time offer!
          </Typography>
        </Box>

        <Box id="about" sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ color: '#4A148C', fontFamily: 'Roboto Slab, serif' }}>About Us</Typography>
          <Typography variant="body1" paragraph sx={{ color: '#4A148C' }}>
            Cozy Coffee Corner has been serving the community for over a decade. Our passion for great coffee and warm hospitality keeps our customers coming back for more.
          </Typography>
        </Box>
      </Container>

      <Box component="footer" sx={{ backgroundColor: '#6A1B9A', color: 'white', p: 4, mt: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom>Contact Us</Typography>
              <Typography variant="body2">123 Coffee Street, Beantown, CT 12345</Typography>
              <Typography variant="body2">Phone: (555) 123-4567</Typography>
              <Typography variant="body2">Email: info@cozycoffeecorner.com</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom>Hours</Typography>
              <Typography variant="body2">Monday - Friday: 6am - 8pm</Typography>
              <Typography variant="body2">Saturday - Sunday: 7am - 9pm</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom>Policies</Typography>
              <Link href="#" color="inherit">Privacy Policy</Link>
              <br />
              <Link href="#" color="inherit">Terms of Service</Link>
            </Grid>
          </Grid>
          <Typography variant="body2" sx={{ mt: 2 }}>
            © 2023 Cozy Coffee Corner. All rights reserved.
          </Typography>
        </Container>
      </Box>

      <Dialog open={openCart} onClose={handleCloseCart}>
        <DialogTitle sx={{ backgroundColor: '#6A1B9A', color: 'white' }}>Your Shopping Cart</DialogTitle>
        <DialogContent>
          {cart.length === 0 ? (
            <Typography>Your cart is empty.</Typography>
          ) : (
            <List>
              {cart.map((item, index) => (
                <ListItem key={index} secondaryAction={
                  <IconButton edge="end" aria-label="delete" onClick={() => removeFromCart(item.id)}>
                    <Remove />
                  </IconButton>
                }>
                  <ListItemText primary={item.name} secondary={`$${item.price.toFixed(2)}`} />
                </ListItem>
              ))}
            </List>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCart} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CoffeeShopPage;