import React, { useState, useEffect } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import mermaid from 'mermaid';

const mermaidCode = `
mindmap
  root((GAI))
    Natural Language Processing
      Text Generation
      Language Understanding
      Machine Translation
    Computer Vision
      Image Recognition
      Object Detection
      Facial Recognition
    Speech Technology
      Speech Recognition
      Text-to-Speech
    Robotics
      Motion Planning
      Perception
      Manipulation
    Machine Learning
      Deep Learning
      Reinforcement Learning
      Unsupervised Learning
    Expert Systems
      Knowledge Representation
      Inference Engines
      Rule-Based Systems
`;

const PreviewPage = () => {
  const [scale, setScale] = useState(1.5);
  const [mermaidSvg, setMermaidSvg] = useState('');

  useEffect(() => {
    mermaid.mermaidAPI.render('mermaid-svg', mermaidCode, (svgCode) => {
      setMermaidSvg(svgCode);
    });
  }, []);

  const handleZoomIn = () => {
    setScale(scale + 0.1);
  };

  const handleZoomOut = () => {
    setScale(Math.max(scale - 0.1, 0.5));
  };

  return (
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', bgcolor: '#f5f5f5' }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#333', fontWeight: 'bold' }}>
        GAI Mind Map
      </Typography>
      <Box sx={{ width: '90%', height: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'white', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <Box sx={{ flex: 1, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'auto' }}>
          <Box sx={{ transform: `scale(${scale})`, transition: 'transform 0.3s ease' }}>
            <div dangerouslySetInnerHTML={{ __html: mermaidSvg }} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', mr: 2 }}>
          <IconButton onClick={handleZoomIn} sx={{ mb: 1, bgcolor: '#4caf50', color: 'white', '&:hover': { bgcolor: '#45a049' } }}>
            <ZoomInIcon />
          </IconButton>
          <IconButton onClick={handleZoomOut} disabled={scale <= 0.5} sx={{ bgcolor: '#f44336', color: 'white', '&:hover': { bgcolor: '#d32f2f' }, '&.Mui-disabled': { bgcolor: '#e0e0e0' } }}>
            <ZoomOutIcon />
          </IconButton>
        </Box>
      </Box>
      <Typography variant="body2" sx={{ mt: 2, color: '#666' }}>
        Click on the buttons to zoom in and out of the mind map.
      </Typography>
    </Box>
  );
};

mermaid.initialize({
  startOnLoad: true,
  theme: 'default',
  flowchart: {
    useMaxWidth: false,
    htmlLabels: true
  }
});

export default PreviewPage;