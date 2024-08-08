import React, { useState } from 'react';
import { Box, Typography, Stack, Button, Slider, IconButton, TextField, Menu, MenuItem } from '@mui/material';
import { Crop, Rotate90DegreesCcw, Brightness6, Contrast, Colorize, Tune, Flip, Save } from '@mui/icons-material';

const ImageEditor = () => {
  const [image, setImage] = useState('https://placehold.co/600x400');
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [saturation, setSaturation] = useState(100);
  const [hue, setHue] = useState(0);
  const [blur, setBlur] = useState(0);
  const [flipX, setFlipX] = useState(1);
  const [flipY, setFlipY] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => setImage(e.target.result);
    reader.readAsDataURL(file);
  };

  const applyFilters = () => {
    return {
      filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) hue-rotate(${hue}deg) blur(${blur}px)`,
      transform: `rotate(${rotation}deg) scaleX(${flipX}) scaleY(${flipY})`,
    };
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSave = () => {
    // Mock save functionality
    console.log('Image saved');
    handleMenuClose();
  };

  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100%' }}>
      <Stack alignItems="center" spacing={3}>
        <Typography variant="h4">Advanced Image Editor</Typography>
        <Button variant="contained" component="label">
          Upload Image
          <input type="file" hidden onChange={handleImageUpload} accept="image/*" />
        </Button>
        <Box sx={{ maxWidth: '100%', maxHeight: '60vh', overflow: 'hidden' }}>
          <img
            src={image}
            alt="Image being edited"
            style={{ maxWidth: '100%', maxHeight: '100%', ...applyFilters() }}
          />
        </Box>
        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton onClick={() => setRotation((prev) => (prev + 90) % 360)}>
            <Rotate90DegreesCcw />
          </IconButton>
          <IconButton onClick={() => setFlipX((prev) => prev * -1)}>
            <Flip />
          </IconButton>
          <IconButton onClick={() => setFlipY((prev) => prev * -1)}>
            <Flip sx={{ transform: 'rotate(90deg)' }} />
          </IconButton>
          <IconButton>
            <Crop />
          </IconButton>
          <IconButton onClick={handleMenuOpen}>
            <Save />
          </IconButton>
        </Stack>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleSave}>Save as JPG</MenuItem>
          <MenuItem onClick={handleSave}>Save as PNG</MenuItem>
        </Menu>
        <Stack spacing={2} sx={{ width: '100%', maxWidth: 300 }}>
          <Typography gutterBottom>Brightness</Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Brightness6 />
            <Slider
              value={brightness}
              onChange={(e, newValue) => setBrightness(newValue)}
              min={0}
              max={200}
            />
          </Stack>
          <Typography gutterBottom>Contrast</Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Contrast />
            <Slider
              value={contrast}
              onChange={(e, newValue) => setContrast(newValue)}
              min={0}
              max={200}
            />
          </Stack>
          <Typography gutterBottom>Saturation</Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Colorize />
            <Slider
              value={saturation}
              onChange={(e, newValue) => setSaturation(newValue)}
              min={0}
              max={200}
            />
          </Stack>
          <Typography gutterBottom>Hue</Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Tune />
            <Slider
              value={hue}
              onChange={(e, newValue) => setHue(newValue)}
              min={0}
              max={360}
            />
          </Stack>
          <Typography gutterBottom>Blur</Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Tune />
            <Slider
              value={blur}
              onChange={(e, newValue) => setBlur(newValue)}
              min={0}
              max={10}
              step={0.1}
            />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ImageEditor;