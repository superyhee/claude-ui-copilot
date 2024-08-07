import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import mermaid from 'mermaid';

const mermaidCode = "sequenceDiagram\n    participant Alice\n    participant Bob\n    participant CA (Certificate Authority)\n    Alice->>CA: Request certificate\n    CA-->>Alice: Issue certificate\n    Alice->>Bob: Send public key certificate\n    Bob->>CA: Verify certificate\n    CA-->>Bob: Confirm certificate validity\n    Bob->>Alice: Generate session key\n    Bob->>Alice: Encrypt session key with Alice's public key\n    Alice->>Alice: Decrypt session key with private key\n    Alice->>Bob: Acknowledge receipt of session key\n    Note over Alice,Bob: Secure communication begins";

const PreviewPage = () => {
  const [scale, setScale] = useState(1.5);
  const handleZoomIn = () => {
    setScale(scale + 0.1);
  };
  const handleZoomOut = () => {
    setScale(Math.max(scale - 0.1, 0.5));
  };

  return (
    <Box sx={{ width: '100%', height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f4f8' }}>
      <Box sx={{ flex: 1, display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', overflow: 'auto', border: '1px solid #d0d9e6', borderRadius: '12px', backgroundColor: '#ffffff', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <Box sx={{ transform: `scale(${scale})`, margin: 2 }}>
          <Mermaid chart={mermaidCode} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: 2 }}>
        <IconButton onClick={handleZoomOut} disabled={scale <= 0.5} sx={{ backgroundColor: '#e0e0e0', marginBottom: 1, '&:hover': { backgroundColor: '#d0d0d0' } }}>
          <ZoomOutIcon />
        </IconButton>
        <IconButton onClick={handleZoomIn} sx={{ backgroundColor: '#e0e0e0', '&:hover': { backgroundColor: '#d0d0d0' } }}>
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
    mirrorActors: true
  }
});

const Mermaid = ({ chart }) => {
  React.useEffect(() => {
    mermaid.contentLoaded();
  }, []);

  return <div className="mermaid">{chart}</div>;
};

export default PreviewPage;