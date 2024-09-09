import React, { useState } from 'react';
import { Box, Button, Grid, Paper } from '@mui/material';

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

  const buttons = [
    '1', '2', '3', '.',
    '4', '5', '6', '*',
    '7', '8', '9', '/',
    'C', '+', '-', '='
  ];

  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      backgroundColor: '#000000'
    }}>
      <Paper 
        elevation={3}
        sx={{
          width: '300px',
          padding: '20px',
          backgroundColor: '#FF0000',
          border: '2px solid #FF0000',
          borderRadius: '10px'
        }}
      >
        <Box 
          sx={{ 
            backgroundColor: '#FFE4E1', 
            p: 1, 
            mb: 2, 
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            overflow: 'hidden',
            borderRadius: '5px'
          }}
        >
          {display}
        </Box>
        <Grid container spacing={1}>
          {buttons.map((btn, index) => (
            <Grid item xs={3} key={index}>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => btn === 'C' ? handleClear() : btn === '=' ? handleCalculate() : handleClick(btn)}
                sx={{
                  backgroundColor: '#FFE4E1',
                  color: '#000000',
                  border: '1px solid #000000',
                  '&:hover': {
                    backgroundColor: '#FFC0CB',
                  },
                }}
              >
                {btn}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default Calculator;