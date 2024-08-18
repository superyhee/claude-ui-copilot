import React, { useState, useEffect } from 'react';
import { Box, Typography, Stack, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const PreviewPage = () => {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [editRow, setEditRow] = useState(null);
  const [newRow, setNewRow] = useState({ name: '', age: '', email: '' });

  useEffect(() => {
    // Mock data
    const mockData = [
      { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
      { id: 3, name: 'Bob Johnson', age: 35, email: 'bob@example.com' },
    ];
    setRows(mockData);
  }, []);

  const columns = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'age', headerName: 'Age', width: 100 },
    { field: 'email', headerName: 'Email', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          <IconButton onClick={() => handleEdit(params.row)} size="small">
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleDelete(params.row.id)} size="small">
            <DeleteIcon />
          </IconButton>
        </Stack>
      ),
    },
  ];

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setEditRow(null);
    setNewRow({ name: '', age: '', email: '' });
  };

  const handleEdit = (row) => {
    setEditRow(row);
    setNewRow(row);
    handleOpen();
  };

  const handleDelete = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleSave = () => {
    if (editRow) {
      setRows(rows.map((row) => (row.id === editRow.id ? { ...row, ...newRow } : row)));
    } else {
      setRows([...rows, { id: rows.length + 1, ...newRow }]);
    }
    handleClose();
  };

  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100%' }}>
      <Stack spacing={4}>
        <Typography variant="h4" align="center">Data Grid Example</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpen}>
            Add New Record
          </Button>
        </Box>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
          disableSelectionOnClick
          autoHeight
          sx={{ backgroundColor: 'white' }}
        />
      </Stack>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editRow ? 'Edit Record' : 'Add New Record'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            fullWidth
            value={newRow.name}
            onChange={(e) => setNewRow({ ...newRow, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Age"
            fullWidth
            value={newRow.age}
            onChange={(e) => setNewRow({ ...newRow, age: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Email"
            fullWidth
            value={newRow.email}
            onChange={(e) => setNewRow({ ...newRow, email: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PreviewPage;