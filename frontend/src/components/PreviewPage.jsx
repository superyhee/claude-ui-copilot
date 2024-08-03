import React, { useState } from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';

const PreviewPage = () => {
  const [files, setFiles] = useState([]);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles([...files, ...droppedFiles]);
  };

  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100%' }}>
      <Stack direction="row" justifyContent="space-between" spacing={4}>
        <Box
          sx={{
            border: '1px dashed #ff0000',
            p: 4,
            backgroundColor: '#fff3f3',
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <Typography variant="body1" color="#ff0000">
            Upload or drag your file
          </Typography>
          <img
            src="https://placehold.co/200x100"
            alt="Placeholder for upload or drag area"
          />
        </Box>
        <Box
          sx={{
            border: '1px dashed #ff0000',
            p: 4,
            backgroundColor: '#fff3f3',
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="body1" color="#ff0000">
            File list
          </Typography>
        </Box>
      </Stack>
      <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: 4 }}>
        <Button variant="contained" color="primary">
          confirm
        </Button>
        <Button variant="contained" color="inherit">
          cancel
        </Button>
      </Stack>
    </Box>
  );
};

export default PreviewPage;