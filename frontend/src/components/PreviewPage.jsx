import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import mermaid from 'mermaid';

const mermaidCode = `
sequenceDiagram
    participant Alice
    participant CA as Certificate Authority
    participant Bob
    Alice->>CA: Request Certificate
    CA->>Alice: Issue Certificate (Public Key)
    Alice->>Bob: Send Public Key
    Bob->>Bob: Generate Session Key
    Bob->>Alice: Encrypt Session Key with Alice's Public Key
    Alice->>Alice: Decrypt Session Key with Private Key
    Alice->>Bob: Secure Communication using Session Key
    Bob->>Alice: Secure Communication using Session Key
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
    <Box sx={{ width: '100%', height: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', bgcolor: '#f5f5f5' }}>
      <Box sx={{ fontSize: '24px', fontWeight: 'bold', mb: 2 }}>
        PKI Encryption Principle
      </Box>
      <Box sx={{ flex: 1, width: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'white', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        <Box sx={{ transform: `scale(${scale})`, transition: 'transform 0.3s ease' }}>
          <Mermaid chart={mermaidCode} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <IconButton onClick={handleZoomOut} disabled={scale <= 0.5} sx={{ mr: 1 }}>
          <ZoomOutIcon />
        </IconButton>
        <IconButton onClick={handleZoomIn} sx={{ ml: 1 }}>
          <ZoomInIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

mermaid.initialize({
  startOnLoad: true,
  theme: 'neutral',
  sequence: {
    diagramMarginX: 50,
    diagramMarginY: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    mirrorActors: false
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