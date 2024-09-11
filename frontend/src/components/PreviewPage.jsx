import React, { useState } from 'react';
import { Box, Typography, Stack, AppBar, Toolbar, Button, Card, CardContent, CardMedia, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Badge } from '@mui/material';
import { ShoppingCart, Close } from '@mui/icons-material';

const coffeeProducts = [
  { id: 1, name: 'Espresso', price: 2.99, image: 'https://placehold.co/300x200?text=Espresso', description: 'Rich and bold espresso shot' },
  { id: 2, name: 'Latte', price: 3.99, image: 'https://placehold.co/300x200?text=Latte', description: 'Smooth espresso with steamed milk' },
  { id: 3, name: 'Cappuccino', price: 3.99, image: 'https://placehold.co/300x200?text=Cappuccino', description: 'Equal parts espresso, steamed milk, and foam' }
];

const CoffeePage = () => {
  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const handleOpenCart = () => {
    setOpenCart(true);
  };

  const handleCloseCart = () => {
    setOpenCart(false);
  };

  return (
    <Box sx={{ backgroundColor: '#FFF8E1', minHeight: '100vh' }}>
      <AppBar position="static" sx={{ backgroundColor: '#795548' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cozy Coffee Shop
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Menu</Button>
          <Button color="inherit">About</Button>
          <IconButton color="inherit" onClick={handleOpenCart}>
            <Badge badgeContent={cart.length} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 4 }}>
        <Stack spacing={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ maxWidth: '50%' }}>
              <Typography variant="h3" gutterBottom>Welcome to Our Coffee Haven</Typography>
              <Typography variant="body1">
                Discover the perfect blend of tradition and innovation in every cup. Our passion for coffee is reflected in every bean we source and every brew we serve.
              </Typography>
            </Box>
            <Box component="img" src="https://placehold.co/600x400?text=Cozy+Coffee+Shop" alt="Cozy coffee shop interior" sx={{ maxWidth: '45%', borderRadius: 2 }} />
          </Box>

          <Box>
            <Typography variant="h4" gutterBottom>Our Signature Brews</Typography>
            <Stack direction="row" spacing={3} justifyContent="center">
              {coffeeProducts.map((product) => (
                <Card key={product.id} sx={{ maxWidth: 345, backgroundColor: '#FFECB3' }}>
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
                    <Button variant="contained" sx={{ mt: 2, backgroundColor: '#795548' }} onClick={() => addToCart(product)}>
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Box>

          <Box sx={{ backgroundColor: '#D7CCC8', p: 4, borderRadius: 2 }}>
            <Typography variant="h4" gutterBottom>Limited Time Offer</Typography>
            <Typography variant="body1">
              Join our loyalty program and get your 10th coffee for free! Plus, enjoy exclusive member-only discounts on our specialty brews.
            </Typography>
            <Button variant="contained" sx={{ mt: 2, backgroundColor: '#795548' }}>
              Join Now
            </Button>
          </Box>
        </Stack>
      </Box>

      <Box component="footer" sx={{ backgroundColor: '#795548', color: 'white', p: 4, mt: 4 }}>
        <Typography variant="h6" gutterBottom>Cozy Coffee Shop</Typography>
        <Typography variant="body2">123 Coffee Street, Brew City, BC 12345</Typography>
        <Typography variant="body2">Phone: (123) 456-7890</Typography>
        <Typography variant="body2">Email: info@cozycoffeeshop.com</Typography>
        <Typography variant="body2" sx={{ mt: 2 }}>© 2023 Cozy Coffee Shop. All rights reserved.</Typography>
      </Box>

      <Dialog open={openCart} onClose={handleCloseCart}>
        <DialogTitle>
          Your Cart
          <IconButton
            aria-label="close"
            onClick={handleCloseCart}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {cart.length === 0 ? (
            <Typography>Your cart is empty</Typography>
          ) : (
            cart.map((item, index) => (
              <Box key={index} sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography>{item.name} - ${item.price.toFixed(2)}</Typography>
                <Button onClick={() => removeFromCart(item.id)} color="secondary">Remove</Button>
              </Box>
            ))
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCart} color="primary">
            Close
          </Button>
          {cart.length > 0 && (
            <Button onClick={handleCloseCart} color="primary" variant="contained">
              Checkout
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CoffeePage;