import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Stack, Menu, MenuItem } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const PreviewPage = () => {
  const [language, setLanguage] = useState('English');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    handleClose();
  };

  const translations = {
    English: {
      vehicles: 'Vehicles',
      energy: 'Energy',
      charging: 'Charging',
      discover: 'Discover',
      shop: 'Shop',
      modelY: 'Model Y',
      leaseInfo: 'Lease starting at $399/mo*',
      customOrder: 'Custom Order',
      demoDrive: 'Demo Drive',
      disclaimer: '*Excludes taxes and fees with price subject to change. Available in select states.',
    },
    中文: {
      vehicles: '车辆',
      energy: '能源',
      charging: '充电',
      discover: '探索',
      shop: '商店',
      modelY: 'Model Y',
      leaseInfo: '租赁起价 $399/月*',
      customOrder: '定制订单',
      demoDrive: '预约试驾',
      disclaimer: '*不包括税费，价格可能会发生变化。仅在特定州提供。',
    },
  };

  const t = translations[language];

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'black' }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
            TESLA
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Button color="inherit" sx={{ color: 'white' }}>{t.vehicles}</Button>
            <Button color="inherit" sx={{ color: 'white' }}>{t.energy}</Button>
            <Button color="inherit" sx={{ color: 'white' }}>{t.charging}</Button>
            <Button color="inherit" sx={{ color: 'white' }}>{t.discover}</Button>
            <Button color="inherit" sx={{ color: 'white' }}>{t.shop}</Button>
          </Box>
          <Box sx={{ display: 'flex', gap: 1, ml: 2 }}>
            <IconButton color="inherit" sx={{ color: 'white' }}>
              <HelpOutlineIcon />
            </IconButton>
            <IconButton
              color="inherit"
              sx={{ color: 'white' }}
              onClick={handleClick}
              aria-controls={open ? 'language-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <LanguageIcon />
            </IconButton>
            <Menu
              id="language-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'language-button',
              }}
            >
              <MenuItem onClick={() => handleLanguageChange('English')}>English</MenuItem>
              <MenuItem onClick={() => handleLanguageChange('中文')}>中文</MenuItem>
            </Menu>
            <IconButton color="inherit" sx={{ color: 'white' }}>
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          flexGrow: 1,
          backgroundImage: 'url(https://placehold.co/1920x1080?text=Tesla+Model+Y)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 4,
        }}
      >
        <Box>
          <Typography variant="h2" component="h1" sx={{ color: 'white', fontWeight: 'bold', mb: 1, textTransform: 'uppercase' }}>
            {t.modelY}
          </Typography>
          <Typography variant="h5" sx={{ color: 'white', mb: 0.5 }}>
            {t.leaseInfo}
          </Typography>
        </Box>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ mb: 4 }}>
          <Button variant="contained" sx={{ bgcolor: 'rgba(23, 26, 32, 0.8)', color: 'white', width: 250, py: 1, fontSize: '14px', '&:hover': { bgcolor: 'rgba(23, 26, 32, 1)' } }}>
            {t.customOrder}
          </Button>
          <Button variant="contained" sx={{ bgcolor: 'rgba(244, 244, 244, 0.65)', color: 'rgba(23, 26, 32, 0.8)', width: 250, py: 1, fontSize: '14px', '&:hover': { bgcolor: 'rgba(244, 244, 244, 0.8)' } }}>
            {t.demoDrive}
          </Button>
        </Stack>
      </Box>
      <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.6)', textAlign: 'center', py: 2 }}>
        {t.disclaimer}
      </Typography>
    </Box>
  );
};

export default PreviewPage;