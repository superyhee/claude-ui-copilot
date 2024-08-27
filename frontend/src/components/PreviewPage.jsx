import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import mermaid from 'mermaid';

const mermaidCode = `
mindmap
  root((ADAS))
    Sensing
      Cameras
      Radar
      Lidar
      Ultrasonic sensors
    Perception
      Object detection
      Lane detection
      Traffic sign recognition
    Decision Making
      Path planning
      Collision avoidance
    Control
      Steering
      Acceleration
      Braking
    Human-Machine Interface
      Alerts
      Displays
      Controls
    Safety Systems
      Emergency braking
      Lane keeping assist
      Adaptive cruise control
`;

const PreviewPage = () => {
  const [scale, setScale] = useState(1.5);

  const handleZoomIn = () => {
    setScale(scale + 0.1);
  };

  const handleZoomOut = () => {
    setScale(Math.max(scale - 0.1, 0.5));
  };

  return (
    <Box sx={{ width: '100%', height: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: '#f5f5f5' }}>
      <Box sx={{ fontSize: '24px', fontWeight: 'bold', my: 2 }}>
        ADAS (Advanced Driver Assistance Systems) Mindmap
      </Box>
      <Box sx={{ flex: 1, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ transform: `scale(${scale})`, transition: 'transform 0.3s ease' }}>
          <Mermaid chart={mermaidCode} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
        <IconButton onClick={handleZoomOut} disabled={scale <= 0.5} sx={{ mr: 1 }}>
          <ZoomOutIcon />
        </IconButton>
        <IconButton onClick={handleZoomIn} sx={{ ml: 1 }}>
          <ZoomInIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

mermaid.initialize({
  startOnLoad: true,
  theme: 'default',
  flowchart: {
    curve: 'basis'
  }
});

const Mermaid = ({ chart }) => {
  React.useEffect(() => {
    mermaid.contentLoaded();
  }, []);

  return <div className="mermaid">{chart}</div>;
};

export default PreviewPage;