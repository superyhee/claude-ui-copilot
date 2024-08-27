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
} from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon, Add as AddIcon, Search as SearchIcon } from '@mui/icons-material';

const PreviewPage = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Mock data
    const mockData = [
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer' },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager' },
      { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Tester' },
      { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', role: 'Developer' },
      { id: 6, name: 'Eva White', email: 'eva@example.com', role: 'Designer' },
    ];
    setData(mockData);
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleOpenDialog = (record = null) => {
    setEditingRecord(record);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setEditingRecord(null);
    setOpenDialog(false);
  };

  const handleSave = (newRecord) => {
    if (editingRecord) {
      setData(data.map(item => item.id === editingRecord.id ? newRecord : item));
    } else {
      setData([...data, { ...newRecord, id: Date.now() }]);
    }
    handleCloseDialog();
  };

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  const filteredData = data.filter(item =>
    Object.values(item).some(value => 
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100%' }}>
      <Stack spacing={2}>
        <Typography variant="h4" align="center" gutterBottom>
          Employee Data Grid
        </Typography>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => handleOpenDialog()}
          >
            Add New Employee
          </Button>
          <TextField
            variant="outlined"
            placeholder="Search..."
            InputProps={{
              startAdornment: <SearchIcon color="action" />,
            }}
            onChange={handleSearch}
          />
        </Stack>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.role}</TableCell>
                    <TableCell align="right">
                      <IconButton onClick={() => handleOpenDialog(row)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(row.id)}>
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
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{editingRecord ? 'Edit Employee' : 'Add New Employee'}</DialogTitle>
        <DialogContent>
          <EmployeeForm
            initialData={editingRecord}
            onSave={handleSave}
            onCancel={handleCloseDialog}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

const EmployeeForm = ({ initialData, onSave, onCancel }) => {
  const [formData, setFormData] = useState(initialData || { name: '', email: '', role: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          name="role"
          label="Role"
          value={formData.role}
          onChange={handleChange}
          fullWidth
          required
        />
        <DialogActions>
          <Button onClick={onCancel}>Cancel</Button>
          <Button type="submit" variant="contained">Save</Button>
        </DialogActions>
      </Stack>
    </form>
  );
};

export default PreviewPage;