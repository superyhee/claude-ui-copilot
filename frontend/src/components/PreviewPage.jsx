import React, { useState } from 'react';
import { Box, Grid, Button, Typography } from '@mui/material';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const calculate = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const clear = () => {
    setDisplay('');
  };

  return (
    <Box sx={{ backgroundColor: '#000', p: 2, borderRadius: 2 }}>
      <Box sx={{ backgroundColor: '#fff', p: 2, borderRadius: 1 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            mb: 2,
            backgroundColor: '#000',
            color: '#fff',
            p: 1,
            borderRadius: 1,
            textAlign: 'right',
          }}
        >
          {display}
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={9}>
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={() => handleClick('7')}
                  sx={{ backgroundColor: '#333', color: '#fff' }}
                >
                  7
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={() => handleClick('8')}
                  sx={{ backgroundColor: '#333', color: '#fff' }}
                >
                  8
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={() => handleClick('9')}
                  sx={{ backgroundColor: '#333', color: '#fff' }}
                >
                  9
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={() => handleClick('/')}
                  sx={{ backgroundColor: '#ff9800', color: '#fff' }}
                >
                  /
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={() => handleClick('4')}
                  sx={{ backgroundColor: '#333', color: '#fff' }}
                >
                  4
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={() => handleClick('5')}
                  sx={{ backgroundColor: '#333', color: '#fff' }}
                >
                  5
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={() => handleClick('6')}
                  sx={{ backgroundColor: '#333', color: '#fff' }}
                >
                  6
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={() => handleClick('-')}
                  sx={{ backgroundColor: '#ff9800', color: '#fff' }}
                >
                  -
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={() => handleClick('1')}
                  sx={{ backgroundColor: '#333', color: '#fff' }}
                >
                  1
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={() => handleClick('2')}
                  sx={{ backgroundColor: '#333', color: '#fff' }}
                >
                  2
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={() => handleClick('3')}
                  sx={{ backgroundColor: '#333', color: '#fff' }}
                >
                  3
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={() => handleClick('+')}
                  sx={{ backgroundColor: '#ff9800', color: '#fff' }}
                >
                  +
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={() => clear()}
                  sx={{ backgroundColor: '#333', color: '#fff' }}
                >
                  C
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={() => handleClick('0')}
                  sx={{ backgroundColor: '#333', color: '#fff' }}
                >
                  0
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={() => handleClick('.')}
                  sx={{ backgroundColor: '#333', color: '#fff' }}
                >
                  .
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={calculate}
                  sx={{ backgroundColor: '#ff9800', color: '#fff' }}
                >
                  =
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6" component="div" sx={{ color: '#fff' }}>
              calculator
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Calculator;