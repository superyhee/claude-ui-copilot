import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { SvgIcon } from '@mui/material';

const SaasIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
  </SvgIcon>
);

const PreviewPage = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: '#f0f8ff', height: '100%' }}>
      <Stack alignItems="center" spacing={3}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <SaasIcon sx={{ fontSize: 60, color: '#1976d2' }} />
          <Typography variant="h4" fontWeight="bold" color="#1976d2">SaasFlow</Typography>
        </Box>
        <Typography variant="h6" color="#333">Streamline Your Business with SaaS</Typography>
        <Typography variant="body1" align="center" maxWidth={600} color="#555">
          SaasFlow is your all-in-one solution for managing and optimizing your business processes. 
          Our cutting-edge SaaS platform empowers you to boost productivity, enhance collaboration, 
          and drive growth in the digital age.
        </Typography>
        <Box 
          component="img" 
          src="https://placehold.co/600x400/1976d2/ffffff?text=SaasFlow+Dashboard" 
          alt="SaasFlow dashboard mockup showing various analytics and management tools"
          sx={{ maxWidth: '100%', height: 'auto', borderRadius: 2, boxShadow: 3 }}
        />
      </Stack>
    </Box>
  );
};

export default PreviewPage;