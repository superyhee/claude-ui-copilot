import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Stack,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  IconButton,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon, Search as SearchIcon } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f0f2f5',
      paper: '#ffffff',
    },
  },
});

const initialData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager' },
];

const PreviewPage = () => {
  const [data, setData] = useState(initialData);
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [newItem, setNewItem] = useState({ name: '', email: '', role: '' });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setEditItem(null);
    setNewItem({ name: '', email: '', role: '' });
  };

  const handleAdd = () => {
    setData([...data, { ...newItem, id: data.length + 1 }]);
    handleClose();
  };

  const handleEdit = (item) => {
    setEditItem(item);
    setNewItem(item);
    handleOpen();
  };

  const handleUpdate = () => {
    setData(data.map((item) => (item.id === editItem.id ? newItem : item)));
    handleClose();
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const sortedData = filteredData.sort((a, b) => a.name.localeCompare(b.name));

  const paginatedData = sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ p: 4, backgroundColor: 'background.default', minHeight: '100vh' }}>
        <Stack spacing={4}>
          <Typography variant="h4" align="center" gutterBottom color="primary">
            Employee Management System
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpen} color="secondary">
              Add Employee
            </Button>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: <SearchIcon color="action" />,
              }}
            />
          </Box>
          <TableContainer component={Paper} elevation={3}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'primary.light', color: 'primary.contrastText' }}>Name</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'primary.light', color: 'primary.contrastText' }}>Email</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'primary.light', color: 'primary.contrastText' }}>Role</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'primary.light', color: 'primary.contrastText' }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedData.map((item) => (
                  <TableRow key={item.id} hover>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.role}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleEdit(item)} color="primary">
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(item.id)} color="error">
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            count={filteredData.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Stack>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}>
            {editItem ? 'Edit Employee' : 'Add Employee'}
          </DialogTitle>
          <DialogContent>
            <Stack spacing={2} sx={{ pt: 2 }}>
              <TextField
                label="Name"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                fullWidth
              />
              <TextField
                label="Email"
                value={newItem.email}
                onChange={(e) => setNewItem({ ...newItem, email: e.target.value })}
                fullWidth
              />
              <TextField
                label="Role"
                value={newItem.role}
                onChange={(e) => setNewItem({ ...newItem, role: e.target.value })}
                fullWidth
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={editItem ? handleUpdate : handleAdd} variant="contained" color="secondary">
              {editItem ? 'Update' : 'Add'}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
};

export default PreviewPage;