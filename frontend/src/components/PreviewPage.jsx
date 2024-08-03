import { Box, Button, Typography } from '@mui/material';

const PreviewPage = () => {
  return (
    <Box sx={{ backgroundImage: 'linear-gradient(to right, #ced4f8, #f1a6c9)', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>
        ChatGPT on your desktop
      </Typography>
      <Typography variant="body1" sx={{ color: 'white', mb: 4 }}>
        Chat about email, screenshots, files, and anything on your screen.
      </Typography>
      <Button variant="contained" sx={{ backgroundColor: 'white', color: '#333', '&:hover': { backgroundColor: '#e0e0e0' } }}>
        Learn more
      </Button>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Box component="span" sx={{ width: '10px', height: '10px', backgroundColor: 'white', borderRadius: '50%', mx: 1 }} />
        <Box component="span" sx={{ width: '10px', height: '10px', backgroundColor: 'white', borderRadius: '50%', mx: 1 }} />
        <Box component="span" sx={{ width: '10px', height: '10px', backgroundColor: 'white', borderRadius: '50%', mx: 1 }} />
      </Box>
    </Box>
  );
};

export default PreviewPage;