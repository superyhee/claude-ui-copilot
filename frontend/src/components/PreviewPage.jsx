import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import mermaid from 'mermaid';

const mermaidCode = `
graph TD
    A[Client Layer] --> B[Application Layer]
    B --> C[Data Layer]
    A --> |HTTP/HTTPS| D[Web Browser]
    B --> |API Calls| E[Web Server]
    B --> |Business Logic| F[Application Server]
    C --> |Data Access| G[Database]
    style A fill:#f9d5e5,stroke:#333,stroke-width:2px
    style B fill:#eeac99,stroke:#333,stroke-width:2px
    style C fill:#e06377,stroke:#333,stroke-width:2px
    style D fill:#f9d5e5,stroke:#333,stroke-width:2px
    style E fill:#eeac99,stroke:#333,stroke-width:2px
    style F fill:#eeac99,stroke:#333,stroke-width:2px
    style G fill:#e06377,stroke:#333,stroke-width:2px
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
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        3-Tier Web Application Architecture
      </Typography>
      <Box sx={{ width: '100%', height: 'calc(100% - 80px)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ flex: 1, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'auto', border: '1px solid #ccc', borderRadius: 2 }}>
          <Box sx={{ transform: `scale(${scale})`, margin: 2 }}>
            <Mermaid chart={mermaidCode} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: 2 }}>
          <IconButton onClick={handleZoomIn} sx={{ marginBottom: 1 }}>
            <ZoomInIcon />
          </IconButton>
          <IconButton onClick={handleZoomOut} disabled={scale <= 0.5}>
            <ZoomOutIcon />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="body1">
          This diagram illustrates the three main layers of a typical web application:
          Client Layer, Application Layer, and Data Layer.
        </Typography>
      </Box>
    </Box>
  );
};

mermaid.initialize({
  startOnLoad: true,
  theme: 'neutral',
  fontFamily: 'Arial, sans-serif',
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