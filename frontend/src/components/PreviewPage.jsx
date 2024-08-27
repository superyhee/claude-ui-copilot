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
  Container,
  Avatar,
  Chip,
  Tooltip,
} from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon, Add as AddIcon, Search as SearchIcon } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

const PreviewPage = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const mockData = [
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer', avatar: 'https://placehold.co/100x100?text=JD' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer', avatar: 'https://placehold.co/100x100?text=JS' },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager', avatar: 'https://placehold.co/100x100?text=BJ' },
      { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Tester', avatar: 'https://placehold.co/100x100?text=AB' },
      { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', role: 'Developer', avatar: 'https://placehold.co/100x100?text=CD' },
      { id: 6, name: 'Eva White', email: 'eva@example.com', role: 'Designer', avatar: 'https://placehold.co/100x100?text=EW' },
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
      setData(data.map(item => item.id === editingRecord.id ? { ...newRecord, avatar: editingRecord.avatar } : item));
    } else {
      setData([...data, { ...newRecord, id: Date.now(), avatar: `https://placehold.co/100x100?text=${newRecord.name.split(' ').map(n => n[0]).join('')}` }]);
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
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh', py: 4 }}>
        <Container maxWidth="lg">
          <Stack spacing={4}>
            <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              Employee Data Grid
            </Typography>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={() => handleOpenDialog()}
                sx={{ borderRadius: 20, px: 3 }}
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
                sx={{ width: 300, '& .MuiOutlinedInput-root': { borderRadius: 20 } }}
              />
            </Stack>
            <TableContainer component={Paper} elevation={3} sx={{ borderRadius: 2 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Avatar</TableCell>
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
                      <TableRow key={row.id} hover>
                        <TableCell>
                          <Avatar src={row.avatar} alt={`Avatar of ${row.name}`} />
                        </TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>
                          <Chip label={row.role} color="primary" variant="outlined" />
                        </TableCell>
                        <TableCell align="right">
                          <Tooltip title="Edit">
                            <IconButton onClick={() => handleOpenDialog(row)} color="primary">
                              <EditIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Delete">
                            <IconButton onClick={() => handleDelete(row.id)} color="secondary">
                              <DeleteIcon />
                            </IconButton>
                          </Tooltip>
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
              sx={{ display: 'flex', justifyContent: 'center' }}
            />
          </Stack>
          <Dialog open={openDialog} onClose={handleCloseDialog} PaperProps={{ sx: { borderRadius: 2 } }}>
            <DialogTitle>{editingRecord ? 'Edit Employee' : 'Add New Employee'}</DialogTitle>
            <DialogContent>
              <EmployeeForm
                initialData={editingRecord}
                onSave={handleSave}
                onCancel={handleCloseDialog}
              />
            </DialogContent>
          </Dialog>
        </Container>
      </Box>
    </ThemeProvider>
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
      <Stack spacing={3} sx={{ mt: 2, minWidth: 300 }}>
        <TextField
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
          variant="outlined"
        />
        <TextField
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          variant="outlined"
        />
        <TextField
          name="role"
          label="Role"
          value={formData.role}
          onChange={handleChange}
          fullWidth
          required
          variant="outlined"
        />
        <DialogActions sx={{ px: 0, pb: 0 }}>
          <Button onClick={onCancel} variant="outlined">Cancel</Button>
          <Button type="submit" variant="contained">Save</Button>
        </DialogActions>
      </Stack>
    </form>
  );
};

export default PreviewPage;