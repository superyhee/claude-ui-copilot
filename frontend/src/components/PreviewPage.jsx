import React, { useState } from 'react';
import { Box, Button, Typography, Stack } from '@mui/material';

const PreviewPage = () => {
  const [fileList, setFileList] = useState([]);

  const handleFileUpload = (event) => {
    const files = event.target.files;
    setFileList([...fileList, ...files]);
  };

  const handleConfirm = () => {
    // Handle confirm action
    console.log('Confirm:', fileList);
  };

  const handleCancel = () => {
    // Handle cancel action
    setFileList([]);
  };

  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100%' }}>
      <Stack alignItems="center" spacing={2}>
        <Box
          sx={{
            border: '1px solid red',
            p: 2,
            bgcolor: '#fff',
            width: '100%',
            maxWidth: 400,
          }}
        >
          <Stack alignItems="center" spacing={2}>
            <Box
              sx={{
                border: '1px dashed red',
                p: 2,
                bgcolor: '#fff',
                width: '100%',
                height: 200,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <input
                type="file"
                multiple
                onChange={handleFileUpload}
                style={{ display: 'none' }}
                id="file-upload"
              />
              <label htmlFor="file-upload">
                <Typography variant="body1" sx={{ color: 'red' }}>
                  Upload or drag your file
                </Typography>
              </label>
            </Box>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                color="error"
                onClick={handleConfirm}
                sx={{ textTransform: 'none' }}
              >
                confirm
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={handleCancel}
                sx={{ textTransform: 'none' }}
              >
                cancel
              </Button>
            </Stack>
          </Stack>
        </Box>
        <Box
          sx={{
            border: '1px solid red',
            p: 2,
            bgcolor: '#fff',
            width: '100%',
            maxWidth: 400,
          }}
        >
          <Typography variant="body1" sx={{ color: 'red' }}>
            File list
          </Typography>
          {fileList.map((file, index) => (
            <Typography key={index} variant="body2">
              {file.name}
            </Typography>
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default PreviewPage;