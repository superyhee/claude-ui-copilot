import React, { useState } from 'react';
import { Box, Typography, Stack, TextField, Button } from '@mui/material';

const PreviewPage = () => {
  const [conversation, setConversation] = useState('');
  const [prompt, setPrompt] = useState('');

  const handleNewConversation = () => {
    setConversation('New Conversation');
  };

  const handleSubmitPrompt = () => {
    // Handle submit prompt logic here
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#f5f5f5' }}>
      <Box sx={{ p: 2, backgroundColor: '#ffffff', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Mediasearch Q Business</Typography>
          <Button variant="contained" color="primary" sx={{ borderRadius: 2 }}>
            Signout
          </Button>
        </Stack>
      </Box>
      <Box sx={{ p: 2, display: 'flex', flexDirection: 'row', height: '100%' }}>
        <Box sx={{ width: '25%', borderRight: '1px solid #e0e0e0', pr: 2 }}>
          <Typography variant="subtitle1">Welcome</Typography>
          <Box sx={{ my: 2 }}>
            <Typography variant="body2" color="textSecondary">
              Previous conversations appear here
            </Typography>
          </Box>
          <Button variant="outlined" color="primary" onClick={handleNewConversation}>
            New Conversation
          </Button>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1">{conversation}</Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2">How have customers built MLOps platforms on AWS?</Typography>
          </Box>
        </Box>
        <Box sx={{ pl: 4, width: '75%' }}>
          <Typography variant="h5">Amazon Q</Typography>
          <Typography variant="subtitle1" sx={{ mt: 1 }}>
            Your generative AI assistant for work
          </Typography>
          <Box sx={{ mt: 2, backgroundColor: '#ffffff', p: 2, borderRadius: 2, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' }}>
            <Typography variant="body1">I'm your AI assistant. Enter a prompt to start a conversation. I'll respond using data from within your organization.</Typography>
          </Box>
          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
            <TextField
              placeholder="Enter a prompt"
              variant="outlined"
              fullWidth
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <Button variant="contained" color="primary" sx={{ ml: 2, borderRadius: 2 }} onClick={handleSubmitPrompt}>
              <img src="https://placehold.co/20x20" alt="Submit Prompt Icon" />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PreviewPage;