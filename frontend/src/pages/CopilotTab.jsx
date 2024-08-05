import PromptTemplates from '@/components/PromptTemplates';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Box,
  Button,
  FormControlLabel,
  Menu,
  MenuItem,
  Stack,
  Switch,
  TextField
} from '@mui/material';
import axios from 'axios';
import classNames from 'classnames';
import React, { useState } from 'react';
import UploadFiles from '../components/upload/UploadFiles';
import useLocalStorage from '../hooks/useLocalStorage';

const CopilotTab = ({
  prompt,
  setPrompt,
  isGenerating,
  setIsGenerating,
  template,
  setTemplate,
  model,
  topK,
  topP,
  temperature,
  handleSnackbarOpen,
  setIsCodeChanged,
  provider,
  files,
  setFiles
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const [openDialog, setOpenDialog] = useState(false);
  const [snapshot, setSnapshot] = useLocalStorage(false);
  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrop = (file) => {
    setFiles([...files, file]);
  };

  const handleMenuItemClick = (option) => {
    setTemplate(option);
    newPage(option);
    handleClose();
  };

  const newPage = async (ui) => {
    try {
      setIsGenerating(true);
      const response = await axios.post('http://localhost:3001/new-page', {
        ui
      });
      setIsGenerating(false);
      if (response.data.success) {
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
      setIsGenerating(false);
    }
  };

  const handleGenerateCode = async () => {
    try {
      setIsGenerating(true);
      let formData = new FormData();
      if (snapshot) files.forEach((file) => formData.append('images', file));
      formData.append('prompt', prompt);
      formData.append('model', model);
      formData.append('template', template);
      formData.append('top_k', topK);
      formData.append('top_p', topP);
      formData.append('temperature', temperature);
      formData.append('provider', provider);
      console.log(formData);
      const response = await axios.post(
        'http://localhost:3001/generate-code',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      setIsGenerating(false);
      setPrompt('');
      setFiles([]);
      handleSnackbarOpen('Page generate success');
      if (response.data.success) {
        window.location.reload();
      }
    } catch (error) {
      setIsGenerating(false);
      handleSnackbarOpen(error.response.data.error, 'error');
      console.error(error.response.data.error);
    }
  };

  return (
    <Box sx={{ m: 1 }}>
      {/* <HistoryList history={history} /> */}
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1.5 }}>
        <FormControlLabel
          control={
            <Switch
              checked={snapshot}
              onChange={(e) => setSnapshot(e.target.checked)}
            />
          }
          label="Screenshot"
        />
        {/* {isGenerating && <Typography>Generating Code</Typography>} */}
      </Box>
      <Box
        sx={{ width: '100%' }}
        className={classNames({
          'scanning relative': isGenerating
        })}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mt: 0
          }}
        >
          {snapshot ? (
            <UploadFiles files={files} setFiles={setFiles} />
          ) : (
            <TextField
              // label="Enter your prompt here"
              value={prompt}
              placeholder="Enter your prompt"
              onChange={(e) => setPrompt(e.target.value)}
              fullWidth
              autoFocus
              multiline
              variant="outlined"
              rows={6}
            />
          )}
        </Box>
      </Box>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ m: 3 }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<PostAddIcon />}
          aria-label="more"
          id="long-button"
          aria-controls="long-menu"
          aria-expanded={Boolean(anchorEl)}
          aria-haspopup="true"
          onClick={handleClick}
          disabled={isGenerating}
          // sx={{
          //   backgroundColor: '#333',
          //   '&:hover': { backgroundColor: '#555' }
          // }}
          // sx={{ backgroundColor: '#FF9900', color: '#FFFFFF' }}
        >
          New Page
        </Button>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'long-button'
          }}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
        >
          <MenuItem onClick={() => handleMenuItemClick('React/Mui')}>
            Material Page
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('React/Tailwind')}>
            Tailwind Page
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('React/Mermaid')}>
            Mermaid Diagram
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('React/Plotly')}>
            Poltly Diagram
          </MenuItem>
        </Menu>
        <LoadingButton
          variant="contained"
          startIcon={<AutoFixHighIcon />}
          disabled={!prompt && files.length === 0}
          onClick={handleGenerateCode}
          loading={isGenerating}
          // sx={{
          //   backgroundColor: '#333',
          //   '&:hover': { backgroundColor: '#555' }
          // }}
        >
          Generate Code
        </LoadingButton>
      </Stack>
      <PromptTemplates setPrompt={setPrompt} template={template} />
    </Box>
  );
};

export default CopilotTab;
