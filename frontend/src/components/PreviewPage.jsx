import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import mermaid from 'mermaid';

const mermaidCode = `
mindmap
  root((AI))
    Machine Learning
      Supervised Learning
      Unsupervised Learning
      Reinforcement Learning
    Natural Language Processing
      Text Analysis
      Speech Recognition
      Machine Translation
    Computer Vision
      Image Recognition
      Object Detection
      Facial Recognition
    Robotics
      Autonomous Vehicles
      Drones
      Industrial Robots
    Expert Systems
      Rule-Based Systems
      Fuzzy Logic
    Neural Networks
      Deep Learning
      Convolutional Neural Networks
      Recurrent Neural Networks
`;

const PreviewPage = () => {
  const [scale, setScale] = useState(1.0);
  
  const handleZoomIn = () => {
    setScale(scale + 0.1);
  };
  
  const handleZoomOut = () => {
    setScale(Math.max(scale - 0.1, 0.5));
  };

  return (
    <Box sx={{ width: '100%', height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', bgcolor: '#f5f5f5' }}>
      <Box sx={{ flex: 1, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'auto', border: '1px solid #e0e0e0', borderRadius: '8px', bgcolor: 'white' }}>
        <Box sx={{ transform: `scale(${scale})`, transition: 'transform 0.3s ease' }}>
          <Mermaid chart={mermaidCode} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', padding: '16px' }}>
        <IconButton onClick={handleZoomOut} disabled={scale <= 0.5} sx={{ mr: 2, bgcolor: '#e0e0e0' }}>
          <ZoomOutIcon />
        </IconButton>
        <IconButton onClick={handleZoomIn} sx={{ bgcolor: '#e0e0e0' }}>
          <ZoomInIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

mermaid.initialize({
  startOnLoad: true,
  theme: 'neutral',
  mindmap: {
    padding: 16,
    curve: 'basis'
  }
});

const Mermaid = React.memo(({ chart }) => {
  React.useEffect(() => {
    mermaid.contentLoaded();
  }, [chart]);

  return <div className="mermaid">{chart}</div>;
});

export default PreviewPage;