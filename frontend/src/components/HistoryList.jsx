import React, { useState, memo, useCallback } from 'react';
import { FixedSizeList as List } from 'react-window';
import {
  Box,
  Card,
  IconButton,
  Typography,
  TextField,
  Tooltip
} from '@mui/material';
import {
  FileOpen as FileOpenIcon,
  Search as SearchIcon
} from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from '@mui/styles';
import AutoSizer from 'react-virtualized-auto-sizer';
import axios from 'axios';
import ListItemButton from '@mui/material/ListItemButton';
const useStyles = makeStyles((theme) => ({
  historyItem: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.grey[200]
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50
  },
  commitMessage: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '1',
    WebkitBoxOrient: 'vertical'
  },
  historyItemContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  }
}));

const HistoryList = ({ history }) => {
  const classes = useStyles();
  const [searchText, setSearchText] = useState('');
  const [historyList, setHistoryList] = useState(history);
  const loadHistoryFile = async (commitHash) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/get-history-file/${commitHash}`
      );
      if (response.data) {
        await axios.post('http://localhost:3001/update-code', {
          code: response.data.fileContent
        });
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = useCallback(async (commitHash) => {
    try {
      await axios.delete(`http://localhost:3001/delete-history/${commitHash}`);
      setHistoryList((prevHistory) =>
        prevHistory.filter((item) => item.commitHash !== commitHash)
      );
    } catch (error) {
      console.error('Error deleting history:', error);
    }
  }, []);

  const HistoryItem = memo(({ item }) => {
    const classes = useStyles();

    return (
      <Tooltip title={item.commitMessage} placement="top-start" arrow>
        <ListItemButton>
          <Box
            className={classes.historyItemContent}
            onClick={() => loadHistoryFile(item.commitHash)}
          >
            <Typography sx={{ pl: 1 }} variant="subtitle2">
              {item.commitDate}
            </Typography>
            <Typography
              sx={{ pl: 1 }}
              variant="body2"
              className={classes.commitMessage}
            >
              {item.commitMessage}
            </Typography>
          </Box>
          {/* <IconButton
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(item.commitHash);
            }}
          >
            <DeleteIcon />
          </IconButton> */}
        </ListItemButton>
      </Tooltip>
    );
  });

  const filteredHistory = history.filter(
    (item) =>
      item.commitMessage.toLowerCase().includes(searchText.toLowerCase()) ||
      item.commitDate.toLowerCase().includes(searchText.toLowerCase())
  );

  const RowRenderer = memo(({ index, style }) => {
    const item = filteredHistory[index];

    return (
      <Card key={index} className={classes.historyItem} style={style}>
        <HistoryItem item={item} />
      </Card>
    );
  });

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        borderRadius: 4,
        p: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Change History
      </Typography>
      <Box sx={{ mb: 2, display: 'flex', alignItems: 'flex-end' }}>
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          fullWidth
          variant="standard"
          placeholder="Search commits..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          InputProps={{
            disableUnderline: true,
            sx: { fontSize: '1.1rem' }
          }}
        />
      </Box>

      <Box sx={{ height: `calc(100vh - 175px)`, width: '100%' }}>
        <AutoSizer>
          {({ height, width }) => (
            <List
              height={height}
              itemCount={filteredHistory.length}
              itemSize={60}
              width={width}
              overscanCount={5}
            >
              {RowRenderer}
            </List>
          )}
        </AutoSizer>
      </Box>
    </Box>
  );
};

export default HistoryList;
