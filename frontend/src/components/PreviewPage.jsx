import { useState } from 'react';
import {
  Box,
  Typography,
  Stack,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TableSortLabel,
} from '@mui/material';

const PreviewPage = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
    // Add more mock data as needed
  ]);

  const [newRecord, setNewRecord] = useState({ name: '', email: '' });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');
  const [searchQuery, setSearchQuery] = useState('');

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
    setSearchQuery(event.target.value);
  };

  const handleAddRecord = () => {
    const newId = data.length + 1;
    const newEntry = { id: newId, ...newRecord };
    setData([...data, newEntry]);
    setNewRecord({ name: '', email: '' });
  };

  const handleEditRecord = (id, updatedRecord) => {
    const updatedData = data.map((record) => (record.id === id ? updatedRecord : record));
    setData(updatedData);
  };

  const handleDeleteRecord = (id) => {
    const updatedData = data.filter((record) => record.id !== id);
    setData(updatedData);
  };

  const filteredData = data.filter(
    (record) =>
      record.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedData = filteredData.sort((a, b) => {
    const orderDirection = order === 'asc' ? 1 : -1;
    if (a[orderBy] < b[orderBy]) return -1 * orderDirection;
    if (a[orderBy] > b[orderBy]) return 1 * orderDirection;
    return 0;
  });

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - sortedData.length) : 0;

  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100%' }}>
      <Stack alignItems="center" spacing={2} mb={4}>
        <Typography variant="h5">Data Grid</Typography>
      </Stack>

      <Box mb={2}>
        <TextField
          label="Search"
          value={searchQuery}
          onChange={handleSearch}
          variant="outlined"
          size="small"
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
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : sortedData
            ).map((record) => (
              <TableRow key={record.id}>
                <TableCell>{record.name}</TableCell>
                <TableCell>{record.email}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleEditRecord(record.id, { ...record, name: 'Updated Name' })}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDeleteRecord(record.id)}
                    sx={{ ml: 1 }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={3} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={sortedData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      <Box mt={4}>
        <Typography variant="h6" mb={2}>
          Add New Record
        </Typography>
        <Stack direction="row" spacing={2}>
          <TextField
            label="Name"
            value={newRecord.name}
            onChange={(e) => setNewRecord({ ...newRecord, name: e.target.value })}
          />
          <TextField
            label="Email"
            value={newRecord.email}
            onChange={(e) => setNewRecord({ ...newRecord, email: e.target.value })}
          />
          <Button variant="contained" color="primary" onClick={handleAddRecord}>
            Add
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default PreviewPage;