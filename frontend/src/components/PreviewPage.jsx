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
    Deep Learning
      Neural Networks
      Convolutional Neural Networks
      Recurrent Neural Networks
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
    Ethics and AI
      Bias in AI
      AI Safety
      AI Governance
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
    <Box sx={{ width: '100%', height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
      <Box sx={{ flex: 1, display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', overflow: 'auto', border: '1px solid #e0e0e0', borderRadius: '8px', backgroundColor: '#ffffff' }}>
        <Box sx={{ transform: `scale(${scale})`, margin: 2 }}>
          <Mermaid chart={mermaidCode} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: 2 }}>
        <IconButton onClick={handleZoomOut} disabled={scale <= 0.5} sx={{ backgroundColor: '#e0e0e0', marginBottom: 1 }}>
          <ZoomOutIcon />
        </IconButton>
        <IconButton onClick={handleZoomIn} sx={{ backgroundColor: '#e0e0e0' }}>
          <ZoomInIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

mermaid.initialize({
  startOnLoad: true,
  theme: 'neutral',
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