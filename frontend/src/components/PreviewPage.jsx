import React, { useState } from 'react';
import { Box, Typography, Stack, Button, TextField, Paper, Container, Grid } from '@mui/material';

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
    width: '100%',
    height: '60px',
    fontSize: '1.2rem',
  };

  return (
    <Container maxWidth="sm" sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper elevation={6} sx={{ p: 4, borderRadius: '20px', backgroundColor: '#f0f0f0', width: '100%' }}>
        <Stack spacing={3}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
            Calculator
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            value={display}
            InputProps={{
              readOnly: true,
              style: { fontSize: '2rem', textAlign: 'right', backgroundColor: '#fff', borderRadius: '10px' },
            }}
          />
          <Grid container spacing={2}>
            {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn) => (
              <Grid item xs={3} key={btn}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    ...buttonStyle,
                    backgroundColor: ['/', '*', '-', '+'].includes(btn) ? '#ff9800' : btn === '=' ? '#4caf50' : '#2196f3',
                    color: '#ffffff',
                    '&:hover': {
                      backgroundColor: ['/', '*', '-', '+'].includes(btn) ? '#f57c00' : btn === '=' ? '#45a049' : '#1976d2',
                    },
                    borderRadius: '10px',
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
              </Grid>
            ))}
            <Grid item xs={3}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  ...buttonStyle,
                  backgroundColor: '#f44336',
                  color: '#ffffff',
                  '&:hover': {
                    backgroundColor: '#d32f2f',
                  },
                  borderRadius: '10px',
                }}
                onClick={handleClear}
              >
                C
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Calculator;