import MonacoEditor from '@monaco-editor/react';
import CodeIcon from '@mui/icons-material/Code';
import DownloadIcon from '@mui/icons-material/Download';
import SaveIcon from '@mui/icons-material/Save';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import Switch from '@mui/material/Switch';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { saveAs } from 'file-saver';
import { Button } from '@mui/material';
import React, { Suspense, useEffect, useState } from 'react';
import { useSSE } from 'react-hooks-sse';
import { Outlet } from 'react-router-dom';
import useThrottle from '../hooks/useThrottle';
import CircularProgress from '@mui/material/CircularProgress';
import PageSkeleton from '../components/PageSkeleton';
import DrawIcon from '@mui/icons-material/Draw';
// import { Tldraw, useEditor } from 'tldraw';
// import 'tldraw/tldraw.css';
import Tldraw from '../components/Tldraw';

const StyledTabs = styled(Tabs)(({ theme }) => ({}));

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      sx={{ width: '100%' }}
    >
      {value === index && <Box sx={{ width: '100%' }}>{children}</Box>}
    </Box>
  );
};

const HoldingPage = ({ codeUpdated, isGenerating, setFiles }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [code, setCode] = useState('');
  const [value, setValue] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const state = useSSE(
    'chats',
    {
      code: null,
      lastCode: ''
    },
    {
      stateReducer(prevState, action) {
        if (action.data.value === 'starting') {
          setCode('');
        } else if (action.data.value === 'ending') {
        } else setCode((pre) => pre + action.data.value);
        return {
          code: action.data.value
          // lastCode:
          //   action.data.value !== null && prevState.lastCode + action.data.value
        };
      },
      parser(input) {
        return JSON.parse(input);
      }
    }
  );
  const throttledCode = useThrottle(code, 300);

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/get-code');
        const data = await response.json();
        setCode(data.code);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [codeUpdated]);

  const writeCode = async (code) => {
    try {
      await fetch('http://localhost:3001/update-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code })
      });
      setCode(code);
      setSnackbarOpen(true); // 打开 Snackbar
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ borderBottom: '1px solid #e8e8e8', p: 0 }}>
        <StyledTabs value={value} onChange={handleChange} centered>
          <Tab
            label={'Code'}
            icon={
              isGenerating ? (
                <CircularProgress size={16} sx={{ ml: 1 }} />
              ) : (
                <CodeIcon />
              )
            }
          />
          <Tab label="Preview" icon={<ViewModuleIcon />} />
          <Tab label="tldraw" icon={<DrawIcon />} />
        </StyledTabs>
      </Box>
      {value === 0 && (
        <TabPanel>
          <Box sx={{ p: 2, alignItems: 'center' }}>
            <IconButton onClick={() => writeCode(code)} aria-label="save">
              <SaveIcon />
            </IconButton>
            <IconButton
              onClick={() =>
                saveAs(new Blob([code], { type: 'text/javascript' }), 'code.js')
              }
              aria-label="download"
            >
              <DownloadIcon />
            </IconButton>
            <MonacoEditor
              height="calc(100vh - 260px)"
              width="100%"
              defaultLanguage="javascript"
              defaultValue={code}
              value={throttledCode}
              onChange={(value) => setCode(value)}
              theme="vs-dark"
              options={{
                autoIndent: 'full',
                contextmenu: true,
                fontFamily: 'monospace',
                fontSize: 13,
                lineHeight: 24,
                hideCursorInOverviewRuler: true,
                matchBrackets: 'always',
                minimap: { enabled: true },

                scrollbar: {
                  horizontalSliderSize: 4,
                  verticalSliderSize: 18
                },
                selectOnLineNumbers: true,
                roundedSelection: false,
                readOnly: false,
                // cursorStyle: 'line',
                automaticLayout: true
              }}
            />
          </Box>
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={1000}
            onClose={handleSnackbarClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          >
            <Alert
              onClose={handleSnackbarClose}
              severity="success"
              sx={{ width: '100%' }}
            >
              Save success!
            </Alert>
          </Snackbar>
        </TabPanel>
      )}
      {value === 1 && (
        <TabPanel>
          <Box
            height="calc(100vh - 185px)"
            display="flex"
            justifyContent="center"
            flexDirection="column"
            sx={{ p: 0 }}
          >
            <Box display="flex" alignItems="center" sx={{ pb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={isMobile}
                    onChange={() => setIsMobile(!isMobile)}
                  />
                }
                label="Show Mobile Design"
              />
            </Box>

            <Grid
              container
              justifyContent="center"
              spacing={2}
              sx={{
                backgroundImage:
                  'linear-gradient(to right, #efefef 1px, transparent 1px), linear-gradient(to bottom, #efefef 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                width: isMobile ? '460px' : '100%',
                height: '100%',
                overflow: 'auto',
                alignSelf: 'center',
                borderRadius: 'lg',
                p: 4
              }}
            >
              <Box
                px={4}
                borderRadius="lg"
                width="100%"
                height="100%"
                overflow="scroll"
              >
                <Paper
                  elevation={8}
                  sx={{
                    border: 1,
                    borderColor: 'grey.400' // 使用 MUI 主题颜色
                  }}
                >
                  <Box
                    sx={{
                      minHeight: 'calc(100vh - 310px)',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <Suspense fallback={<Loading />}>
                      {isGenerating ? (
                        <PageSkeleton />
                      ) : (
                        <Outlet codeUpdated={codeUpdated} />
                      )}
                    </Suspense>
                  </Box>
                  {/* <Outlet codeUpdated={codeUpdated} /> */}
                  {/* <Preview code={code} /> */}
                </Paper>
              </Box>
            </Grid>
          </Box>
        </TabPanel>
      )}
      {value === 2 && (
        <TabPanel>
          <Box
            height="calc(100vh - 185px)"
            display="flex"
            justifyContent="center"
            flexDirection="column"
            sx={{ p: 0 }}
          >
            <Tldraw setFiles={setFiles} />
          </Box>
        </TabPanel>
      )}
    </Box>
  );
};

const Loading = () => {
  return <Typography>Loading...</Typography>;
};

export default HoldingPage;
