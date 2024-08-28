import React from 'react';
import { Box, Typography, Avatar, InputBase, List, ListItem, ListItemAvatar, ListItemText, IconButton, Paper, Stack } from '@mui/material';
import { Search, ArrowBack, Group, AttachFile, InsertEmoticon, Mic } from '@mui/icons-material';

const PreviewPage = () => {
  const contacts = [
    { id: 1, name: 'Lucian Obrien', message: 'You: asdfasdf', time: '2 hours', online: true },
    { id: 2, name: 'Deja Brady', message: 'You: The scent of bloo...', time: '3 hours', online: false },
    { id: 3, name: 'Harrison Stein', message: 'Sent a photo', time: '4 hours', online: true },
    { id: 4, name: 'Reece Chung', message: 'She gazed up at the ni...', time: '2 hours', online: false },
    { id: 5, name: 'Lainey Davidson', message: 'The concert was a me...', time: '2 hours', online: true },
    { id: 6, name: 'Cristopher Cardenas', message: '', time: '3 hours', online: false },
  ];

  const messages = [
    { id: 1, text: 'The concert was a mesmerizing experience, with the music filling the venue and the crowd cheering in delight.', time: '2 hours' },
    { id: 2, text: 'The waves crashed against the shore, creating a soothing symphony of sound.', time: '2 hours' },
    { id: 3, text: 'asdfasdf', time: '2 hours' },
  ];

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#f5f5f5' }}>
      <Box sx={{ width: '35%', borderRight: '1px solid #e0e0e0', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', borderBottom: '1px solid #e0e0e0' }}>
          <Avatar src="https://placehold.co/40x40" alt="User avatar" />
          <Box sx={{ flexGrow: 1 }} />
          <IconButton>
            <ArrowBack />
          </IconButton>
          <IconButton>
            <Group />
          </IconButton>
        </Box>
        <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', m: 2 }}>
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search contacts..." />
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <Search />
          </IconButton>
        </Paper>
        <List sx={{ flexGrow: 1, overflow: 'auto' }}>
          {contacts.map((contact) => (
            <ListItem key={contact.id} sx={{ bgcolor: contact.id === 1 ? '#e0e0e0' : 'transparent' }}>
              <ListItemAvatar>
                <Avatar src={`https://placehold.co/40x40?text=${contact.name[0]}`} alt={`${contact.name} avatar`}>
                  {contact.online && (
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        width: 10,
                        height: 10,
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
                primaryTypographyProps={{ fontWeight: 'bold' }}
                secondaryTypographyProps={{ noWrap: true }}
              />
              <Typography variant="caption" color="text.secondary">
                {contact.time}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', borderBottom: '1px solid #e0e0e0' }}>
          <Avatar src="https://placehold.co/40x40?text=LO" alt="Lucian Obrien avatar" />
          <Box sx={{ ml: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              Lucian Obrien
            </Typography>
            <Typography variant="caption" color="success.main">
              Online
            </Typography>
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1, overflow: 'auto', p: 2, display: 'flex', flexDirection: 'column-reverse' }}>
          {messages.map((message) => (
            <Box
              key={message.id}
              sx={{
                maxWidth: '70%',
                alignSelf: 'flex-end',
                bgcolor: '#e7ffd6',
                borderRadius: 2,
                p: 2,
                mb: 1,
              }}
            >
              <Typography variant="body1">{message.text}</Typography>
              <Typography variant="caption" color="text.secondary" align="right" display="block">
                {message.time}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box sx={{ p: 2, borderTop: '1px solid #e0e0e0', display: 'flex', alignItems: 'center' }}>
          <IconButton>
            <InsertEmoticon />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Type a message" />
          <IconButton>
            <Mic />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default PreviewPage;