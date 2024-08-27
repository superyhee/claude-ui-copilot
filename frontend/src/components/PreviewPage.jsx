import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
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
  const handleZoomIn = () => {
    setScale(scale + 0.1);
  };
  const handleZoomOut = () => {
    setScale(Math.max(scale - 0.1, 0.5));
  };

  return (
    <Box sx={{ width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: '#f0f4f8' }}>
      <Box sx={{ flex: 1, display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', overflow: 'auto', border: '1px solid #d0e1f9', borderRadius: '12px', boxShadow: '0 6px 12px rgba(0,0,0,0.08)', bgcolor: '#ffffff' }}>
        <Box sx={{ transform: `scale(${scale})`, marginRight: 2, transition: 'transform 0.3s ease' }}>
          <Mermaid chart={mermaidCode} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', ml: 2 }}>
        <IconButton 
          onClick={handleZoomOut} 
          disabled={scale <= 0.5} 
          sx={{ 
            mb: 1, 
            bgcolor: '#4a90e2', 
            color: '#ffffff', 
            '&:hover': { bgcolor: '#357abd' },
            '&.Mui-disabled': { bgcolor: '#a0c3e8' }
          }}
        >
          <ZoomOutIcon />
        </IconButton>
        <IconButton 
          onClick={handleZoomIn} 
          sx={{ 
            bgcolor: '#4a90e2', 
            color: '#ffffff', 
            '&:hover': { bgcolor: '#357abd' } 
          }}
        >
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
  },
  mindmap: {
    padding: 120,
    nodeSpacing: 100
  }
});

const Mermaid = ({ chart }) => {
  React.useEffect(() => {
    mermaid.contentLoaded();
  }, []);

  return <div className="mermaid">{chart}</div>;
};

export default PreviewPage;