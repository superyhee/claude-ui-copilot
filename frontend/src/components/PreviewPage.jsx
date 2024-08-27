import React, { useState } from 'react';
import { Box, Typography, Stack, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Checkbox, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');
  const [editingTask, setEditingTask] = useState(null);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const startEditing = (task) => {
    setEditingTask(task);
    setNewTask(task.text);
  };

  const saveEdit = () => {
    setTasks(tasks.map(task =>
      task.id === editingTask.id ? { ...task, text: newTask } : task
    ));
    setEditingTask(null);
    setNewTask('');
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100%', minHeight: '100vh' }}>
      <Stack alignItems="center" spacing={3}>
        <Typography variant="h4" color="primary">Todo List</Typography>
        
        <Box sx={{ display: 'flex', width: '100%', maxWidth: 500, gap: 2 }}>
          <TextField
            fullWidth
            variant="outlined"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
          />
          <Button
            variant="contained"
            onClick={editingTask ? saveEdit : addTask}
          >
            {editingTask ? 'Save' : 'Add'}
          </Button>
        </Box>

        <FormControl sx={{ m: 1, minWidth: 120 }}>
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

        <List sx={{ width: '100%', maxWidth: 500 }}>
          {filteredTasks.map((task) => (
            <ListItem
              key={task.id}
              secondaryAction={
                <Stack direction="row" spacing={1}>
                  <IconButton edge="end" aria-label="edit" onClick={() => startEditing(task)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete" onClick={() => deleteTask(task.id)}>
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              }
            >
              <Checkbox
                edge="start"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <ListItemText 
                primary={task.text} 
                sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              />
            </ListItem>
          ))}
        </List>
      </Stack>
    </Box>
  );
};

export default TodoList;