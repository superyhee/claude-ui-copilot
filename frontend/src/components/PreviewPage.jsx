import React, { useState } from 'react';
import { Box, Typography, Stack, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Checkbox, Select, MenuItem, FormControl, InputLabel, Paper, Container, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');
  const [editingTask, setEditingTask] = useState(null);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const startEditing = (task) => {
    setEditingTask(task);
  };

  const saveEdit = (id, newText) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    ));
    setEditingTask(null);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4, backgroundColor: '#ffffff' }}>
        <Stack spacing={3}>
          <Typography variant="h4" align="center" color="primary">
            My Todo List
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField
              fullWidth
              variant="standard"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add a new task"
              sx={{ mr: 1 }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={addTask}
              startIcon={<AddIcon />}
            >
              Add
            </Button>
          </Box>
          <FormControl fullWidth>
            <InputLabel id="filter-label">Filter</InputLabel>
            <Select
              labelId="filter-label"
              value={filter}
              label="Filter"
              onChange={(e) => setFilter(e.target.value)}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
            </Select>
          </FormControl>
          <Divider />
          <List>
            {filteredTasks.map((task) => (
              <ListItem
                key={task.id}
                dense
                button
                sx={{
                  borderRadius: 1,
                  mb: 1,
                  backgroundColor: task.completed ? '#e8f5e9' : '#fff',
                  '&:hover': { backgroundColor: '#f5f5f5' },
                }}
              >
                <Checkbox
                  edge="start"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                  sx={{ color: task.completed ? 'success.main' : 'inherit' }}
                />
                {editingTask && editingTask.id === task.id ? (
                  <TextField
                    fullWidth
                    value={editingTask.text}
                    onChange={(e) => setEditingTask({ ...editingTask, text: e.target.value })}
                    onBlur={() => saveEdit(task.id, editingTask.text)}
                    autoFocus
                  />
                ) : (
                  <ListItemText
                    primary={task.text}
                    sx={{
                      textDecoration: task.completed ? 'line-through' : 'none',
                      color: task.completed ? 'text.secondary' : 'text.primary',
                    }}
                  />
                )}
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    onClick={() => startEditing(task)}
                    sx={{ mr: 1 }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => deleteTask(task.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Stack>
      </Paper>
    </Container>
  );
};

export default TodoApp;