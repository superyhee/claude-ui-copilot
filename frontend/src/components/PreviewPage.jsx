import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import mermaid from 'mermaid';

const mermaidCode = `
graph TB
    subgraph "Vehicle"
        A[In-Vehicle System]
        B[Sensors]
        C[Actuators]
    end
    subgraph "Communication"
        D[V2V Communication]
        E[V2I Communication]
    end
    subgraph "Infrastructure"
        F[Traffic Management]
        G[Road Infrastructure]
    end
    subgraph "Cloud Services"
        H[Data Analytics]
        I[Remote Monitoring]
        J[OTA Updates]
    end
    A <--> B
    A <--> C
    A <--> D
    A <--> E
    D <--> E
    E <--> F
    E <--> G
    F <--> H
    G <--> H
    H <--> I
    H <--> J
    I <--> A
    J --> A
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
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', bgcolor: '#f0f8ff' }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#1a5f7a', fontWeight: 'bold' }}>
        车联网架构图
      </Typography>
      <Box sx={{ width: '90%', height: '75%', bgcolor: 'white', borderRadius: 4, boxShadow: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ transform: `scale(${scale})`, transition: 'transform 0.3s ease' }}>
          <Mermaid chart={mermaidCode} />
        </Box>
        <Box sx={{ position: 'absolute', right: 16, bottom: 16, display: 'flex', flexDirection: 'column', bgcolor: 'rgba(255,255,255,0.9)', borderRadius: 2, p: 1, boxShadow: 1 }}>
          <IconButton onClick={handleZoomIn} size="small" sx={{ color: '#1a5f7a' }}>
            <ZoomInIcon />
          </IconButton>
          <IconButton onClick={handleZoomOut} size="small" disabled={scale <= 0.5} sx={{ color: '#1a5f7a' }}>
            <ZoomOutIcon />
          </IconButton>
        </Box>
      </Box>
      <Typography variant="body2" sx={{ mt: 2, color: '#4a6572', maxWidth: '80%', textAlign: 'center' }}>
        此架构图展示了车联网系统的主要组成部分，包括车载系统、通信网络、基础设施和云服务，以及它们之间的相互作用。
      </Typography>
    </Box>
  );
};

mermaid.initialize({
  startOnLoad: true,
  theme: 'forest',
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