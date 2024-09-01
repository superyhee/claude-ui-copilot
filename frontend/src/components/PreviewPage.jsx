import React, { useState } from 'react';
import { Box, Typography, Stack, AppBar, Toolbar, Button, Card, CardContent, CardMedia, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
import { ShoppingCart, Delete } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8B4513',
    },
    secondary: {
      main: '#D2691E',
    },
    background: {
      default: '#FFF8DC',
    },
  },
});

const products = [
  { id: 1, name: 'Espresso', price: 3.5, image: 'https://placehold.co/300x200?text=Espresso', description: 'Rich and bold espresso shot' },
  { id: 2, name: 'Cappuccino', price: 4.5, image: 'https://placehold.co/300x200?text=Cappuccino', description: 'Espresso with steamed milk and foam' },
  { id: 3, name: 'Latte', price: 4, image: 'https://placehold.co/300x200?text=Latte', description: 'Espresso with lots of steamed milk' },
];

const CoffeeShopPage = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, backgroundColor: 'background.default', minHeight: '100vh' }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Cozy Coffee Corner
            </Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Menu</Button>
            <Button color="inherit">About</Button>
            <IconButton color="inherit" onClick={openCart}>
              <ShoppingCart />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Box sx={{ p: 4 }}>
          <Stack spacing={4}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography variant="h2" gutterBottom>Welcome to Cozy Coffee Corner</Typography>
              <Typography variant="h5">Where every sip tells a story</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4 }}>
              <Box sx={{ maxWidth: '50%' }}>
                <img src="https://placehold.co/600x400?text=Cozy+Coffee+Shop" alt="Cozy coffee shop interior" style={{ width: '100%', borderRadius: '8px' }} />
              </Box>
              <Box sx={{ maxWidth: '50%' }}>
                <Typography variant="body1" paragraph>
                  At Cozy Coffee Corner, we believe in the art of coffee making. Our passion for quality beans and expert brewing techniques creates an unforgettable experience with every cup.
                </Typography>
                <Typography variant="body1">
                  Join us in our warm, inviting space where community meets craftsmanship, and discover the perfect blend to start your day or unwind in the afternoon.
                </Typography>
              </Box>
            </Box>

            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mt: 4 }}>Our Signature Drinks</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
              {products.map((product) => (
                <Card key={product.id} sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 2 }}>
                      ${product.price.toFixed(2)}
                    </Typography>
                    <Button variant="contained" color="primary" onClick={() => addToCart(product)} sx={{ mt: 2 }}>
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </Box>

            <Box sx={{ bgcolor: 'secondary.main', color: 'white', p: 4, borderRadius: '8px', mt: 4 }}>
              <Typography variant="h4" gutterBottom>Special Offer</Typography>
              <Typography variant="body1">
                Join our loyalty program today and get your 10th coffee free! Plus, enjoy exclusive member-only discounts and early access to seasonal specials.
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Sign Up Now
              </Button>
            </Box>
          </Stack>
        </Box>

        <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', p: 4, mt: 4 }}>
          <Typography variant="h6" gutterBottom>Cozy Coffee Corner</Typography>
          <Typography variant="body2">123 Brew Street, Coffee Town, CT 12345</Typography>
          <Typography variant="body2">Phone: (555) 123-4567</Typography>
          <Typography variant="body2">Email: info@cozycoffeecorner.com</Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>© 2023 Cozy Coffee Corner. All rights reserved.</Typography>
        </Box>

        <Dialog open={isCartOpen} onClose={closeCart}>
          <DialogTitle>Your Shopping Cart</DialogTitle>
          <DialogContent>
            <List>
              {cart.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText primary={item.name} secondary={`$${item.price.toFixed(2)}`} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={() => removeFromCart(item.id)}>
                      <Delete />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
            {cart.length === 0 && <Typography>Your cart is empty</Typography>}
          </DialogContent>
          <DialogActions>
            <Button onClick={closeCart}>Close</Button>
            {cart.length > 0 && <Button variant="contained" color="primary">Checkout</Button>}
          </DialogActions>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
};

export default CoffeeShopPage;