import React, { useState } from 'react';
import { Box, Grid, Button, Typography, useTheme } from '@mui/material';

const Calculator = () => {
  const theme = useTheme();
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
    <Box sx={{ backgroundColor: theme.palette.background.paper, p: 2, borderRadius: 2, boxShadow: 3 }}>
      <Box sx={{ backgroundColor: '#fff', p: 2, borderRadius: 1, boxShadow: 1 }}>
        <Typography
          variant="h5"
          component="div"
          sx={{
            mb: 2,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
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
                  sx={{ backgroundColor: theme.palette.grey[700], color: theme.palette.common.white }}
                >
                  7
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={() => handleClick('8')}
                  sx={{ backgroundColor: theme.palette.grey[700], color: theme.palette.common.white }}
                >
                  8
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={() => handleClick('9')}
                  sx={{ backgroundColor: theme.palette.grey[700], color: theme.palette.common.white }}
                >
                  9
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={() => handleClick('/')}
                  sx={{ backgroundColor: theme.palette.secondary.main, color: theme.palette.secondary.contrastText }}
                >
                  /
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={() => handleClick('4')}
                  sx={{ backgroundColor: theme.palette.grey[700], color: theme.palette.common.white }}
                >
                  4
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={() => handleClick('5')}
                  sx={{ backgroundColor: theme.palette.grey[700], color: theme.palette.common.white }}
                >
                  5
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={() => handleClick('6')}
                  sx={{ backgroundColor: theme.palette.grey[700], color: theme.palette.common.white }}
                >
                  6
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={() => handleClick('-')}
                  sx={{ backgroundColor: theme.palette.secondary.main, color: theme.palette.secondary.contrastText }}
                >
                  -
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={() => handleClick('1')}
                  sx={{ backgroundColor: theme.palette.grey[700], color: theme.palette.common.white }}
                >
                  1
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={() => handleClick('2')}
                  sx={{ backgroundColor: theme.palette.grey[700], color: theme.palette.common.white }}
                >
                  2
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={() => handleClick('3')}
                  sx={{ backgroundColor: theme.palette.grey[700], color: theme.palette.common.white }}
                >
                  3
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={() => handleClick('+')}
                  sx={{ backgroundColor: theme.palette.secondary.main, color: theme.palette.secondary.contrastText }}
                >
                  +
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={() => clear()}
                  sx={{ backgroundColor: theme.palette.grey[700], color: theme.palette.common.white }}
                >
                  C
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={() => handleClick('0')}
                  sx={{ backgroundColor: theme.palette.grey[700], color: theme.palette.common.white }}
                >
                  0
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={() => handleClick('.')}
                  sx={{ backgroundColor: theme.palette.grey[700], color: theme.palette.common.white }}
                >
                  .
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={calculate}
                  sx={{ backgroundColor: theme.palette.secondary.main, color: theme.palette.secondary.contrastText }}
                >
                  =
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Box
              component="img"
              src="https://placehold.co/100x100?text=Calculator+Logo"
              alt="Calculator Logo"
              sx={{ maxWidth: '100%' }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Calculator;