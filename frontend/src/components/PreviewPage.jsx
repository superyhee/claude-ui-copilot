import React from 'react';
import { Box, Typography, Button, Card, CardContent, Grid } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const pricingPlans = [
  {
    title: 'Basic',
    price: '$9.99',
    features: ['1 User', '10 Projects', 'Basic Support', '1GB Storage'],
    buttonText: 'Get Started',
  },
  {
    title: 'Pro',
    price: '$29.99',
    features: ['5 Users', 'Unlimited Projects', 'Priority Support', '10GB Storage'],
    buttonText: 'Go Pro',
    highlighted: true,
  },
  {
    title: 'Enterprise',
    price: '$99.99',
    features: ['Unlimited Users', 'Unlimited Projects', 'Dedicated Support', '100GB Storage'],
    buttonText: 'Contact Sales',
  },
];

const PricingPage = () => {
  return (
    <Box sx={{ maxWidth: 1200, margin: 'auto', padding: 4 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Choose Your Plan
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 6 }}>
        Select the perfect plan for your needs. Upgrade or downgrade at any time.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {pricingPlans.map((plan, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card 
              elevation={plan.highlighted ? 8 : 2}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transform: plan.highlighted ? 'scale(1.05)' : 'none',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-10px)',
                },
              }}
            >
              {plan.highlighted && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: -15,
                    right: -15,
                    backgroundColor: 'primary.main',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                  }}
                >
                  Most Popular
                </Box>
              )}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="div" gutterBottom>
                  {plan.title}
                </Typography>
                <Typography variant="h3" color="primary.main" gutterBottom>
                  {plan.price}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  per month
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {plan.features.map((feature, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <CheckIcon sx={{ color: 'success.main', mr: 1 }} />
                      <Typography variant="body2">{feature}</Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
              <Box sx={{ p: 2 }}>
                <Button 
                  variant={plan.highlighted ? "contained" : "outlined"} 
                  color="primary" 
                  fullWidth
                >
                  {plan.buttonText}
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="body1" color="text.secondary">
          All plans include a 14-day free trial. No credit card required.
        </Typography>
      </Box>
    </Box>
  );
};

export default PricingPage;