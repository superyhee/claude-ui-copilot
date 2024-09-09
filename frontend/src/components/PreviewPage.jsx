import React from 'react';
import { Box, Typography, TextField, Button, IconButton, Menu, MenuItem, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';

const PreviewPage = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ width: '100%', height: '100vh', backgroundColor: '#ffffff' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 16px', borderBottom: '1px solid #e0e0e0' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <img src="https://placehold.co/100x30?text=Amazon+A+to+Z" alt="Amazon A to Z logo" style={{ height: '30px', marginLeft: '8px' }} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '16px' }}>
            <HelpOutlineIcon sx={{ marginRight: '4px' }} />
            <Typography variant="body2">Help</Typography>
            <ExpandMoreIcon />
          </Box>
          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>
          <IconButton onClick={handleClick}>
            <Avatar src="https://placehold.co/40x40" alt="User avatar" sx={{ width: 32, height: 32 }} />
            <ExpandMoreIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Box>
      <Box sx={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5" sx={{ marginBottom: '16px' }}>Good afternoon, Yang!</Typography>
        <Box sx={{ display: 'flex', width: '100%', maxWidth: '600px', marginBottom: '16px' }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search or ask a question"
            InputProps={{
              startAdornment: <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />,
            }}
            sx={{ backgroundColor: 'white' }}
          />
          <Button variant="contained" sx={{ marginLeft: '8px', backgroundColor: '#7e57c2', '&:hover': { backgroundColor: '#5e35b1' } }}>
            Ask A to Z
          </Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2" sx={{ marginRight: '8px' }}>Favorites:</Typography>
          {['Leadership Principles', 'Book travel', 'Book travel', 'Benefits'].map((item, index) => (
            <Typography key={index} variant="body2" sx={{ marginRight: '8px', textDecoration: 'underline', color: '#1976d2' }}>
              {item}
            </Typography>
          ))}
          <IconButton size="small">
            <Typography variant="h6" sx={{ color: '#1976d2' }}>+</Typography>
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default PreviewPage;