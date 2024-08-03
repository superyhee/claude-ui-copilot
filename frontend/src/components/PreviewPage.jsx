import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

const PreviewPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ backgroundColor: '#d9d9d9', p: 4, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Name</Typography>
        <TextField
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
          {...register('name')}
        />
        <Typography variant="h6" sx={{ mb: 2 }}>Job</Typography>
        <TextField
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
          {...register('job')}
        />
        <Typography variant="h6" sx={{ mb: 2 }}>Desc</Typography>
        <TextField
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          sx={{ mb: 2 }}
          {...register('desc')}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
          <Button variant="contained" color="error">
            cancel
          </Button>
          <Button variant="contained" color="primary" type="submit" onClick={handleSubmit(onSubmit)}>
            confirm
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PreviewPage;