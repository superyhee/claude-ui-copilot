import React, { useState, useEffect } from 'react';
import { Box, Typography, Stack, AppBar, Toolbar, Button, Card, CardContent, CardMedia, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction, TextField, Snackbar, Alert, Grid, Drawer, Divider, Menu, MenuItem } from '@mui/material';
import { ShoppingCart, Delete, Menu as MenuIcon, AccountCircle, Notifications, Search, ArrowDropDown } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useForm, Controller } from 'react-hook-form';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

const products = [
  { id: 1, name: 'Premium Coffee Blend', price: 15.99, image: 'https://placehold.co/300x200?text=Premium+Coffee', description: 'Our signature premium coffee blend' },
  { id: 2, name: 'Organic Green Tea', price: 12.99, image: 'https://placehold.co/300x200?text=Green+Tea', description: 'Refreshing organic green tea' },
  { id: 3, name: 'Espresso Machine', price: 299.99, image: 'https://placehold.co/300x200?text=Espresso+Machine', description: 'Professional-grade espresso machine' },
  { id: 4, name: 'Coffee Grinder', price: 49.99, image: 'https://placehold.co/300x200?text=Coffee+Grinder', description: 'Adjustable burr coffee grinder' },
];

const salesData = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 5000 },
  { name: 'Apr', sales: 4500 },
  { name: 'May', sales: 6000 },
  { name: 'Jun', sales: 5500 },
];

const EnterpriseShopPage = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const { control, handleSubmit, reset } = useForm();

  const addToCart = (product) => {
    setCart([...cart, product]);
    setSnackbar({ open: true, message: 'Product added to cart', severity: 'success' });
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
    setSnackbar({ open: true, message: 'Product removed from cart', severity: 'info' });
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleSnackbarClose = () => setSnackbar({ ...snackbar, open: false });

  const onSubmit = (data) => {
    console.log(data);
    setSnackbar({ open: true, message: 'Form submitted successfully', severity: 'success' });
    reset();
  };

  useEffect(() => {
    // Simulating data fetching
    const fetchData = async () => {
      // Fetch products, sales data, etc.
    };
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, backgroundColor: 'background.default', minHeight: '100vh' }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Enterprise Coffee Solutions
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              InputProps={{
                startAdornment: <Search />,
              }}
              sx={{ mr: 2, backgroundColor: 'white', borderRadius: 1 }}
            />
            <IconButton color="inherit">
              <Notifications />
            </IconButton>
            <IconButton color="inherit" onClick={openCart}>
              <ShoppingCart />
            </IconButton>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <AccountCircle />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>My account</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>

        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
          <Box sx={{ width: 250 }} role="presentation">
            <List>
              <ListItem button>
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Products" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Orders" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Customers" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Analytics" />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button>
                <ListItemText primary="Settings" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Help" />
              </ListItem>
            </List>
          </Box>
        </Drawer>

        <Box sx={{ p: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>Dashboard</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>Sales Overview</Typography>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="sales" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>Quick Actions</Typography>
                  <Stack spacing={2}>
                    <Button variant="contained" startIcon={<ShoppingCart />}>
                      New Order
                    </Button>
                    <Button variant="outlined" startIcon={<ArrowDropDown />}>
                      Generate Report
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom>Featured Products</Typography>
              <Grid container spacing={3}>
                {products.map((product) => (
                  <Grid item key={product.id} xs={12} sm={6} md={3}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="140"
                        image={product.image}
                        alt={product.name}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
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
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>Contact Us</Typography>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={2}>
                      <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Name is required' }}
                        render={({ field, fieldState: { error } }) => (
                          <TextField
                            {...field}
                            label="Name"
                            fullWidth
                            error={!!error}
                            helperText={error?.message}
                          />
                        )}
                      />
                      <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } }}
                        render={({ field, fieldState: { error } }) => (
                          <TextField
                            {...field}
                            label="Email"
                            fullWidth
                            error={!!error}
                            helperText={error?.message}
                          />
                        )}
                      />
                      <Controller
                        name="message"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Message is required' }}
                        render={({ field, fieldState: { error } }) => (
                          <TextField
                            {...field}
                            label="Message"
                            multiline
                            rows={4}
                            fullWidth
                            error={!!error}
                            helperText={error?.message}
                          />
                        )}
                      />
                      <Button type="submit" variant="contained" color="primary">
                        Send Message
                      </Button>
                    </Stack>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
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

        <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleSnackbarClose}>
          <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: '100%' }}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
};

export default EnterpriseShopPage;