import React, { useState } from 'react';
import { Box, Typography, Stack, Button, Slider, TextField } from '@mui/material';

const ImageEditor = () => {
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturation, setSaturation] = useState(100);
  const [caption, setCaption] = useState('');

  const handleBrightnessChange = (event, newValue) => {
    setBrightness(newValue);
  };

  const handleContrastChange = (event, newValue) => {
    setContrast(newValue);
  };

  const handleSaturationChange = (event, newValue) => {
    setSaturation(newValue);
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handleSave = () => {
    console.log('Saving image with:', { brightness, contrast, saturation, caption });
  };

  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100%' }}>
      <Stack alignItems="center" spacing={3}>
        <Typography variant="h4">图片编辑器</Typography>
        
        <Box sx={{ width: '100%', maxWidth: 500 }}>
          <img 
            src="https://placehold.co/400x300"
            alt="Editable placeholder image"
            style={{ 
              width: '100%', 
              filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`
            }}
          />
        </Box>

        <Box sx={{ width: '100%', maxWidth: 400 }}>
          <Typography gutterBottom>亮度</Typography>
          <Slider
            value={brightness}
            onChange={handleBrightnessChange}
            aria-labelledby="brightness-slider"
            min={0}
            max={200}
          />

          <Typography gutterBottom>对比度</Typography>
          <Slider
            value={contrast}
            onChange={handleContrastChange}
            aria-labelledby="contrast-slider"
            min={0}
            max={200}
          />

          <Typography gutterBottom>饱和度</Typography>
          <Slider
            value={saturation}
            onChange={handleSaturationChange}
            aria-labelledby="saturation-slider"
            min={0}
            max={200}
          />

          <TextField
            fullWidth
            label="图片说明"
            variant="outlined"
            value={caption}
            onChange={handleCaptionChange}
            margin="normal"
          />

          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleSave}
            sx={{ mt: 2 }}
          >
            保存图片
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default ImageEditor;