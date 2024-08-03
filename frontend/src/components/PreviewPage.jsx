import React, { useState } from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';

const PreviewPage = () => {
  const [files, setFiles] = useState([]);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDropFile = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles([...files, ...droppedFiles]);
  };

  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100%' }}>
      <Stack spacing={2}>
        <Box
          sx={{
            border: '1px solid red',
            p: 2,
            backgroundColor: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '200px',
          }}
          onDragOver={handleDragOver}
          onDrop={handleDropFile}
        >
          <Typography variant="body1">Upload or drag your file</Typography>
        </Box>
        <Box
          sx={{
            border: '1px solid red',
            p: 2,
            backgroundColor: '#fff',
            minHeight: '200px',
          }}
        >
          <Typography variant="h6">File list</Typography>
          {files.map((file, index) => (
            <Typography key={index} variant="body2">
              {file.name}
            </Typography>
          ))}
        </Box>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button variant="contained" color="primary">
            confirm
          </Button>
          <Button variant="contained" color="secondary">
            cancel
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default PreviewPage;