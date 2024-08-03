import React, { useState } from 'react';
import { Box, Typography, Stack, Button, Paper } from '@mui/material';

const PreviewPage = () => {
  const [files, setFiles] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const newFiles = [...e.dataTransfer.files];
    setFiles(newFiles);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper elevation={3} sx={{ width: '600px', height: '400px', display: 'flex', flexDirection: 'column', p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Dialog</Typography>
        <Stack direction="row" sx={{ flex: 1, border: '1px solid #ccc', borderRadius: 1, overflow: 'hidden' }}>
          <Box sx={{ flex: 1, p: 2, bgcolor: '#e0e0e0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="body1" color="text.secondary">Upload or drag your file</Typography>
          </Box>
          <Box sx={{ flex: 1, p: 2, bgcolor: '#e0e0e0' }}>
            <Typography variant="h6" sx={{ mb: 1 }}>File list</Typography>
            {files.map((file, index) => (
              <Typography key={index} variant="body1">{file.name}</Typography>
            ))}
          </Box>
        </Stack>
        <Stack direction="row" justifyContent="flex-end" sx={{ mt: 2 }}>
          <Button variant="contained" color="error" sx={{ mr: 2 }}>cancel</Button>
          <Button variant="contained" color="primary">confirm</Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default PreviewPage;