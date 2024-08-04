import React, { useState } from 'react';
import { Box, Typography, Stack, Button, Grid } from '@mui/material';

const PreviewPage = () => {
  const [display, setDisplay] = useState('0');
  const [operand1, setOperand1] = useState(null);
  const [operand2, setOperand2] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleDigit = (digit) => {
    if (display === '0') {
      setDisplay(digit);
    } else {
      setDisplay(display + digit);
    }
  };

  const handleOperator = (op) => {
    setOperand1(parseFloat(display));
    setOperator(op);
    setDisplay('0');
  };

  const handleEqual = () => {
    setOperand2(parseFloat(display));
    let result;
    switch (operator) {
      case '+':
        result = operand1 + operand2;
        break;
      case '-':
        result = operand1 - operand2;
        break;
      case '*':
        result = operand1 * operand2;
        break;
      case '/':
        result = operand1 / operand2;
        break;
      default:
        return;
    }
    setDisplay(result.toString());
  };

  const handleDecimal = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setOperand1(null);
    setOperand2(null);
    setOperator(null);
  };

  return (
    <Box sx={{ bgcolor: 'background.default', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ bgcolor: '#333', p: 4, borderRadius: 2, width: 300 }}>
        <Box sx={{ bgcolor: '#000', borderRadius: 1, p: 2, mb: 2 }}>
          <Typography variant="h6" sx={{ color: '#fff', textAlign: 'right' }}>
            {display}
          </Typography>
        </Box>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth onClick={() => handleDigit('1')}>
              1
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth onClick={() => handleDigit('2')}>
              2
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth onClick={() => handleDigit('3')}>
              3
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth onClick={() => handleOperator('+')}>
              +
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth onClick={() => handleDigit('4')}>
              4
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth onClick={() => handleDigit('5')}>
              5
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth onClick={() => handleDigit('6')}>
              6
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth onClick={() => handleOperator('-')}>
              -
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth onClick={() => handleDigit('7')}>
              7
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth onClick={() => handleDigit('8')}>
              8
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth onClick={() => handleDigit('9')}>
              9
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth onClick={() => handleOperator('/')}>
              /
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth onClick={handleDecimal}>
              .
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth onClick={() => handleOperator('*')}>
              *
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth onClick={handleClear}>
              C
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth onClick={handleEqual}>
              =
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PreviewPage;