import React, { useState } from 'react';
import { Box, Button, TextField, Grid } from '@mui/material';

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
        width: '300px',
        padding: '20px',
        backgroundColor: '#FFE4E1',
        borderRadius: '10px',
        border: '2px solid #FF69B4',
        margin: 'auto',
        marginTop: '50px',
      }}
    >
      <TextField
        fullWidth
        value={display}
        sx={{
          marginBottom: '20px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#FF69B4',
            },
            '&:hover fieldset': {
              borderColor: '#FF69B4',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FF69B4',
            },
          },
        }}
      />
      <Grid container spacing={1}>
        {['1', '2', '3', '.', '4', '5', '6', '*', '7', '8', '9', '/', 'C', '+', '-', '='].map((btn) => (
          <Grid item xs={3} key={btn}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => {
                if (btn === '=') handleCalculate();
                else if (btn === 'C') handleClear();
                else handleClick(btn);
              }}
              sx={{
                border: '1px solid #FF69B4',
                color: '#FF69B4',
                '&:hover': {
                  backgroundColor: '#FFB6C1',
                  borderColor: '#FF69B4',
                },
              }}
            >
              {btn}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Calculator;