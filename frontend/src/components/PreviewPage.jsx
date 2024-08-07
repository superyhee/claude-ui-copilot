import React, { useState, useEffect } from 'react';
import { Box, Typography, Stack, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, createTheme, ThemeProvider } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f0f4f8',
      paper: '#ffffff',
    },
  },
});

const PreviewPage = () => {
  const [rows, setRows] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingRow, setEditingRow] = useState(null);
  const [formData, setFormData] = useState({ name: '', age: '', email: '' });

  useEffect(() => {
    const mockData = [
      { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', age: 28, email: 'jane@example.com' },
      { id: 3, name: 'Bob Johnson', age: 35, email: 'bob@example.com' },
    ];
    setRows(mockData);
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 200, editable: true },
    { field: 'age', headerName: 'Age', type: 'number', width: 100, editable: true },
    { field: 'email', headerName: 'Email', width: 230, editable: true },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      renderCell: (params) => (
        <Stack direction="row">
          <IconButton onClick={() => handleEdit(params.row)} color="primary">
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleDelete(params.row.id)} color="secondary">
            <DeleteIcon />
          </IconButton>
        </Stack>
      ),
    },
  ];

  const handleOpenDialog = () => {
    setOpenDialog(true);
    setEditingRow(null);
    setFormData({ name: '', age: '', email: '' });
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (editingRow) {
      setRows(rows.map((row) => (row.id === editingRow.id ? { ...row, ...formData } : row)));
    } else {
      const newRow = { id: rows.length + 1, ...formData };
      setRows([...rows, newRow]);
    }
    handleCloseDialog();
  };

  const handleEdit = (row) => {
    setEditingRow(row);
    setFormData({ name: row.name, age: row.age, email: row.email });
    setOpenDialog(true);
  };

  const handleDelete = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ p: 4, backgroundColor: 'background.default', minHeight: '100vh' }}>
        <Stack spacing={4}>
          <Typography variant="h4" align="center" color="primary">
            Data Grid Example
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleOpenDialog}
            sx={{ alignSelf: 'flex-end' }}
          >
            Add New Record
          </Button>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            checkboxSelection
            disableSelectionOnClick
            components={{
              Toolbar: GridToolbar,
            }}
            sx={{
              backgroundColor: 'background.paper',
              boxShadow: 3,
              border: 1,
              borderColor: 'primary.light',
              '& .MuiDataGrid-cell:hover': {
                color: 'primary.main',
              },
            }}
          />
        </Stack>

        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle color="primary">{editingRow ? 'Edit Record' : 'Add New Record'}</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="name"
              label="Name"
              type="text"
              fullWidth
              variant="outlined"
              value={formData.name}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              name="age"
              label="Age"
              type="number"
              fullWidth
              variant="outlined"
              value={formData.age}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              name="email"
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
              value={formData.email}
              onChange={handleInputChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} variant="contained" color="primary">
              {editingRow ? 'Save' : 'Add'}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
};

export default PreviewPage;