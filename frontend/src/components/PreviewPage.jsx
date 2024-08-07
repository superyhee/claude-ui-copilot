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
  Select,
  MenuItem,
} from '@mui/material';
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon, Search as SearchIcon, Language as LanguageIcon } from '@mui/icons-material';

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

const translations = {
  en: {
    title: 'Employee Management System',
    addEmployee: 'Add Employee',
    search: 'Search...',
    name: 'Name',
    email: 'Email',
    role: 'Role',
    actions: 'Actions',
    edit: 'Edit Employee',
    cancel: 'Cancel',
    update: 'Update',
    add: 'Add',
  },
  zh: {
    title: '员工管理系统',
    addEmployee: '添加员工',
    search: '搜索...',
    name: '姓名',
    email: '邮箱',
    role: '职位',
    actions: '操作',
    edit: '编辑员工',
    cancel: '取消',
    update: '更新',
    add: '添加',
  },
};

const PreviewPage = () => {
  const [data, setData] = useState(initialData);
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [newItem, setNewItem] = useState({ name: '', email: '', role: '' });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [language, setLanguage] = useState('en');

  const t = translations[language];

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
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h4" color="primary">
              {t.title}
            </Typography>
            <Select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              size="small"
              sx={{ minWidth: 100 }}
              startAdornment={<LanguageIcon sx={{ mr: 1 }} />}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="zh">中文</MenuItem>
            </Select>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpen} color="secondary">
              {t.addEmployee}
            </Button>
            <TextField
              variant="outlined"
              size="small"
              placeholder={t.search}
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
                  <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'primary.light', color: 'primary.contrastText' }}>{t.name}</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'primary.light', color: 'primary.contrastText' }}>{t.email}</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'primary.light', color: 'primary.contrastText' }}>{t.role}</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'primary.light', color: 'primary.contrastText' }}>{t.actions}</TableCell>
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
            labelRowsPerPage={language === 'en' ? 'Rows per page:' : '每页行数:'}
          />
        </Stack>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}>
            {editItem ? t.edit : t.addEmployee}
          </DialogTitle>
          <DialogContent>
            <Stack spacing={2} sx={{ pt: 2 }}>
              <TextField
                label={t.name}
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                fullWidth
              />
              <TextField
                label={t.email}
                value={newItem.email}
                onChange={(e) => setNewItem({ ...newItem, email: e.target.value })}
                fullWidth
              />
              <TextField
                label={t.role}
                value={newItem.role}
                onChange={(e) => setNewItem({ ...newItem, role: e.target.value })}
                fullWidth
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>{t.cancel}</Button>
            <Button onClick={editItem ? handleUpdate : handleAdd} variant="contained" color="secondary">
              {editItem ? t.update : t.add}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
};

export default PreviewPage;