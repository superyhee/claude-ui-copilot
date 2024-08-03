import { Box, Typography, Stack, TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';

const PreviewPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100%' }}>
      <Stack alignItems="center" spacing={2}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          {...register('name')}
        />
        <TextField
          label="Job"
          variant="outlined"
          fullWidth
          {...register('job')}
        />
        <TextField
          label="Desc"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          {...register('desc')}
        />
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" color="error">
            cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit(onSubmit)}>
            confirm
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default PreviewPage;