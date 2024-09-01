import React, { useState } from 'react';
import { Box, Typography, Button, Card, CardContent, Grid, Chip, Avatar, useTheme, useMediaQuery } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import StarIcon from '@mui/icons-material/Star';

const pricingPlans = [
  {
    title: 'Basic',
    price: '$9.99',
    features: ['1 User', '10 Projects', 'Basic Support', '1GB Storage'],
    buttonText: 'Get Started',
    color: '#4CAF50',
  },
  {
    title: 'Pro',
    price: '$29.99',
    features: ['5 Users', 'Unlimited Projects', 'Priority Support', '10GB Storage'],
    buttonText: 'Go Pro',
    highlighted: true,
    color: '#2196F3',
  },
  {
    title: 'Enterprise',
    price: '$99.99',
    features: ['Unlimited Users', 'Unlimited Projects', 'Dedicated Support', '100GB Storage'],
    buttonText: 'Contact Sales',
    color: '#9C27B0',
  },
];

const PricingPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [hoveredPlan, setHoveredPlan] = useState(null);

  return (
    <Box sx={{
      maxWidth: 1200,
      margin: 'auto',
      padding: 4,
      background: 'linear-gradient(45deg, #F3F4F6 30%, #E5E7EB 90%)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
      <Typography variant="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#1F2937' }}>
        Choose Your Perfect Plan
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}>
        Unlock your potential with our flexible pricing options. Find the ideal plan that suits your needs and scale as you grow.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {pricingPlans.map((plan, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card 
              elevation={plan.highlighted ? 8 : hoveredPlan === index ? 4 : 1}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transform: plan.highlighted ? 'scale(1.05)' : 'none',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: plan.highlighted ? 'scale(1.08)' : 'scale(1.03)',
                },
                borderRadius: 4,
                overflow: 'hidden',
              }}
            >
              <Box sx={{
                height: 8,
                backgroundColor: plan.color,
              }} />
              {plan.highlighted && (
                <Chip
                  icon={<StarIcon />}
                  label="Most Popular"
                  color="primary"
                  sx={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    fontWeight: 'bold',
                  }}
                />
              )}
              <CardContent sx={{ flexGrow: 1, p: 4 }}>
                <Typography variant="h4" component="div" gutterBottom sx={{ fontWeight: 'bold', color: plan.color }}>
                  {plan.title}
                </Typography>
                <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', my: 2 }}>
                  {plan.price}
                  <Typography variant="subtitle1" component="span" sx={{ verticalAlign: 'super', fontSize: '0.7em', ml: 0.5 }}>
                    /month
                  </Typography>
                </Typography>
                <Box sx={{ mt: 3 }}>
                  {plan.features.map((feature, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar sx={{ width: 24, height: 24, bgcolor: plan.color, mr: 2 }}>
                        <CheckIcon sx={{ fontSize: 16 }} />
                      </Avatar>
                      <Typography variant="body1">{feature}</Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
              <Box sx={{ p: 3, backgroundColor: '#F9FAFB' }}>
                <Button 
                  variant="contained" 
                  fullWidth
                  size="large"
                  sx={{
                    backgroundColor: plan.color,
                    '&:hover': {
                      backgroundColor: theme.palette.darken(plan.color, 0.1),
                    },
                    py: 1.5,
                  }}
                >
                  {plan.buttonText}
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="body1" color="text.secondary" sx={{ fontStyle: 'italic' }}>
          All plans include a 14-day risk-free trial. No credit card required.
        </Typography>
      </Box>
      {!isMobile && (
        <Box sx={{ position: 'absolute', bottom: 20, left: 20, opacity: 0.8 }}>
          <img src="https://placehold.co/200x100?text=Company+Logo" alt="Company logo" style={{ maxWidth: 150 }} />
        </Box>
      )}
    </Box>
  );
};

export default PricingPage;