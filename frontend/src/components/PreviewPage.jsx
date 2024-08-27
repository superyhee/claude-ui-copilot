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

    Alice->>CA: Generate key pair
    CA->>Alice: Issue certificate
    Alice->>Bob: Send public key & certificate
    Bob->>CA: Verify certificate
    CA->>Bob: Confirm certificate validity
    Bob->>Alice: Encrypt message with Alice's public key
    Alice->>Alice: Decrypt message with private key
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
      <Box sx={{ flex: 1, display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', overflow: 'auto' }}>
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

const Mermaid = ({ chart }) => {
  React.useEffect(() => {
    mermaid.contentLoaded();
  }, []);

  return <div className="mermaid">{chart}</div>;
};

export default PreviewPage;