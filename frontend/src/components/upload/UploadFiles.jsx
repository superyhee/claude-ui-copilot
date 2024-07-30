import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import BlockContent from './BlockContent';
import RejectionFiles from './RejectionFiles';
import {
  Box,
  Typography,
  Button,
  Stack,
  Grid,
  IconButton,
  Container,
  Tooltip
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const UploadFiles = ({ files, setFiles }) => {
  console.log(files);
  const onDrop = useCallback((acceptedFiles) => {
    const imageFiles = acceptedFiles.filter((file) =>
      file.type.startsWith('image/')
    );
    setFiles((prevFiles) => [...prevFiles, ...imageFiles]);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    fileRejections,
    isDragReject
  } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'image/gif': [],
      'image/webp': []
    }
  });

  const handleRemoveFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const thumbs = [...files].map((file, index) => (
    <Grid item xs={4} sm={4} md={4} key={index}>
      <Box position="relative" sx={{ aspectRatio: '16/9' }}>
        <Tooltip title={file.path} placement="top">
          <Box
            sx={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              overflow: 'hidden',
              transition: 'box-shadow 0.2s ease-in-out',
              backgroundColor: '#f8f8f8',
              '&:hover': {
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
              },
              width: '100%',
              height: '100%',
              ...(isDragActive && { opacity: 0.72 }),
              ...(isDragReject && {
                color: 'error.main',
                borderColor: 'error.light',
                bgcolor: 'error.lighter'
              })
            }}
          >
            <img
              src={file.url || URL.createObjectURL(file)}
              alt={file.alt || `Preview of ${file.name}`}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </Box>
        </Tooltip>
        <IconButton
          aria-label="delete"
          size="small"
          sx={{
            position: 'absolute',
            top: 0,
            right: 0
          }}
          onClick={() => handleRemoveFile(index)}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Box>
    </Grid>
  ));

  return (
    <Stack spacing={0.3} sx={{ width: '100%' }}>
      <Box
        {...getRootProps()}
        sx={{
          m: 0,
          border: isDragActive ? '2px dashed #0070c0' : '2px dashed #ccc',
          backgroundColor: isDragActive ? 'rgba(0, 112, 192, 0.2)' : '#f8f8f8',
          p: 1,
          textAlign: 'center',
          cursor: 'pointer',
          width: '100%',
          minHeight: 169,
          borderRadius: '8px',
          transition: 'all 0.2s ease-in-out',
          display: 'flex', // 添加这一行
          alignItems: 'center', // 添加这一行
          justifyContent: 'center', // 添加这一行
          '&:hover': {
            backgroundColor: isDragActive
              ? 'rgba(0, 112, 192, 0.3)'
              : 'rgba(0, 0, 0, 0.1)',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
          }
        }}
      >
        <input {...getInputProps()} />
        <BlockContent isDragActive={isDragActive} />
      </Box>
      {fileRejections.length > 0 && (
        <RejectionFiles fileRejections={fileRejections} />
      )}
      <Grid container spacing={2} justifyContent="flex-start">
        {thumbs}
      </Grid>
    </Stack>
  );
};

export default UploadFiles;
