import React, { useState, useEffect } from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';

const PreviewPage = () => {
  const [isInhaling, setIsInhaling] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState('#f5f5f5');
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount === 1) {
          setIsInhaling((prev) => !prev);
          return 5;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isInhaling) {
      setBackgroundColor('#e6f7ff');
    } else {
      setBackgroundColor('#ffe6e6');
    }
  }, [isInhaling]);

  return (
    <Box sx={{ p: 4, backgroundColor: backgroundColor, height: '100vh', transition: 'background-color 0.5s ease' }}>
      <Stack alignItems="center" spacing={4} sx={{ height: '100%', justifyContent: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#333' }}>
          Mindful Breathing
        </Typography>
        <Box
          component="img"
          src="https://placehold.co/200x200"
          alt="Breathing visualization"
          sx={{
            width: 200,
            height: 200,
            borderRadius: '50%',
            boxShadow: '0 0 20px rgba(0,0,0,0.1)',
            animation: isInhaling ? 'pulse 5s infinite' : 'none',
            '@keyframes pulse': {
              '0%': { transform: 'scale(1)' },
              '50%': { transform: 'scale(1.1)' },
              '100%': { transform: 'scale(1)' },
            },
          }}
        />
        <Typography variant="h4" sx={{ fontWeight: 'medium', color: '#555' }}>
          {isInhaling ? 'Inhale' : 'Exhale'}
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#444' }}>
          {countdown}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: isInhaling ? '#4caf50' : '#f44336',
            '&:hover': {
              backgroundColor: isInhaling ? '#45a049' : '#d32f2f',
            },
            fontSize: '1.2rem',
            padding: '10px 30px',
            borderRadius: '30px',
          }}
          onClick={() => setIsInhaling((prev) => !prev)}
        >
          {isInhaling ? 'Start Exhaling' : 'Start Inhaling'}
        </Button>
      </Stack>
    </Box>
  );
};

export default PreviewPage;