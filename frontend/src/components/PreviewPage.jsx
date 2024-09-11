import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import mermaid from 'mermaid';

const mermaidCode = `
quadrantChart
    title Reach and engagement of campaigns
    x-axis Low Reach --> High Reach
    y-axis Low Engagement --> High Engagement
    quadrant-1 We should expand
    quadrant-2 Need to promote
    quadrant-3 Re-evaluate
    quadrant-4 May be improved
    Campaign A: [0.3, 0.6]
    Campaign B: [0.45, 0.23]
    Campaign C: [0.57, 0.69]
    Campaign D: [0.78, 0.34]
    Campaign E: [0.40, 0.34]
    Campaign F: [0.35, 0.78]
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
    <Box sx={{ width: '100%', height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ flex: 1, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'auto' }}>
        <Box sx={{ transform: `scale(${scale})`, marginRight: 2 }}>
          <Mermaid chart={mermaidCode} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <IconButton onClick={handleZoomOut} disabled={scale <= 0.5}>
          <ZoomOutIcon />
        </IconButton>
        <IconButton onClick={handleZoomIn}>
          <ZoomInIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

mermaid.initialize({
  startOnLoad: true,
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