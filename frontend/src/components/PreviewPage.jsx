import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import mermaid from 'mermaid';

const mermaidCode = `
sequenceDiagram
    participant User
    participant Vehicle
    participant PKI
    participant CA
    
    User->>Vehicle: Start vehicle
    Vehicle->>PKI: Request authentication
    PKI->>CA: Verify certificate
    CA->>PKI: Certificate status
    PKI->>Vehicle: Authentication result
    Vehicle->>User: Grant/deny access
    
    Vehicle->>PKI: Request secure communication
    PKI->>Vehicle: Provide encryption keys
    Vehicle->>User: Establish secure connection
    
    User->>Vehicle: Initiate software update
    Vehicle->>PKI: Verify update signature
    PKI->>CA: Check certificate revocation
    CA->>PKI: Revocation status
    PKI->>Vehicle: Signature verification result
    Vehicle->>User: Apply/reject update
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
    <Box sx={{ width: '100%', height: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: '#f0f8ff' }}>
      <Box sx={{ fontSize: '24px', fontWeight: 'bold', my: 2, color: '#333' }}>
        PKI Application in Automotive Systems
      </Box>
      <Box sx={{ flex: 1, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <Box sx={{ transform: `scale(${scale})`, transition: 'transform 0.3s ease' }}>
          <Mermaid chart={mermaidCode} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
        <IconButton onClick={handleZoomOut} disabled={scale <= 0.5} sx={{ mr: 1, bgcolor: '#e0e0e0', '&:hover': { bgcolor: '#d0d0d0' } }}>
          <ZoomOutIcon />
        </IconButton>
        <IconButton onClick={handleZoomIn} sx={{ ml: 1, bgcolor: '#e0e0e0', '&:hover': { bgcolor: '#d0d0d0' } }}>
          <ZoomInIcon />
        </IconButton>
      </Box>
      <Box sx={{ fontSize: '14px', color: '#666', textAlign: 'center', maxWidth: '600px', mt: 2 }}>
        This sequence diagram illustrates the application of Public Key Infrastructure (PKI) in automotive systems, 
        showcasing the interactions between the user, vehicle, PKI system, and Certificate Authority (CA) for secure authentication, 
        communication, and software updates.
      </Box>
    </Box>
  );
};

mermaid.initialize({
  startOnLoad: true,
  theme: 'default',
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