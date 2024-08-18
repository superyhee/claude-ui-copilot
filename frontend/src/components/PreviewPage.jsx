import React, { useState } from 'react';
import { Box, Typography, Stack, Button, TextField, Paper } from '@mui/material';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleNumberClick = (num) => {
    setDisplay((prev) => (prev === '0' ? num : prev + num));
  };

  const handleOperationClick = (op) => {
    setPrevValue(parseFloat(display));
    setOperation(op);
    setDisplay('0');
  };

  const handleEquals = () => {
    const currentValue = parseFloat(display);
    let result;
    switch (operation) {
      case '+':
        result = prevValue + currentValue;
        break;
      case '-':
        result = prevValue - currentValue;
        break;
      case '*':
        result = prevValue * currentValue;
        break;
      case '/':
        result = prevValue / currentValue;
        break;
      default:
        return;
    }
    setDisplay(result.toString());
    setPrevValue(null);
    setOperation(null);
  };

  const handleClear = () => {
    setDisplay('0');
    setPrevValue(null);
    setOperation(null);
  };

  const buttonStyle = {
    width: '60px',
    height: '60px',
    fontSize: '1.2rem',
    margin: '5px',
  };

  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: '15px', backgroundColor: '#ffffff' }}>
        <Stack spacing={2} alignItems="center">
          <Typography variant="h4" gutterBottom>
            Calculator
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            value={display}
            InputProps={{
              readOnly: true,
              style: { fontSize: '1.5rem', textAlign: 'right' },
            }}
          />
          <Stack direction="row" flexWrap="wrap" justifyContent="center">
            {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn) => (
              <Button
                key={btn}
                variant="contained"
                sx={{
                  ...buttonStyle,
                  backgroundColor: ['/', '*', '-', '+'].includes(btn) ? '#ff9800' : '#2196f3',
                  color: '#ffffff',
                  '&:hover': {
                    backgroundColor: ['/', '*', '-', '+'].includes(btn) ? '#f57c00' : '#1976d2',
                  },
                }}
                onClick={() => {
                  if (btn === '=') {
                    handleEquals();
                  } else if (['+', '-', '*', '/'].includes(btn)) {
                    handleOperationClick(btn);
                  } else {
                    handleNumberClick(btn);
                  }
                }}
              >
                {btn}
              </Button>
            ))}
            <Button
              variant="contained"
              sx={{
                ...buttonStyle,
                backgroundColor: '#f44336',
                color: '#ffffff',
                '&:hover': {
                  backgroundColor: '#d32f2f',
                },
              }}
              onClick={handleClear}
            >
              C
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Calculator;