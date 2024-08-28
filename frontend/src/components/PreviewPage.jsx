import React, { useState } from 'react';
import { Box, Typography, Avatar, InputBase, List, ListItem, ListItemAvatar, ListItemText, IconButton, Paper, Stack, Tooltip } from '@mui/material';
import { Search, ArrowBack, Group, AttachFile, InsertEmoticon, Mic, Send, MoreVert } from '@mui/icons-material';

const PreviewPage = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Lucian Obrien', message: 'You: asdfasdf', time: '2 hours', online: true },
    { id: 2, name: 'Deja Brady', message: 'You: The scent of bloo...', time: '3 hours', online: false },
    { id: 3, name: 'Harrison Stein', message: 'Sent a photo', time: '4 hours', online: true },
    { id: 4, name: 'Reece Chung', message: 'She gazed up at the ni...', time: '2 hours', online: false },
    { id: 5, name: 'Lainey Davidson', message: 'The concert was a me...', time: '2 hours', online: true },
    { id: 6, name: 'Cristopher Cardenas', message: '', time: '3 hours', online: false },
  ]);

  const [messages, setMessages] = useState([
    { id: 1, text: 'The concert was a mesmerizing experience, with the music filling the venue and the crowd cheering in delight.', time: '2 hours', sent: true },
    { id: 2, text: 'The waves crashed against the shore, creating a soothing symphony of sound.', time: '2 hours', sent: true },
    { id: 3, text: 'asdfasdf', time: '2 hours', sent: true },
  ]);

  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        text: inputMessage,
        time: 'Just now',
        sent: true,
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');
      
      const updatedContacts = contacts.map((contact, index) => 
        index === 0 ? { ...contact, message: `You: ${inputMessage.slice(0, 20)}${inputMessage.length > 20 ? '...' : ''}` } : contact
      );
      setContacts(updatedContacts);
    }
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#f0f2f5' }}>
      <Box sx={{ width: '35%', borderRight: '1px solid #e0e0e0', display: 'flex', flexDirection: 'column', bgcolor: '#ffffff' }}>
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', borderBottom: '1px solid #e0e0e0', bgcolor: '#075e54' }}>
          <Avatar src="https://placehold.co/40x40" alt="User avatar" sx={{ cursor: 'pointer' }} />
          <Box sx={{ flexGrow: 1 }} />
          <Tooltip title="New chat">
            <IconButton sx={{ color: '#ffffff' }}>
              <Group />
            </IconButton>
          </Tooltip>
          <Tooltip title="Menu">
            <IconButton sx={{ color: '#ffffff' }}>
              <MoreVert />
            </IconButton>
          </Tooltip>
        </Box>
        <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', m: 2, borderRadius: '20px', bgcolor: '#f0f2f5' }}>
          <IconButton sx={{ p: '10px' }} aria-label="search">
            <Search />
          </IconButton>
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search or start new chat" />
        </Paper>
        <List sx={{ flexGrow: 1, overflow: 'auto' }}>
          {contacts.map((contact) => (
            <ListItem 
              key={contact.id} 
              sx={{ 
                bgcolor: contact.id === 1 ? '#ebebeb' : 'transparent',
                '&:hover': { bgcolor: '#f5f5f5' },
                cursor: 'pointer',
                borderRadius: '10px',
                my: 0.5,
                mx: 1
              }}
            >
              <ListItemAvatar>
                <Avatar src={`https://placehold.co/40x40?text=${contact.name[0]}`} alt={`${contact.name} avatar`}>
                  {contact.online && (
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        bgcolor: '#4caf50',
                        border: '2px solid white',
                      }}
                    />
                  )}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={contact.name}
                secondary={contact.message}
                primaryTypographyProps={{ fontWeight: 'medium' }}
                secondaryTypographyProps={{ noWrap: true, color: 'text.secondary' }}
              />
              <Typography variant="caption" color="text.secondary">
                {contact.time}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', bgcolor: '#e5ddd5' }}>
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', bgcolor: '#075e54', color: '#ffffff' }}>
          <Avatar src="https://placehold.co/40x40?text=LO" alt="Lucian Obrien avatar" />
          <Box sx={{ ml: 2, flexGrow: 1 }}>
            <Typography variant="subtitle1" fontWeight="medium">
              Lucian Obrien
            </Typography>
            <Typography variant="caption" sx={{ color: '#a5f6cd' }}>
              Online
            </Typography>
          </Box>
          <Tooltip title="Search">
            <IconButton sx={{ color: '#ffffff' }}>
              <Search />
            </IconButton>
          </Tooltip>
          <Tooltip title="More">
            <IconButton sx={{ color: '#ffffff' }}>
              <MoreVert />
            </IconButton>
          </Tooltip>
        </Box>
        <Box sx={{ flexGrow: 1, overflow: 'auto', p: 2, display: 'flex', flexDirection: 'column-reverse' }}>
          {messages.map((message) => (
            <Box
              key={message.id}
              sx={{
                maxWidth: '70%',
                alignSelf: message.sent ? 'flex-end' : 'flex-start',
                bgcolor: message.sent ? '#dcf8c6' : '#ffffff',
                borderRadius: '10px',
                p: 2,
                mb: 1,
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Typography variant="body1">{message.text}</Typography>
              <Typography variant="caption" color="text.secondary" align="right" display="block" sx={{ mt: 0.5 }}>
                {message.time}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box sx={{ p: 2, bgcolor: '#f0f2f5', display: 'flex', alignItems: 'center' }}>
          <Tooltip title="Emojis">
            <IconButton>
              <InsertEmoticon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Attach file">
            <IconButton>
              <AttachFile />
            </IconButton>
          </Tooltip>
          <InputBase 
            sx={{ ml: 1, flex: 1, bgcolor: '#ffffff', borderRadius: '20px', p: '5px 15px' }} 
            placeholder="Type a message" 
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <Tooltip title="Voice message">
            <IconButton>
              <Mic />
            </IconButton>
          </Tooltip>
          <Tooltip title="Send">
            <IconButton onClick={handleSendMessage} sx={{ color: '#075e54' }}>
              <Send />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

export default PreviewPage;