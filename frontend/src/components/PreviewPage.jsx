import React, { useState } from 'react';
import { Box, Button, TextField, Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  background: '#2c3e50',
  borderRadius: 15,
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  background: '#34495e',
  border: 0,
  borderRadius: 8,
  color: 'white',
  height: 56,
  fontSize: '1.2rem',
  fontWeight: 'bold',
  '&:hover': {
    background: '#2c3e50',
  },
}));

const OperatorButton = styled(StyledButton)(({ theme }) => ({
  background: '#e67e22',
  '&:hover': {
    background: '#d35400',
  },
}));

const EqualButton = styled(StyledButton)(({ theme }) => ({
  background: '#27ae60',
  '&:hover': {
    background: '#2ecc71',
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
        background: 'linear-gradient(to right bottom, #2c3e50, #3498db)',
      }}
    >
      <StyledPaper elevation={3}>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: '#ecf0f1', fontWeight: 'bold', marginBottom: '20px' }}>
          Cool Calculator
        </Typography>
        <TextField
          fullWidth
          value={display}
          variant="filled"
          InputProps={{
            style: { 
              fontSize: '2rem',
              color: '#ecf0f1',
              background: 'rgba(236, 240, 241, 0.1)',
              borderRadius: '8px 8px 0 0',
            }
          }}
          sx={{
            marginBottom: '20px',
            '& .MuiFilledInput-underline:before': {
              borderBottomColor: 'transparent',
            },
            '& .MuiFilledInput-underline:after': {
              borderBottomColor: 'transparent',
            },
          }}
        />
        <Grid container spacing={2}>
          {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '.', '+'].map((btn) => (
            <Grid item xs={3} key={btn}>
              {['/', '*', '-', '+'].includes(btn) ? (
                <OperatorButton
                  fullWidth
                  onClick={() => handleClick(btn)}
                >
                  {btn}
                </OperatorButton>
              ) : (
                <StyledButton
                  fullWidth
                  onClick={() => {
                    if (btn === 'C') handleClear();
                    else handleClick(btn);
                  }}
                >
                  {btn}
                </StyledButton>
              )}
            </Grid>
          ))}
          <Grid item xs={12}>
            <EqualButton
              fullWidth
              onClick={handleCalculate}
              sx={{ height: 70, fontSize: '1.5rem' }}
            >
              =
            </EqualButton>
          </Grid>
        </Grid>
      </StyledPaper>
    </Box>
  );
};

export default Calculator;