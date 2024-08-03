import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

const PreviewPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100%' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Name"
            variant="outlined"
            {...register('name')}
          />
          <TextField
            label="Job"
            variant="outlined"
            {...register('job')}
          />
          <TextField
            label="Desc"
            multiline
            rows={4}
            variant="outlined"
            {...register('desc')}
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <Button variant="contained" color="error">
              cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
              confirm
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default PreviewPage;