import React, { useState } from 'react';
import { Box, Typography, Stack, Button, Slider, IconButton } from '@mui/material';
import { Crop, Rotate90DegreesCcw, Brightness6, Contrast } from '@mui/icons-material';

const ImageEditor = () => {
  const [image, setImage] = useState(null);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [rotation, setRotation] = useState(0);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => setImage(e.target.result);
    reader.readAsDataURL(file);
  };

  const applyFilters = () => {
    return {
      filter: `brightness(${brightness}%) contrast(${contrast}%)`,
      transform: `rotate(${rotation}deg)`,
    };
  };

  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100%' }}>
      <Stack alignItems="center" spacing={3}>
        <Typography variant="h4">Image Editor</Typography>
        <Button variant="contained" component="label">
          Upload Image
          <input type="file" hidden onChange={handleImageUpload} accept="image/*" />
        </Button>
        {image ? (
          <Box sx={{ maxWidth: '100%', maxHeight: '60vh', overflow: 'hidden' }}>
            <img
              src={image}
              alt="Uploaded image for editing"
              style={{ maxWidth: '100%', maxHeight: '100%', ...applyFilters() }}
            />
          </Box>
        ) : (
          <Box
            sx={{
              width: '300px',
              height: '200px',
              backgroundColor: '#e0e0e0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography>No image uploaded</Typography>
          </Box>
        )}
        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton onClick={() => setRotation((prev) => (prev + 90) % 360)}>
            <Rotate90DegreesCcw />
          </IconButton>
          <IconButton>
            <Crop />
          </IconButton>
        </Stack>
        <Stack spacing={2} sx={{ width: '100%', maxWidth: 300 }}>
          <Typography id="brightness-slider" gutterBottom>
            Brightness
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Brightness6 />
            <Slider
              value={brightness}
              onChange={(e, newValue) => setBrightness(newValue)}
              aria-labelledby="brightness-slider"
              min={0}
              max={200}
            />
          </Stack>
          <Typography id="contrast-slider" gutterBottom>
            Contrast
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Contrast />
            <Slider
              value={contrast}
              onChange={(e, newValue) => setContrast(newValue)}
              aria-labelledby="contrast-slider"
              min={0}
              max={200}
            />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ImageEditor;