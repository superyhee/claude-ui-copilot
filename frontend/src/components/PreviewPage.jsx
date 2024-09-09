import React from 'react';
import { Box, Typography, Stack, TextField, Button, Card, CardContent, CardMedia, Grid, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const PreviewPage = () => {
  return (
    <Box sx={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      <Box sx={{ backgroundColor: '#232f3e', color: 'white', p: 1 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">amazon</Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <LocationOnIcon />
            <Typography variant="body2">Delivering to Seattle 98121</Typography>
            <Typography variant="body2" sx={{ textDecoration: 'underline' }}>Update location</Typography>
          </Stack>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              size="small"
              placeholder="Search Amazon"
              sx={{ backgroundColor: 'white', width: 300 }}
              InputProps={{
                endAdornment: (
                  <Button sx={{ backgroundColor: '#febd69', height: '100%' }}>
                    <SearchIcon />
                  </Button>
                ),
              }}
            />
          </Box>
          <Stack direction="row" spacing={2}>
            <Typography variant="body2">Hello, sign in</Typography>
            <Typography variant="body2">Account & Lists</Typography>
            <Typography variant="body2">Returns & Orders</Typography>
            <Stack direction="row" alignItems="center">
              <ShoppingCartIcon />
              <Typography variant="body2">Cart</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      
      <Box sx={{ backgroundColor: '#232f3e', color: 'white', p: 1 }}>
        <Stack direction="row" spacing={2}>
          <Typography variant="body2">All</Typography>
          <Typography variant="body2">Medical Care</Typography>
          <Typography variant="body2">Best Sellers</Typography>
          <Typography variant="body2">Amazon Basics</Typography>
          <Typography variant="body2">Prime</Typography>
          <Typography variant="body2">New Releases</Typography>
          <Typography variant="body2">Today's Deals</Typography>
          <Typography variant="body2">Music</Typography>
          <Typography variant="body2">Groceries</Typography>
          <Typography variant="body2">Customer Service</Typography>
          <Typography variant="body2">Amazon Home</Typography>
          <Typography variant="body2">Registry</Typography>
          <Typography variant="body2">Books</Typography>
          <Typography variant="body2">Pharmacy</Typography>
          <Typography variant="body2">Gift Cards</Typography>
        </Stack>
      </Box>

      <Box sx={{ backgroundColor: '#ffdab9', p: 2, position: 'relative' }}>
        <IconButton sx={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)' }}>
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton sx={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)' }}>
          <ArrowForwardIosIcon />
        </IconButton>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={4}>
          <Box component="img" src="https://placehold.co/100x100" alt="Cow costume" />
          <Box component="img" src="https://placehold.co/100x100" alt="Cow ears" />
          <Typography variant="h4" fontWeight="bold">Halloween costumes starting at $10</Typography>
          <Box component="img" src="https://placehold.co/100x100" alt="Butterfly antenna" />
          <Box component="img" src="https://placehold.co/200x200" alt="Butterfly wings" />
        </Stack>
      </Box>

      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Last-minute dorm essentials</Typography>
              <Grid container spacing={1}>
                {['Storage & organization', 'Bedding', 'Bathroom', 'Decor'].map((item, index) => (
                  <Grid item xs={6} key={index}>
                    <CardMedia
                      component="img"
                      height="100"
                      image={`https://placehold.co/100x100?text=${item}`}
                      alt={item}
                    />
                    <Typography variant="body2">{item}</Typography>
                  </Grid>
                ))}
              </Grid>
              <Typography variant="body2" color="primary" sx={{ mt: 1 }}>Shop all dorm essentials</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Halloween finds under $50</Typography>
              <Grid container spacing={1}>
                {['Dress up', 'Indoor decorations', 'Outdoor decorations', 'Deals'].map((item, index) => (
                  <Grid item xs={6} key={index}>
                    <CardMedia
                      component="img"
                      height="100"
                      image={`https://placehold.co/100x100?text=${item}`}
                      alt={item}
                    />
                    <Typography variant="body2">{item}</Typography>
                  </Grid>
                ))}
              </Grid>
              <Typography variant="body2" color="primary" sx={{ mt: 1 }}>Shop more Halloween</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Our Top 100+ college finds</Typography>
              <Grid container spacing={1}>
                {['Dorm essentials', 'Fashion', 'Beauty & wellness', 'Bags & backpacks'].map((item, index) => (
                  <Grid item xs={6} key={index}>
                    <CardMedia
                      component="img"
                      height="100"
                      image={`https://placehold.co/100x100?text=${item}`}
                      alt={item}
                    />
                    <Typography variant="body2">{item}</Typography>
                  </Grid>
                ))}
              </Grid>
              <Typography variant="body2" color="primary" sx={{ mt: 1 }}>Shop Off to College</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6">Sign in for the best experience</Typography>
              <Button variant="contained" fullWidth sx={{ mt: 2, backgroundColor: '#ffd814', color: 'black' }}>
                Sign in securely
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="h6">Celebrate The Rings of Power with free games</Typography>
              <Button variant="contained" fullWidth sx={{ mt: 2, backgroundColor: '#48a3c6', color: 'white' }}>
                Explore now
              </Button>
              <Typography variant="body2" sx={{ mt: 1 }}>prime gaming</Typography>
              <CardMedia
                component="img"
                height="100"
                image="https://placehold.co/300x100?text=Game+Characters"
                alt="Game characters"
              />
              <Typography variant="body2" align="right">Sponsored</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>Best Sellers in Home & Kitchen</Typography>
        <Stack direction="row" spacing={2} sx={{ overflowX: 'auto' }}>
          {['Bedding', 'Water Bottle', 'Sheets', 'Mug', 'Shower Curtain', 'Picture Frame', 'Ant Bait', 'Pillow'].map((item, index) => (
            <Box key={index} sx={{ minWidth: 150 }}>
              <CardMedia
                component="img"
                height="150"
                image={`https://placehold.co/150x150?text=${item}`}
                alt={item}
              />
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default PreviewPage;