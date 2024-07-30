import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Skeleton from '@mui/material/Skeleton';
import * as React from 'react';

export default function LoadingPage(props) {
  return (
    <Paper sx={{ maxWidth: '100%', height: 'calc(100vh - 290px)' }}>
      <CardHeader
        avatar={
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
        }
        title={
          <Skeleton
            animation="wave"
            height={10}
            width="80%"
            style={{ marginBottom: 6 }}
          />
        }
        subheader={<Skeleton animation="wave" height={10} width="40%" />}
      />
      {<Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />}

      <CardContent>
        {
          <React.Fragment>
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        }
      </CardContent>
      {<Skeleton sx={{ height: 180 }} animation="wave" variant="rectangular" />}
    </Paper>
  );
}
