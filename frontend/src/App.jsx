import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import React, { lazy, Suspense, useState } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
const PreviewPage = lazy(() => import('./components/PreviewPage'));
import { SSEProvider } from 'react-hooks-sse';

import { lightTheme, darkTheme } from './theme/theme.jsx';
const theme = createTheme();

function App() {
  const [mode, setMode] = useState('light');

  const theme = createTheme(mode === 'light' ? lightTheme : darkTheme);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <SSEProvider endpoint="http://localhost:3001/sse">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />}>
              <Route
                path="/"
                element={
                  <ErrorBoundary>
                    <Suspense fallback={<div>Loading...</div>}>
                      <PreviewPage />
                    </Suspense>
                  </ErrorBoundary>
                }
              />
            </Route>
          </Routes>
        </Router>
      </SSEProvider>
    </ThemeProvider>
  );
}

export default App;
