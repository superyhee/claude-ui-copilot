import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import mermaid from 'mermaid';

const mermaidCode = `
timeline
    title AI Development Timeline
    1950 : Turing Test Proposed
    1956 : Dartmouth Conference
    1969 : First AI in Healthcare
    1997 : IBM's Deep Blue Beats Chess Champion
    2011 : IBM Watson Wins Jeopardy!
    2014 : Chatbots Become Mainstream
    2016 : AlphaGo Defeats World Go Champion
    2018 : GPT Language Models Introduced
    2020 : GPT-3 Released
    2022 : DALL-E 2 and Stable Diffusion Launch
    2023 : ChatGPT and GPT-4 Released
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
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', bgcolor: '#f5f5f5' }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#333', fontWeight: 'bold' }}>
        AI Development Timeline
      </Typography>
      <Box sx={{ width: '90%', height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'white', borderRadius: 2, boxShadow: 3 }}>
        <Box sx={{ flex: 1, display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', overflow: 'auto' }}>
          <Box sx={{ transform: `scale(${scale})`, marginRight: 2 }}>
            <Mermaid chart={mermaidCode} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', mr: 2 }}>
          <IconButton onClick={handleZoomOut} disabled={scale <= 0.5} sx={{ bgcolor: '#e0e0e0', mb: 1 }}>
            <ZoomOutIcon />
          </IconButton>
          <IconButton onClick={handleZoomIn} sx={{ bgcolor: '#e0e0e0' }}>
            <ZoomInIcon />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2" sx={{ color: '#666' }}>
          Use + or - buttons to zoom in or out of the timeline view
        </Typography>
      </Box>
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

class Mermaid extends React.Component {
  componentDidMount() {
    mermaid.contentLoaded();
  }

  render() {
    return <div className="mermaid">{this.props.chart}</div>;
  }
}

export default PreviewPage;