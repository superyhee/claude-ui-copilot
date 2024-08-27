import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import mermaid from 'mermaid';

const mermaidCode = `
mindmap
  root((LLM))
    Architecture
      Transformer
      Attention Mechanism
      Encoder-Decoder
    Training
      Pretraining
      Fine-tuning
      Transfer Learning
    Applications
      Natural Language Processing
      Text Generation
      Translation
      Summarization
    Challenges
      Bias
      Hallucination
      Ethical Concerns
    Future Directions
      Multimodal Models
      Improved Efficiency
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
    <Box sx={{ width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
      <Box sx={{ flex: 1, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'auto', border: '1px solid #e0e0e0', borderRadius: '8px', backgroundColor: '#ffffff' }}>
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
  mindmap: {
    padding: 20,
    curve: 'basis'
  }
});

const Mermaid = ({ chart }) => {
  React.useEffect(() => {
    mermaid.contentLoaded();
  }, [chart]);

  return <div className="mermaid">{chart}</div>;
};

export default PreviewPage;