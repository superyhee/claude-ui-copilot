import React from 'react';
import { Box, Typography, Stack, AppBar, Toolbar, IconButton, Button, Avatar, Card, CardContent, Tab, Tabs } from '@mui/material';
import { Search, Menu, NotificationsNone, Language, ChatBubbleOutline } from '@mui/icons-material';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const chartData = [
  { value: 400 },
  { value: 300 },
  { value: 500 },
  { value: 350 },
  { value: 450 },
  { value: 400 },
  { value: 500 },
];

const PreviewPage = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Box sx={{ width: 240, borderRight: '1px solid #e0e0e0', p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Architect</Typography>
        <Typography variant="subtitle2" sx={{ color: '#666', mb: 1 }}>MENU</Typography>
        <Stack spacing={1}>
          <Button startIcon={<Menu />} sx={{ justifyContent: 'flex-start', color: '#666' }}>Dashboards</Button>
          <Button startIcon={<Menu />} sx={{ justifyContent: 'flex-start', color: '#666' }}>Pages</Button>
          <Button startIcon={<Menu />} sx={{ justifyContent: 'flex-start', color: '#666' }}>Applications</Button>
        </Stack>
        <Typography variant="subtitle2" sx={{ color: '#666', mt: 2, mb: 1 }}>UI COMPONENTS</Typography>
        <Stack spacing={1}>
          <Button startIcon={<Menu />} sx={{ justifyContent: 'flex-start', color: '#666' }}>Elements</Button>
          <Button startIcon={<Menu />} sx={{ justifyContent: 'flex-start', color: '#666' }}>Components</Button>
          <Button startIcon={<Menu />} sx={{ justifyContent: 'flex-start', color: '#666' }}>Tables</Button>
        </Stack>
        <Typography variant="subtitle2" sx={{ color: '#666', mt: 2, mb: 1 }}>DASHBOARD WIDGETS</Typography>
        <Stack spacing={1}>
          <Button startIcon={<Menu />} sx={{ justifyContent: 'flex-start', color: '#666' }}>Chart Boxes</Button>
          <Button startIcon={<Menu />} sx={{ justifyContent: 'flex-start', color: '#666' }}>Profile Boxes</Button>
        </Stack>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: '1px solid #e0e0e0' }}>
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
              <Menu />
            </IconButton>
            <IconButton size="large" color="inherit">
              <Search />
            </IconButton>
            <Typography variant="subtitle1" sx={{ flexGrow: 1, ml: 2 }}>Mega Menu</Typography>
            <Button color="inherit" startIcon={<NotificationsNone />}>Settings</Button>
            <Button color="inherit" startIcon={<Menu />}>Projects</Button>
            <IconButton size="large" color="inherit">
              <Language />
            </IconButton>
            <IconButton size="large" color="inherit">
              <ChatBubbleOutline />
            </IconButton>
            <Avatar alt="User Avatar" src="https://placehold.co/100x100" sx={{ ml: 2 }} />
          </Toolbar>
        </AppBar>
        <Box sx={{ p: 3 }}>
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <Button variant="contained" color="primary">Variation 1</Button>
            <Button variant="outlined">Variation 2</Button>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <Card sx={{ flexGrow: 1 }}>
              <CardContent>
                <Typography variant="subtitle2" color="text.secondary">Total Orders</Typography>
                <Typography variant="h4" color="success.main">1896</Typography>
                <Typography variant="body2" color="text.secondary">Last year expenses</Typography>
                <Box sx={{ width: '100%', bgcolor: '#e0e0e0', height: 4, mt: 1 }}>
                  <Box sx={{ width: '80%', bgcolor: 'primary.main', height: 4 }} />
                </Box>
                <Typography variant="body2" align="right">100%</Typography>
              </CardContent>
            </Card>
            <Card sx={{ flexGrow: 1 }}>
              <CardContent>
                <Typography variant="subtitle2" color="text.secondary">Products Sold</Typography>
                <Typography variant="h4" color="warning.main">$3M</Typography>
                <Typography variant="body2" color="text.secondary">Revenue streams</Typography>
                <Box sx={{ width: '100%', bgcolor: '#e0e0e0', height: 4, mt: 1 }}>
                  <Box sx={{ width: '60%', bgcolor: 'error.main', height: 4 }} />
                </Box>
                <Typography variant="body2" align="right">100%</Typography>
              </CardContent>
            </Card>
            <Card sx={{ flexGrow: 1 }}>
              <CardContent>
                <Typography variant="subtitle2" color="text.secondary">Followers</Typography>
                <Typography variant="h4" color="error.main">45,9%</Typography>
                <Typography variant="body2" color="text.secondary">People Interested</Typography>
                <Box sx={{ width: '100%', bgcolor: '#e0e0e0', height: 4, mt: 1 }}>
                  <Box sx={{ width: '45%', bgcolor: 'success.main', height: 4 }} />
                </Box>
                <Typography variant="body2" align="right">100%</Typography>
              </CardContent>
            </Card>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Card sx={{ flexGrow: 1 }}>
              <CardContent>
                <Typography variant="h4">$874</Typography>
                <Typography variant="body2" color="text.secondary">sales last month</Typography>
                <ResponsiveContainer width="100%" height={100}>
                  <LineChart data={chartData}>
                    <Line type="monotone" dataKey="value" stroke="#4caf50" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card sx={{ flexGrow: 1 }}>
              <CardContent>
                <Typography variant="h4">$1283</Typography>
                <Typography variant="body2" color="text.secondary">sales income</Typography>
                <ResponsiveContainer width="100%" height={100}>
                  <LineChart data={chartData}>
                    <Line type="monotone" dataKey="value" stroke="#3f51b5" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card sx={{ flexGrow: 1 }}>
              <CardContent>
                <Typography variant="subtitle1">BANDWIDTH REPORTS</Typography>
                <Tabs value={0}>
                  <Tab label="Tab 1" />
                  <Tab label="Tab 2" />
                </Tabs>
                <Stack direction="row" justifyContent="space-between" sx={{ mt: 2 }}>
                  <Box>
                    <Typography variant="h4">63%</Typography>
                    <Typography variant="body2" color="text.secondary">Server Errors</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4">$ 1893</Typography>
                    <Typography variant="body2" color="text.secondary">Total Income</Typography>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="body2" color="text.secondary">Server Target</Typography>
                    <Box sx={{ width: '100%', bgcolor: '#e0e0e0', height: 4, mt: 1 }}>
                      <Box sx={{ width: '61%', bgcolor: 'secondary.main', height: 4 }} />
                    </Box>
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="body2" color="text.secondary">Income Target</Typography>
                    <Box sx={{ width: '100%', bgcolor: '#e0e0e0', height: 4, mt: 1 }}>
                      <Box sx={{ width: '71%', bgcolor: 'error.main', height: 4 }} />
                    </Box>
                  </Box>
                </Stack>
                <ResponsiveContainer width="100%" height={100}>
                  <LineChart data={chartData}>
                    <Line type="monotone" dataKey="value" stroke="#ffc107" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default PreviewPage;