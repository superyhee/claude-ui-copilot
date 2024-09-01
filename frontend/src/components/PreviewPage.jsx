import React, { useState, useEffect } from 'react';
import { Box, Typography, Stack, Tabs, Tab, TextField, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Avatar, FormControlLabel, Switch, Select, MenuItem, Menu, ListItemIcon, ListItemText, Paper, Chip, Button, Tooltip, Divider, CircularProgress } from '@mui/material';
import { Search, MoreVert, CalendarToday, KeyboardArrowLeft, KeyboardArrowRight, Edit, Delete, Add, Visibility, AttachMoney, LocalOffer, PieChart, Refresh, FilterList } from '@mui/icons-material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';

const PreviewPage = () => {
  const [value, setValue] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filteredInvoices, setFilteredInvoices] = useState([]);
  const [editingCell, setEditingCell] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState([]);

  const [invoices, setInvoices] = useState([
    { id: 1, name: 'Amiah Pruitt', invoiceNumber: 'INV-19919', createDate: '09 Aug 2024', createTime: '12:27 pm', dueDate: '02 Oct 2024', dueTime: '7:27 am', amount: 2331.63, sent: 9, status: 'Paid', color: '#4caf50', tags: ['Design', 'Web'] },
    { id: 2, name: 'Ariana Lang', invoiceNumber: 'INV-19918', createDate: '10 Aug 2024', createTime: '12:27 pm', dueDate: '01 Oct 2024', dueTime: '6:27 am', amount: 2372.93, sent: 4, status: 'Overdue', color: '#f44336', tags: ['Development', 'Mobile'] },
    { id: 3, name: 'Lawson Bass', invoiceNumber: 'INV-19917', createDate: '11 Aug 2024', createTime: '12:27 pm', dueDate: '30 Sep 2024', dueTime: '5:27 am', amount: 2283.97, sent: 9, status: 'Paid', color: '#2196f3', tags: ['Marketing', 'SEO'] },
    { id: 4, name: 'Selina Boyer', invoiceNumber: 'INV-19916', createDate: '12 Aug 2024', createTime: '12:27 pm', dueDate: '29 Sep 2024', dueTime: '4:27 am', amount: 2251.84, sent: 8, status: 'Pending', color: '#ff9800', tags: ['Consulting'] },
    { id: 5, name: 'Angelique Morse', invoiceNumber: 'INV-19915', createDate: '13 Aug 2024', createTime: '12:27 pm', dueDate: '28 Sep 2024', dueTime: '3:27 am', amount: 2343.51, sent: 11, status: 'Paid', color: '#4caf50', tags: ['Design', 'Branding'] },
  ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    filterInvoices(value);
    generateChartData();
  }, [value, invoices]);

  const filterInvoices = (tabIndex) => {
    setLoading(true);
    setTimeout(() => {
      switch (tabIndex) {
        case 0:
          setFilteredInvoices(invoices);
          break;
        case 1:
          setFilteredInvoices(invoices.filter(invoice => invoice.status === 'Paid'));
          break;
        case 2:
          setFilteredInvoices(invoices.filter(invoice => invoice.status === 'Pending'));
          break;
        case 3:
          setFilteredInvoices(invoices.filter(invoice => invoice.status === 'Overdue'));
          break;
        case 4:
          setFilteredInvoices(invoices.filter(invoice => invoice.status === 'Draft'));
          break;
        default:
          setFilteredInvoices(invoices);
      }
      setLoading(false);
    }, 500);
  };

  const generateChartData = () => {
    const data = invoices.reduce((acc, invoice) => {
      const date = new Date(invoice.createDate);
      const month = date.toLocaleString('default', { month: 'short' });
      const existingMonth = acc.find(item => item.month === month);
      if (existingMonth) {
        existingMonth.amount += invoice.amount;
      } else {
        acc.push({ month, amount: invoice.amount });
      }
      return acc;
    }, []);
    setChartData(data);
  };

  const handleCellClick = (id, field) => {
    setEditingCell({ id, field });
  };

  const handleCellChange = (event, id, field) => {
    const updatedInvoices = invoices.map(invoice => {
      if (invoice.id === id) {
        return { ...invoice, [field]: event.target.value };
      }
      return invoice;
    });
    setInvoices(updatedInvoices);
  };

  const handleCellBlur = () => {
    setEditingCell(null);
  };

  const handleMenuOpen = (event, invoice) => {
    setAnchorEl(event.currentTarget);
    setSelectedInvoice(invoice);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedInvoice(null);
  };

  const handleView = () => {
    console.log('View invoice:', selectedInvoice);
    handleMenuClose();
  };

  const handleEdit = () => {
    console.log('Edit invoice:', selectedInvoice);
    handleMenuClose();
  };

  const handleDelete = () => {
    setInvoices(invoices.filter(invoice => invoice.id !== selectedInvoice.id));
    handleMenuClose();
  };

  const handleAdd = () => {
    const newInvoice = {
      id: invoices.length + 1,
      name: 'New Customer',
      invoiceNumber: `INV-${Math.floor(Math.random() * 10000)}`,
      createDate: new Date().toLocaleDateString(),
      createTime: new Date().toLocaleTimeString(),
      dueDate: 'TBD',
      dueTime: 'TBD',
      amount: 0,
      sent: 0,
      status: 'Draft',
      color: '#9e9e9e',
      tags: []
    };
    setInvoices([...invoices, newInvoice]);
    handleMenuClose();
  };

  return (
    <Box sx={{ p: 3, backgroundColor: '#f5f5f5', height: '100%' }}>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" gutterBottom>Invoice Dashboard</Typography>
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} sx={{ mb: 2 }}>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" startIcon={<Add />}>Create Invoice</Button>
            <Button variant="outlined" startIcon={<Refresh />}>Refresh</Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Tooltip title="Filter">
              <IconButton>
                <FilterList />
              </IconButton>
            </Tooltip>
            <Tooltip title="Analytics">
              <IconButton>
                <PieChart />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6" gutterBottom>Revenue Overview</Typography>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <RechartsTooltip />
            <Line type="monotone" dataKey="amount" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </Paper>

      <Paper elevation={3} sx={{ p: 3 }}>
        <Tabs value={value} onChange={handleChange} aria-label="invoice tabs" sx={{ mb: 2 }}>
          <Tab label={<Chip label="All" avatar={<Avatar>{invoices.length}</Avatar>} />} />
          <Tab label={<Chip label="Paid" avatar={<Avatar sx={{ bgcolor: '#4caf50', color: 'white' }}>{invoices.filter(i => i.status === 'Paid').length}</Avatar>} />} />
          <Tab label={<Chip label="Pending" avatar={<Avatar sx={{ bgcolor: '#ff9800', color: 'white' }}>{invoices.filter(i => i.status === 'Pending').length}</Avatar>} />} />
          <Tab label={<Chip label="Overdue" avatar={<Avatar sx={{ bgcolor: '#f44336', color: 'white' }}>{invoices.filter(i => i.status === 'Overdue').length}</Avatar>} />} />
          <Tab label={<Chip label="Draft" avatar={<Avatar sx={{ bgcolor: '#9e9e9e', color: 'white' }}>{invoices.filter(i => i.status === 'Draft').length}</Avatar>} />} />
        </Tabs>

        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
          <TextField
            select
            label="Service"
            defaultValue=""
            sx={{ minWidth: 120 }}
          >
            <MenuItem value="">All Services</MenuItem>
            <MenuItem value="design">Design</MenuItem>
            <MenuItem value="development">Development</MenuItem>
            <MenuItem value="marketing">Marketing</MenuItem>
          </TextField>
          <TextField
            label="Start Date"
            type="date"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="End Date"
            type="date"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Search"
            placeholder="Search customer or invoice number..."
            fullWidth
            InputProps={{
              startAdornment: <Search color="action" />,
            }}
          />
          <IconButton onClick={(e) => handleMenuOpen(e, null)}>
            <MoreVert />
          </IconButton>
        </Stack>

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <TableContainer>
            <Table size={dense ? 'small' : 'medium'}>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox />
                  </TableCell>
                  <TableCell>Customer</TableCell>
                  <TableCell>Create</TableCell>
                  <TableCell>Due</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Sent</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Tags</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredInvoices.map((invoice) => (
                  <TableRow key={invoice.id} hover>
                    <TableCell padding="checkbox">
                      <Checkbox />
                    </TableCell>
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Avatar src={`https://placehold.co/40x40?text=${invoice.name[0]}`} alt={`Avatar for ${invoice.name}`} />
                        <Box>
                          {editingCell && editingCell.id === invoice.id && editingCell.field === 'name' ? (
                            <TextField
                              value={invoice.name}
                              onChange={(e) => handleCellChange(e, invoice.id, 'name')}
                              onBlur={handleCellBlur}
                              autoFocus
                              size="small"
                            />
                          ) : (
                            <Typography variant="body1" onClick={() => handleCellClick(invoice.id, 'name')}>{invoice.name}</Typography>
                          )}
                          <Typography variant="body2" color="text.secondary">{invoice.invoiceNumber}</Typography>
                        </Box>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">{invoice.createDate}</Typography>
                      <Typography variant="body2" color="text.secondary">{invoice.createTime}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">{invoice.dueDate}</Typography>
                      <Typography variant="body2" color="text.secondary">{invoice.dueTime}</Typography>
                    </TableCell>
                    <TableCell>
                      {editingCell && editingCell.id === invoice.id && editingCell.field === 'amount' ? (
                        <TextField
                          value={invoice.amount}
                          onChange={(e) => handleCellChange(e, invoice.id, 'amount')}
                          onBlur={handleCellBlur}
                          autoFocus
                          size="small"
                          type="number"
                        />
                      ) : (
                        <Typography variant="body2" onClick={() => handleCellClick(invoice.id, 'amount')}>
                          ${invoice.amount.toFixed(2)}
                        </Typography>
                      )}
                    </TableCell>
                    <TableCell>{invoice.sent}</TableCell>
                    <TableCell>
                      <Chip
                        label={invoice.status}
                        size="small"
                        sx={{
                          bgcolor: invoice.status === 'Paid' ? '#e8f5e9' : invoice.status === 'Overdue' ? '#ffebee' : '#fff3e0',
                          color: invoice.status === 'Paid' ? '#4caf50' : invoice.status === 'Overdue' ? '#f44336' : '#ff9800',
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      {invoice.tags.map((tag, index) => (
                        <Chip key={index} label={tag} size="small" sx={{ mr: 0.5, mb: 0.5 }} />
                      ))}
                    </TableCell>
                    <TableCell>
                      <IconButton size="small" onClick={(e) => handleMenuOpen(e, invoice)}>
                        <MoreVert />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
          <FormControlLabel
            control={<Switch checked={dense} onChange={(e) => setDense(e.target.checked)} />}
            label="Dense"
          />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>