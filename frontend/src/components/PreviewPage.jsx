import React, { useState, useEffect } from 'react';
import { Box, Typography, Stack, Tabs, Tab, TextField, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Avatar, FormControlLabel, Switch, Select, MenuItem } from '@mui/material';
import { Search, MoreVert, CalendarToday, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const PreviewPage = () => {
  const [value, setValue] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filteredInvoices, setFilteredInvoices] = useState([]);

  const invoices = [
    { name: 'Amiah Pruitt', invoiceNumber: 'INV-19919', createDate: '09 Aug 2024', createTime: '12:27 pm', dueDate: '02 Oct 2024', dueTime: '7:27 am', amount: '$2,331.63', sent: 9, status: 'Paid', color: '#4caf50' },
    { name: 'Ariana Lang', invoiceNumber: 'INV-19918', createDate: '10 Aug 2024', createTime: '12:27 pm', dueDate: '01 Oct 2024', dueTime: '6:27 am', amount: '$2,372.93', sent: 4, status: 'Overdue', color: '#f44336' },
    { name: 'Lawson Bass', invoiceNumber: 'INV-19917', createDate: '11 Aug 2024', createTime: '12:27 pm', dueDate: '30 Sep 2024', dueTime: '5:27 am', amount: '$2,283.97', sent: 9, status: 'Paid', color: '#2196f3' },
    { name: 'Selina Boyer', invoiceNumber: 'INV-19916', createDate: '12 Aug 2024', createTime: '12:27 pm', dueDate: '29 Sep 2024', dueTime: '4:27 am', amount: '$2,251.84', sent: 8, status: 'Pending', color: '#ff9800' },
    { name: 'Angelique Morse', invoiceNumber: 'INV-19915', createDate: '13 Aug 2024', createTime: '12:27 pm', dueDate: '28 Sep 2024', dueTime: '3:27 am', amount: '$2,343.51', sent: 11, status: 'Paid', color: '#4caf50' },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    filterInvoices(value);
  }, [value]);

  const filterInvoices = (tabIndex) => {
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
  };

  return (
    <Box sx={{ p: 2, backgroundColor: '#ffffff', height: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="invoice tabs">
        <Tab label={<span>All <Box component="span" sx={{ ml: 1, py: 0.5, px: 1, borderRadius: 1, bgcolor: '#333', color: 'white' }}>20</Box></span>} />
        <Tab label={<span>Paid <Box component="span" sx={{ ml: 1, py: 0.5, px: 1, borderRadius: 1, bgcolor: '#4caf50', color: 'white' }}>10</Box></span>} />
        <Tab label={<span>Pending <Box component="span" sx={{ ml: 1, py: 0.5, px: 1, borderRadius: 1, bgcolor: '#ff9800', color: 'white' }}>6</Box></span>} />
        <Tab label={<span>Overdue <Box component="span" sx={{ ml: 1, py: 0.5, px: 1, borderRadius: 1, bgcolor: '#f44336', color: 'white' }}>2</Box></span>} />
        <Tab label={<span>Draft <Box component="span" sx={{ ml: 1, py: 0.5, px: 1, borderRadius: 1, bgcolor: '#9e9e9e', color: 'white' }}>2</Box></span>} />
      </Tabs>

      <Stack direction="row" spacing={2} sx={{ my: 2 }}>
        <Select
          value=""
          displayEmpty
          sx={{ minWidth: 120 }}
        >
          <MenuItem value="" disabled>Service</MenuItem>
        </Select>
        <TextField
          placeholder="Start date"
          InputProps={{
            endAdornment: <CalendarToday color="action" />,
          }}
        />
        <TextField
          placeholder="End date"
          InputProps={{
            endAdornment: <CalendarToday color="action" />,
          }}
        />
        <TextField
          placeholder="Search customer or invoice number..."
          fullWidth
          InputProps={{
            startAdornment: <Search color="action" />,
          }}
        />
        <IconButton>
          <MoreVert />
        </IconButton>
      </Stack>

      <TableContainer>
        <Table size={dense ? 'small' : 'medium'}>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Create ↑</TableCell>
              <TableCell>Due</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Sent</TableCell>
              <TableCell>Status</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredInvoices.map((invoice) => (
              <TableRow key={invoice.invoiceNumber} hover>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Avatar sx={{ bgcolor: invoice.color }}>{invoice.name[0]}</Avatar>
                    <Box>
                      <Typography variant="body1">{invoice.name}</Typography>
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
                <TableCell>{invoice.amount}</TableCell>
                <TableCell>{invoice.sent}</TableCell>
                <TableCell>
                  <Box sx={{ bgcolor: invoice.status === 'Paid' ? '#e8f5e9' : invoice.status === 'Overdue' ? '#ffebee' : '#fff3e0', color: invoice.status === 'Paid' ? '#4caf50' : invoice.status === 'Overdue' ? '#f44336' : '#ff9800', borderRadius: 1, px: 1, py: 0.5, display: 'inline-block' }}>
                    {invoice.status}
                  </Box>
                </TableCell>
                <TableCell>
                  <IconButton size="small">
                    <MoreVert />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
        <FormControlLabel
          control={<Switch checked={dense} onChange={(e) => setDense(e.target.checked)} />}
          label="Dense"
        />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2" sx={{ mr: 2 }}>Rows per page:</Typography>
          <Select
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(e.target.value)}
            size="small"
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
          </Select>
          <Typography variant="body2" sx={{ mx: 2 }}>1-5 of 20</Typography>
          <IconButton size="small">
            <KeyboardArrowLeft />
          </IconButton>
          <IconButton size="small">
            <KeyboardArrowRight />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default PreviewPage;