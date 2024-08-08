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
  IconButton,
  TablePagination,
  TableSortLabel,
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon, Add as AddIcon, Search as SearchIcon } from '@mui/icons-material';

const PreviewPage = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [orderBy, setOrderBy] = useState('name');
  const [order, setOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Mock data
    const mockData = [
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer' },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager' },
      { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Tester' },
      { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', role: 'Developer' },
    ];
    setData(mockData);
  }, []);

  const handleOpen = (item = null) => {
    setEditItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setEditItem(null);
    setOpen(false);
  };

  const handleSave = (newItem) => {
    if (editItem) {
      setData(data.map((item) => (item.id === editItem.id ? newItem : item)));
    } else {
      setData([...data, { ...newItem, id: data.length + 1 }]);
    }
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

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const sortedData = filteredData.sort((a, b) => {
    if (a[orderBy] < b[orderBy]) return order === 'asc' ? -1 : 1;
    if (a[orderBy] > b[orderBy]) return order === 'asc' ? 1 : -1;
    return 0;
  });

  const paginatedData = sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100%' }}>
      <Stack spacing={4}>
        <Typography variant="h4" align="center">Employee Management</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button variant="contained" startIcon={<AddIcon />} onClick={() => handleOpen()}>
            Add Employee
          </Button>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            InputProps={{
              startAdornment: <SearchIcon sx={{ color: 'action.active', mr: 1 }} />,
            }}
            value={searchTerm}
            onChange={handleSearch}
          />
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'name'}
                    direction={orderBy === 'name' ? order : 'asc'}
                    onClick={() => handleSort('name')}
                  >
                    Name
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'email'}
                    direction={orderBy === 'email' ? order : 'asc'}
                    onClick={() => handleSort('email')}
                  >
                    Email
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'role'}
                    direction={orderBy === 'role' ? order : 'asc'}
                    onClick={() => handleSort('role')}
                  >
                    Role
                  </TableSortLabel>
                </TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.role}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleOpen(item)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Stack>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editItem ? 'Edit Employee' : 'Add Employee'}</DialogTitle>
        <DialogContent>
          <EmployeeForm item={editItem} onSave={handleSave} onCancel={handleClose} />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

const EmployeeForm = ({ item, onSave, onCancel }) => {
  const [name, setName] = useState(item?.name || '');
  const [email, setEmail] = useState(item?.email || '');
  const [role, setRole] = useState(item?.role || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: item?.id, name, email, role });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} sx={{ mt: 2 }}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
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