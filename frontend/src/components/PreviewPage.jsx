import React, { useState } from 'react';
import { Box, Button, Grid, Paper } from '@mui/material';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    setDisplay(prev => prev + value);
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
      backgroundColor: '#1e1e1e'
    }}>
      <Paper
        elevation={3}
        sx={{
          width: '300px',
          padding: '20px',
          backgroundColor: '#ff9999',
          border: '2px solid #ff0000'
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '50px',
            backgroundColor: '#ffcccc',
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 10px',
            boxSizing: 'border-box',
            border: '1px solid #000000'
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
                onClick={() => btn === '=' ? handleCalculate() : btn === 'C' ? handleClear() : handleClick(btn)}
                sx={{
                  backgroundColor: '#ffcccc',
                  color: '#000000',
                  border: '1px solid #000000',
                  '&:hover': {
                    backgroundColor: '#ffb3b3',
                  }
                }}
              >
                {btn}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Paper>
      <Box
        sx={{
          width: '300px',
          height: '340px',
          backgroundColor: '#1e1e1e',
          marginLeft: '20px',
          border: '2px solid #ffffff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box
          component="img"
          sx={{
            width: '80%',
            height: 'auto',
          }}
          alt="A curved line graph"
          src="https://placehold.co/240x240?text=Graph"
        />
      </Box>
    </Box>
  );
};

export default Calculator;