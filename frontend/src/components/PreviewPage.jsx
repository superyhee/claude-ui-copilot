import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Stack, CircularProgress, Fade } from '@mui/material';
import { keyframes } from '@mui/system';

const breatheAnimation = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
`;

const PreviewPage = () => {
  const [breathPhase, setBreathPhase] = useState('inhale');
  const [seconds, setSeconds] = useState(4);
  const [isResetClicked, setIsResetClicked] = useState(false);

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

  const handleReset = () => {
    setIsResetClicked(true);
    setTimeout(() => {
      setBreathPhase('inhale');
      setSeconds(4);
      setIsResetClicked(false);
    }, 500);
  };

  return (
    <Box sx={{
      p: 4,
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Stack alignItems="center" spacing={4}>
        <Typography variant="h3" sx={{ mb: 2, color: '#34495e', fontWeight: 'bold' }}>Mindful Breathing</Typography>
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
          <CircularProgress
            variant="determinate"
            value={(seconds / 4) * 100}
            size={250}
            thickness={6}
            sx={{
              color: breathPhase === 'inhale' ? '#3498db' : '#2ecc71',
              animation: `${breatheAnimation} ${breathPhase === 'inhale' ? '4s' : '4s'} ease-in-out infinite`,
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
            <Typography variant="h2" component="div" color="text.secondary" sx={{ fontWeight: 'bold' }}>
              {seconds}
            </Typography>
          </Box>
        </Box>
        <Fade in={true} timeout={1000}>
          <Typography variant="h4" sx={{ color: '#34495e', fontWeight: 'medium' }}>{getInstructions()}</Typography>
        </Fade>
        <img src="https://placehold.co/400x250" alt="Serene lake surrounded by mountains for relaxation" style={{ borderRadius: '12px', marginTop: '20px', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' }} />
        <Button 
          variant="contained" 
          color="primary" 
          sx={{ 
            mt: 4, 
            px: 4, 
            py: 1.5, 
            borderRadius: '25px', 
            backgroundColor: '#3498db',
            '&:hover': {
              backgroundColor: '#2980b9'
            }
          }}
          onClick={handleReset}
          disabled={isResetClicked}
        >
          Reset
        </Button>
      </Stack>
    </Box>
  );
};

export default PreviewPage;