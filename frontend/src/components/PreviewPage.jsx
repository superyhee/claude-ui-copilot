import React, { useState } from 'react';
import { Box, Typography, AppBar, Toolbar, IconButton } from '@mui/material';

const Header = () => (
  <AppBar position="static" sx={{ backgroundColor: '#4e5359' }}>
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        <img src="https://placehold.co/30x30" alt="Changan logo" style={{ marginRight: '10px' }} />
        长安汽车
      </Typography>
      <Box>
        <Typography variant="button" sx={{ mx: 2, color: 'white' }}>企业信息</Typography>
        <Typography variant="button" sx={{ mx: 2, color: 'white' }}>新闻资讯</Typography>
        <Typography variant="button" sx={{ mx: 2, color: 'white' }}>品牌历程</Typography>
        <Typography variant="button" sx={{ mx: 2, color: 'white' }}>加入长安</Typography>
        <Typography variant="button" sx={{ mx: 2, color: 'white' }}>官方商城</Typography>
      </Box>
    </Toolbar>
  </AppBar>
);

const BrandSection = () => (
  <Box sx={{ 
    height: 'calc(100vh - 64px)', 
    backgroundColor: '#e8edf5', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center' 
  }}>
    <Typography variant="h1" sx={{ 
      color: 'white', 
      fontSize: '120px', 
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
      mb: 4
    }}>
      CHANGAN
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '80%' }}>
      {[
        { icon: 'https://placehold.co/50x50', name: '长安启源' },
        { icon: 'https://placehold.co/50x50', name: '深蓝汽车' },
        { icon: 'https://placehold.co/50x50', name: '阿维塔科技' },
        { icon: 'https://placehold.co/50x50', name: '长安引力' },
        { icon: 'https://placehold.co/50x50', name: '长安凯程' }
      ].map((item, index) => (
        <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={item.icon} alt={item.name} style={{ width: '50px', height: '50px' }} />
          <Typography variant="subtitle1" sx={{ color: '#4e5359', mt: 1 }}>{item.name}</Typography>
        </Box>
      ))}
    </Box>
  </Box>
);

const FloatingButtons = () => (
  <Box sx={{ 
    position: 'fixed', 
    right: 20, 
    bottom: 20, 
    display: 'flex', 
    flexDirection: 'column'
  }}>
    {['', '', ''].map((_, index) => (
      <IconButton 
        key={index} 
        sx={{ 
          bgcolor: 'white', 
          border: '1px solid #ccc', 
          borderRadius: '50%', 
          width: 40, 
          height: 40, 
          mb: 1 
        }}
      >
        <img src={`https://placehold.co/20x20?text=${index + 1}`} alt={`Floating button ${index + 1}`} />
      </IconButton>
    ))}
  </Box>
);

const PreviewPage = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <BrandSection />
      <FloatingButtons />
    </Box>
  );
};

export default PreviewPage;