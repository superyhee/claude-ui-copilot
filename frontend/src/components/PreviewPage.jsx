import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import mermaid from 'mermaid';

const mermaidCode = `
graph TB
    subgraph "Presentation Layer"
        A[Web Browser]
        B[Mobile App]
    end
    subgraph "Application Layer"
        C[Web Server]
        D[Application Server]
    end
    subgraph "Data Layer"
        E[Database]
        F[File Storage]
    end
    A --> C
    B --> C
    C --> D
    D --> E
    D --> F
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
        Three-Tier Web Application Architecture
      </Typography>
      <Box sx={{ width: '80%', height: '70%', bgcolor: 'white', borderRadius: 2, boxShadow: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ transform: `scale(${scale})`, transition: 'transform 0.3s ease' }}>
          <Mermaid chart={mermaidCode} />
        </Box>
        <Box sx={{ position: 'absolute', right: 16, bottom: 16, display: 'flex', flexDirection: 'column', bgcolor: 'rgba(255,255,255,0.8)', borderRadius: 1, p: 1 }}>
          <IconButton onClick={handleZoomIn} size="small">
            <ZoomInIcon />
          </IconButton>
          <IconButton onClick={handleZoomOut} size="small" disabled={scale <= 0.5}>
            <ZoomOutIcon />
          </IconButton>
        </Box>
      </Box>
      <Typography variant="body2" sx={{ mt: 2, color: '#666' }}>
        This diagram illustrates the three layers of a typical web application: Presentation, Application, and Data.
      </Typography>
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

class Mermaid extends React.Component {
  componentDidMount() {
    mermaid.contentLoaded();
  }
  render() {
    return <div className="mermaid">{this.props.chart}</div>;
  }
}

export default PreviewPage;