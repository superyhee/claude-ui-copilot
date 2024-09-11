import React, { useState, useEffect } from 'react';
import { Box, IconButton, Typography, TextField, Button } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, Legend, Label } from 'recharts';

const PreviewPage = () => {
  const [scale, setScale] = useState(1);
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', x: 0, y: 0 });

  useEffect(() => {
    const mockData = [
      { name: 'Item A', x: 80, y: 70, z: 100 },
      { name: 'Item B', x: 40, y: 30, z: 80 },
      { name: 'Item C', x: 60, y: 50, z: 60 },
      { name: 'Item D', x: 20, y: 90, z: 40 },
    ];
    setData(mockData);
  }, []);

  const handleZoomIn = () => setScale(scale + 0.1);
  const handleZoomOut = () => setScale(Math.max(scale - 0.1, 0.5));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: name === 'name' ? value : Number(value) });
  };

  const handleAddItem = () => {
    if (newItem.name && newItem.x >= 0 && newItem.x <= 100 && newItem.y >= 0 && newItem.y <= 100) {
      setData([...data, { ...newItem, z: 50 }]);
      setNewItem({ name: '', x: 0, y: 0 });
    }
  };

  return (
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Magic Quadrant Chart
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
        <IconButton onClick={handleZoomOut} disabled={scale <= 0.5}>
          <ZoomOutIcon />
        </IconButton>
        <IconButton onClick={handleZoomIn}>
          <ZoomInIcon />
        </IconButton>
      </Box>
      <Box sx={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}>
        <ScatterChart width={600} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <XAxis type="number" dataKey="x" name="Ability to Execute" domain={[0, 100]}>
            <Label value="Ability to Execute" offset={-10} position="insideBottom" />
          </XAxis>
          <YAxis type="number" dataKey="y" name="Completeness of Vision" domain={[0, 100]}>
            <Label value="Completeness of Vision" angle={-90} position="insideLeft" offset={-5} />
          </YAxis>
          <ZAxis type="number" dataKey="z" range={[50, 400]} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="Items" data={data} fill="#8884d8" />
        </ScatterChart>
      </Box>
      <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Add New Item
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField
            label="Name"
            name="name"
            value={newItem.name}
            onChange={handleInputChange}
            size="small"
          />
          <TextField
            label="X (0-100)"
            name="x"
            type="number"
            value={newItem.x}
            onChange={handleInputChange}
            size="small"
            inputProps={{ min: 0, max: 100 }}
          />
          <TextField
            label="Y (0-100)"
            name="y"
            type="number"
            value={newItem.y}
            onChange={handleInputChange}
            size="small"
            inputProps={{ min: 0, max: 100 }}
          />
        </Box>
        <Button variant="contained" onClick={handleAddItem}>
          Add Item
        </Button>
      </Box>
    </Box>
  );
};

export default PreviewPage;