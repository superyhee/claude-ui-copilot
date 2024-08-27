import React, { useState, useEffect } from 'react';
import { Box, IconButton, Typography, Paper, Slider } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import mermaid from 'mermaid';

const mermaidCode = `
mindmap
  root((Transformer Model))
    Architecture
      Encoder
        Self-Attention
        Feed Forward
      Decoder
        Masked Self-Attention
        Encoder-Decoder Attention
        Feed Forward
    Components
      Embedding Layer
      Positional Encoding
      Multi-Head Attention
      Layer Normalization
    Training
      Masked Language Modeling
      Next Sentence Prediction
    Applications
      Machine Translation
      Text Summarization
      Question Answering
      Sentiment Analysis
    Advantages
      Parallelization
      Long-range Dependencies
      Contextual Understanding
    Variations
      BERT
      GPT
      T5
      XLNet
    Challenges
      Computational Complexity
      Memory Requirements
      Interpretability
`;

const PreviewPage = () => {
  const [scale, setScale] = useState(1.5);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.1, 3));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.1, 0.5));
  const handleSliderChange = (event, newValue) => setScale(newValue);
  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => {
    if (isFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  }, [isFullscreen]);

  return (
    <Box sx={{ 
      width: '100%', 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      bgcolor: '#f0f4f8', 
      p: 3
    }}>
      <Typography variant="h4" sx={{ mb: 2, color: '#2c3e50', fontWeight: 'bold' }}>
        Transformer Model Mindmap
      </Typography>
      <Paper elevation={3} sx={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        overflow: 'hidden', 
        borderRadius: 2
      }}>
        <Box sx={{ 
          flex: 1, 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          overflow: 'auto', 
          bgcolor: '#ffffff', 
          p: 2
        }}>
          <Box sx={{ 
            transform: `scale(${scale})`, 
            transition: 'transform 0.3s ease'
          }}>
            <Mermaid chart={mermaidCode} />
          </Box>
        </Box>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          p: 2, 
          borderTop: '1px solid #e0e0e0'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={handleZoomOut} disabled={scale <= 0.5} color="primary">
              <ZoomOutIcon />
            </IconButton>
            <Slider
              value={scale}
              onChange={handleSliderChange}
              min={0.5}
              max={3}
              step={0.1}
              sx={{ width: 200, mx: 2 }}
            />
            <IconButton onClick={handleZoomIn} disabled={scale >= 3} color="primary">
              <ZoomInIcon />
            </IconButton>
          </Box>
          <IconButton onClick={toggleFullscreen} color="primary">
            {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
};

mermaid.initialize({
  startOnLoad: true,
  theme: 'neutral',
  flowchart: { curve: 'basis' },
  mindmap: { padding: 120, nodeSpacing: 100 }
});

const Mermaid = ({ chart }) => {
  useEffect(() => {
    mermaid.contentLoaded();
  }, [chart]);

  return <div className="mermaid">{chart}</div>;
};

export default PreviewPage;