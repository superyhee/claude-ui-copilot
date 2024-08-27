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
      Machine Translation
      Sentiment Analysis
    Computer Vision
      Image Recognition
      Object Detection
      Facial Recognition
    Robotics
      Autonomous Vehicles
      Robotic Process Automation
    Expert Systems
      Knowledge-based Systems
      Fuzzy Logic
    Ethics and AI
      Bias and Fairness
      Privacy Concerns
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
    <Box sx={{ width: '100%', height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: '#f5f5f5' }}>
      <Box sx={{ flex: 1, display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', overflow: 'auto', border: '1px solid #e0e0e0', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <Box sx={{ transform: `scale(${scale})`, marginRight: 2, transition: 'transform 0.3s ease' }}>
          <Mermaid chart={mermaidCode} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', ml: 2 }}>
        <IconButton onClick={handleZoomOut} disabled={scale <= 0.5} sx={{ mb: 1, bgcolor: '#ffffff', '&:hover': { bgcolor: '#f0f0f0' } }}>
          <ZoomOutIcon />
        </IconButton>
        <IconButton onClick={handleZoomIn} sx={{ bgcolor: '#ffffff', '&:hover': { bgcolor: '#f0f0f0' } }}>
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
  },
  mindmap: {
    padding: 100,
    nodeSpacing: 80
  }
});

const Mermaid = ({ chart }) => {
  React.useEffect(() => {
    mermaid.contentLoaded();
  }, []);

  return <div className="mermaid">{chart}</div>;
};

export default PreviewPage;