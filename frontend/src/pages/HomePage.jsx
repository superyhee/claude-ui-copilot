import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import HistoryIcon from '@mui/icons-material/History';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import {
  Alert,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Typography
} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Snackbar from '@mui/material/Snackbar';
import { styled, useTheme } from '@mui/material/styles';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { GiPawPrint } from 'react-icons/gi';
import useLocalStorage from '../hooks/useLocalStorage';
import CopilotTab from './CopilotTab';
import HoldingPage from './HoldingPage';
import ModelTab from './ModelTab';
import HistoryList from '../components/HistoryList';
import Logo from '../assets/logo';
const drawerWidth = 450;
const MainAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Main = styled('div')((props) => ({
  flexGrow: 1,
  padding: props.theme.spacing(3),
  transition: props.theme.transitions.create('margin', {
    easing: props.theme.transitions.easing.sharp,
    duration: props.theme.transitions.duration.leavingScreen
  }),
  margin: 0,
  width: `calc(90% - ${drawerWidth}px)`,
  ...(props.open && {
    transition: props.theme.transitions.create('margin', {
      easing: props.theme.transitions.easing.easeOut,
      duration: props.theme.transitions.duration.enteringScreen
    }),
    marginLeft: `-${drawerWidth}px`
  })
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  position: 'sticky',
  top: 0,
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
  backgroundColor: '#f0f0ff',
  boxShadow: theme.shadows[4]
}));

const EmptyHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
}));

const HomePage = () => {
  const theme = useTheme();
  const [prompt, setPrompt] = useState('');
  const [model, setModel] = useLocalStorage(
    'model',
    'anthropic.claude-3-haiku-20240307-v1:0'
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [fileChangeHistory, setFileChangeHistory] = useState([]);
  const [codeUpdated, setCodeUpdated] = useState(false);
  const [template, setTemplate] = useLocalStorage('template', 'React/Mui');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [showRightDrawer, setShowRightDrawer] = useState(false);
  const [topK, setTopK] = useLocalStorage('top_k', 250);
  const [temperature, setTemperature] = useLocalStorage('temperature', 0.9);
  const [topP, setTopP] = useLocalStorage('top_p', 0.9);
  const [provider, setProvider] = useLocalStorage('Bedrock', 'Bedrock');

  const toggleRightDrawer = () => {
    setShowRightDrawer(!showRightDrawer);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (option) => {
    setTemplate(option);
    newPage(option);
    handleClose();
  };

  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  const [drawerOpen, setDrawerOpen] = useState(true);
  const [isCodeChanged, setIsCodeChanged] = useState(true);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [severity, setSeverity] = useState('success');

  const handleCodeChanged = () => {
    setCodeUpdated(!codeUpdated);
  };

  const handleSnackbarOpen = (message, severity = 'success') => {
    setSnackbarMessage(message);
    setSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/get-history');
        setFileChangeHistory(response.data.history);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [isCodeChanged]);

  // useEffect(() => {
  //  newPage();
  // }, [useShadcnUI]);

  const newPage = async (ui) => {
    try {
      console.log(ui);
      const response = await axios.post('http://localhost:3001/new-page', {
        ui
      });
      if (response.data.success) {
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <MainAppBar
        position="fixed"
        sx={{ backgroundColor: '#f0f0ff' }}
        open={drawerOpen}
      >
        <Toolbar>
          <IconButton
            edge="start"
            onClick={handleDrawerOpen}
            color="black"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            {!drawerOpen && <FormatAlignRightIcon />}
          </IconButton>
          <IconButton
            edge="end"
            color="black"
            onClick={toggleRightDrawer}
            sx={{ ml: 'auto' }}
          >
            <HistoryIcon />
          </IconButton>
        </Toolbar>
      </MainAppBar>
      <Drawer
        variant="persistent"
        anchor="left"
        open={drawerOpen}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box'
          }
        }}
      >
        <DrawerHeader>
          <Stack
            sx={{ width: '100%', m: 1 }}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
          >
            <Logo />

            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, color: '#000000', fontWeight: 'bold' }}
              gutterBottom
            >
              UI Copilot
            </Typography>
          </Stack>
          <IconButton
            edge="start"
            onClick={handleDrawerOpen}
            color="black"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            {drawerOpen && <FormatAlignLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Box
          sx={{
            width: '100%',
            height: 'calc(100vh - 64px)',
            overflowY: 'auto',
            p: 1.5,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Tabs value={tabValue} onChange={handleTabChange}>
            <Tab label="Copilot" />
            <Tab label="Model" />
          </Tabs>
          {tabValue === 0 && (
            <CopilotTab
              history={fileChangeHistory}
              prompt={prompt}
              setPrompt={setPrompt}
              isGenerating={isGenerating}
              setIsGenerating={setIsGenerating}
              template={template}
              setTemplate={setTemplate}
              handleCodeChanged={handleCodeChanged}
              model={model}
              handleSnackbarOpen={handleSnackbarOpen}
              topK={topK}
              topP={topP}
              temperature={temperature}
              provider={provider}
              setIsCodeChanged={setIsCodeChanged}
            />
          )}
          {tabValue === 1 && (
            <ModelTab
              model={model}
              setModel={setModel}
              topK={topK}
              setTopK={setTopK}
              topP={topP}
              setTopP={setTopP}
              temperature={temperature}
              setTemperature={setTemperature}
              provider={provider}
              setProvider={setProvider}
            />
          )}
        </Box>
      </Drawer>
      <Main open={!drawerOpen}>
        <EmptyHeader />
        {/* <Box
          sx={{
            width: !drawerOpen ? '100vw' : `calc(100vw - ${drawerWidth}px)`
          }}
        /> */}

        <HoldingPage isGenerating={isGenerating} />

        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>About</DialogTitle>
          <DialogContent>
            <Typography variant="body1"></Typography>
          </DialogContent>
        </Dialog>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity={severity}
            sx={{ width: '100%' }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Main>
      <Drawer anchor="right" open={showRightDrawer} onClose={toggleRightDrawer}>
        <Box sx={{ width: 300, p: 0 }}>
          {/* <Typography variant="subtitle1" gutterBottom>
            Change History
          </Typography> */}
          <HistoryList history={fileChangeHistory} />
        </Box>
      </Drawer>
    </Box>
  );
};

export default HomePage;
