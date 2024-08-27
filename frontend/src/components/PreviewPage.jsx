import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import mermaid from 'mermaid';

const mermaidCode = `
sequenceDiagram
    participant User
    participant Vehicle
    participant OTA Server
    participant Manufacturer

    User->>Vehicle: Initiate OTA Update
    Vehicle->>OTA Server: Check for Updates
    OTA Server->>Vehicle: Available Update Info
    Vehicle->>User: Notify Update Available
    User->>Vehicle: Confirm Update
    Vehicle->>OTA Server: Request Update Package
    OTA Server->>Vehicle: Send Update Package
    Vehicle->>Vehicle: Verify Package Integrity
    Vehicle->>Vehicle: Install Update
    Vehicle->>OTA Server: Report Update Status
    OTA Server->>Manufacturer: Log Update
    Vehicle->>User: Update Complete
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
    <Box sx={{ width: '100%', height: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: '#f5f5f5' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', my: 3, color: '#333' }}>
        OTA Update Process for Automobiles
      </Typography>
      <Box sx={{ flex: 1, width: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden', border: '1px solid #ccc', borderRadius: '12px', boxShadow: '0 6px 12px rgba(0,0,0,0.1)', bgcolor: 'white' }}>
        <Box sx={{ transform: `scale(${scale})`, transition: 'transform 0.3s ease' }}>
          <Mermaid chart={mermaidCode} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
        <IconButton onClick={handleZoomOut} disabled={scale <= 0.5} sx={{ mr: 2, bgcolor: '#2196f3', color: 'white', '&:hover': { bgcolor: '#1976d2' } }}>
          <ZoomOutIcon />
        </IconButton>
        <IconButton onClick={handleZoomIn} sx={{ ml: 2, bgcolor: '#2196f3', color: 'white', '&:hover': { bgcolor: '#1976d2' } }}>
          <ZoomInIcon />
        </IconButton>
      </Box>
      <Typography variant="body1" sx={{ color: '#555', textAlign: 'center', maxWidth: '800px', mt: 2, mb: 4, px: 3 }}>
        This sequence diagram illustrates the Over-The-Air (OTA) update process for automobiles. 
        It shows the interactions between the User, Vehicle, OTA Server, and Manufacturer during a software update, 
        highlighting the steps from initiation to completion of the update.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%', mb: 4 }}>
        <Box sx={{ textAlign: 'center', maxWidth: '200px' }}>
          <img src="https://placehold.co/100x100?text=Security" alt="Security icon representing the secure nature of OTA updates" style={{ marginBottom: '10px' }} />
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Enhanced Security</Typography>
          <Typography variant="body2">Secure communication and package verification ensure update integrity.</Typography>
        </Box>
        <Box sx={{ textAlign: 'center', maxWidth: '200px' }}>
          <img src="https://placehold.co/100x100?text=Convenience" alt="Convenience icon showing the ease of OTA updates" style={{ marginBottom: '10px' }} />
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>User Convenience</Typography>
          <Typography variant="body2">Updates can be performed remotely without visiting a service center.</Typography>
        </Box>
        <Box sx={{ textAlign: 'center', maxWidth: '200px' }}>
          <img src="https://placehold.co/100x100?text=Efficiency" alt="Efficiency icon representing quick update process" style={{ marginBottom: '10px' }} />
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Efficient Process</Typography>
          <Typography variant="body2">Streamlined update process reduces downtime and improves vehicle performance.</Typography>
        </Box>
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