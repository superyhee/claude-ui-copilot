import React, { Component } from 'react';
import {
  Typography,
  Button,
  Paper,
  Box,
  Container,
  ThemeProvider,
  createTheme
} from '@mui/material';
import { ErrorOutline as ErrorIcon } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2'
    },
    error: {
      main: '#d32f2f'
    }
  }
});

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    if (process.env.NODE_ENV === 'production') {
      logErrorToService(error, errorInfo);
    } else {
      console.error('ErrorBoundary caught an error', error, errorInfo);
      this.setState({ errorInfo });
    }
  }

  resetErrorState = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });

    // 如果提供了 onRetry 属性，则调用它
    if (this.props.onRetry) {
      this.props.onRetry();
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <Container maxWidth="lg">
          <Box sx={{ mt: 4 }}>
            <Paper elevation={0} sx={{ p: 3, textAlign: 'center' }}>
              <ErrorIcon color="error" sx={{ fontSize: 60, mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Oops! Something went wrong.
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                {this.props.errorMessage ||
                  "We're sorry, but an error occurred. Please try again."}
              </Typography>
              {process.env.NODE_ENV !== 'production' && (
                <Box sx={{ mt: 2, mb: 2, textAlign: 'left' }}>
                  <details style={{ whiteSpace: 'pre-wrap' }}>
                    <summary>Error Details</summary>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo &&
                      this.state.errorInfo.componentStack}
                  </details>
                </Box>
              )}
              {/* <Button
                variant="contained"
                color="primary"
                onClick={this.resetErrorState}
                sx={{ mt: 2 }}
              >
                {this.props.retryButtonText || 'Try Again'}
              </Button> */}
            </Paper>
          </Box>
        </Container>
      );
    }

    return this.props.children;
  }
}

function logErrorToService(error, errorInfo) {
  // 实现错误日志记录逻辑
}

export default ErrorBoundary;
