import React, { useState } from 'react';
import { Box, Button, TextField, Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderRadius: 15,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  '&:hover': {
    background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
  },
}));

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    setDisplay(prevDisplay => prevDisplay + value);
  };

  const handleClear = () => {
    setDisplay('');
  };

  const handleCalculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(to right bottom, #430089, #82ffa1)',
      }}
    >
      <StyledPaper elevation={3}>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
          Fancy Calculator
        </Typography>
        <TextField
          fullWidth
          value={display}
          variant="filled"
          InputProps={{
            style: { 
              fontSize: '1.5rem',
              color: 'white',
              background: 'rgba(255, 255, 255, 0.15)',
            }
          }}
          sx={{
            marginBottom: '20px',
            '& .MuiFilledInput-underline:before': {
              borderBottomColor: 'rgba(255, 255, 255, 0.7)',
            },
            '& .MuiFilledInput-underline:after': {
              borderBottomColor: 'white',
            },
          }}
        />
        <Grid container spacing={2}>
          {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '.', '+'].map((btn) => (
            <Grid item xs={3} key={btn}>
              <StyledButton
                fullWidth
                onClick={() => {
                  if (btn === '=') handleCalculate();
                  else if (btn === 'C') handleClear();
                  else handleClick(btn);
                }}
              >
                {btn}
              </StyledButton>
            </Grid>
          ))}
          <Grid item xs={12}>
            <StyledButton
              fullWidth
              onClick={handleCalculate}
              sx={{ height: 60, fontSize: '1.2rem' }}
            >
              =
            </StyledButton>
          </Grid>
        </Grid>
      </StyledPaper>
    </Box>
  );
};

export default Calculator;