import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Stack, CircularProgress } from '@mui/material';

const PreviewPage = () => {
  const [breathPhase, setBreathPhase] = useState('inhale');
  const [seconds, setSeconds] = useState(4);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 1) {
          setBreathPhase((prevPhase) => (prevPhase === 'inhale' ? 'exhale' : 'inhale'));
          return 4;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getInstructions = () => {
    return breathPhase === 'inhale' ? 'Breathe In' : 'Breathe Out';
  };

  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Stack alignItems="center" spacing={4}>
        <Typography variant="h3" sx={{ mb: 2 }}>Mindful Breathing</Typography>
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
          <CircularProgress
            variant="determinate"
            value={(seconds / 4) * 100}
            size={200}
            thickness={5}
            sx={{
              color: breathPhase === 'inhale' ? '#4caf50' : '#2196f3',
            }}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h4" component="div" color="text.secondary">
              {seconds}
            </Typography>
          </Box>
        </Box>
        <Typography variant="h5">{getInstructions()}</Typography>
        <img src="https://placehold.co/300x200" alt="Calming nature scene for meditation" style={{ borderRadius: '8px', marginTop: '20px' }} />
        <Button variant="contained" color="primary" sx={{ mt: 4 }}>
          Reset
        </Button>
      </Stack>
    </Box>
  );
};

export default PreviewPage;