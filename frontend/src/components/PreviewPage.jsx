import React, { useState } from 'react';
import { Box, Typography, Stack, Button, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';

const CalculatorWrapper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.grey[800],
  borderRadius: theme.spacing(2),
  padding: theme.spacing(4),
  width: 300,
}));

const Display = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const DigitButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const OperatorButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  },
}));

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
      <CalculatorWrapper>
        <Display>
          <Typography variant="h6" sx={{ color: 'common.white', textAlign: 'right' }}>
            {display}
          </Typography>
        </Display>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <DigitButton fullWidth onClick={() => handleDigit('1')}>
              1
            </DigitButton>
          </Grid>
          <Grid item xs={3}>
            <DigitButton fullWidth onClick={() => handleDigit('2')}>
              2
            </DigitButton>
          </Grid>
          <Grid item xs={3}>
            <DigitButton fullWidth onClick={() => handleDigit('3')}>
              3
            </DigitButton>
          </Grid>
          <Grid item xs={3}>
            <OperatorButton fullWidth onClick={() => handleOperator('+')}>
              +
            </OperatorButton>
          </Grid>
          <Grid item xs={3}>
            <DigitButton fullWidth onClick={() => handleDigit('4')}>
              4
            </DigitButton>
          </Grid>
          <Grid item xs={3}>
            <DigitButton fullWidth onClick={() => handleDigit('5')}>
              5
            </DigitButton>
          </Grid>
          <Grid item xs={3}>
            <DigitButton fullWidth onClick={() => handleDigit('6')}>
              6
            </DigitButton>
          </Grid>
          <Grid item xs={3}>
            <OperatorButton fullWidth onClick={() => handleOperator('-')}>
              -
            </OperatorButton>
          </Grid>
          <Grid item xs={3}>
            <DigitButton fullWidth onClick={() => handleDigit('7')}>
              7
            </DigitButton>
          </Grid>
          <Grid item xs={3}>
            <DigitButton fullWidth onClick={() => handleDigit('8')}>
              8
            </DigitButton>
          </Grid>
          <Grid item xs={3}>
            <DigitButton fullWidth onClick={() => handleDigit('9')}>
              9
            </DigitButton>
          </Grid>
          <Grid item xs={3}>
            <OperatorButton fullWidth onClick={() => handleOperator('/')}>
              /
            </OperatorButton>
          </Grid>
          <Grid item xs={3}>
            <DigitButton fullWidth onClick={handleDecimal}>
              .
            </DigitButton>
          </Grid>
          <Grid item xs={3}>
            <OperatorButton fullWidth onClick={() => handleOperator('*')}>
              *
            </OperatorButton>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="error" fullWidth onClick={handleClear}>
              C
            </Button>
          </Grid>
          <Grid item xs={3}>
            <OperatorButton fullWidth onClick={handleEqual}>
              =
            </OperatorButton>
          </Grid>
        </Grid>
      </CalculatorWrapper>
    </Box>
  );
};

export default PreviewPage;