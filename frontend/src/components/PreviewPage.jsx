import React, { useState } from 'react';
import { Box, Typography, Stack, Drawer, List, ListItem, ListItemIcon, ListItemText, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Dashboard as DashboardIcon, ShoppingCart, People, BarChart } from '@mui/icons-material';

const drawerWidth = 240;

const sidebarItems = [
  { text: 'Dashboard', icon: <DashboardIcon /> },
  { text: 'Orders', icon: <ShoppingCart /> },
  { text: 'Customers', icon: <People /> },
  { text: 'Reports', icon: <BarChart /> },
];

const recentOrders = [
  { id: 1, customer: 'John Doe', date: '2023-05-01', status: 'Delivered', total: '$120.00' },
  { id: 2, customer: 'Jane Smith', date: '2023-05-02', status: 'Pending', total: '$85.50' },
  { id: 3, customer: 'Bob Johnson', date: '2023-05-03', status: 'Shipped', total: '$200.75' },
  { id: 4, customer: 'Alice Brown', date: '2023-05-04', status: 'Processing', total: '$150.25' },
  { id: 5, customer: 'Charlie Davis', date: '2023-05-05', status: 'Delivered', total: '$95.00' },
];

const DashboardPage = () => {
  const [selectedItem, setSelectedItem] = useState('Dashboard');

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <List>
          {sidebarItems.map((item) => (
            <ListItem
              button
              key={item.text}
              selected={selectedItem === item.text}
              onClick={() => setSelectedItem(item.text)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          E-commerce Dashboard
        </Typography>
        <Box sx={{ mb: 4 }}>
          <img
            src="https://placehold.co/600x200"
            alt="Dashboard overview chart showing sales and revenue trends"
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
        <Typography variant="h5" gutterBottom>
          Recent Orders
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {recentOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell>{order.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default DashboardPage;