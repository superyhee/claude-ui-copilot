import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import mermaid from 'mermaid';

const mermaidCode = `
sequenceDiagram
    participant Car
    participant OBU
    participant RSU
    participant CA
    Car->>OBU: Generate key pair
    OBU->>RSU: Send public key and identity info
    RSU->>CA: Forward request
    CA->>CA: Verify identity
    CA->>RSU: Issue certificate
    RSU->>OBU: Transmit certificate
    OBU->>Car: Store certificate
    Car->>RSU: Sign and encrypt messages
    RSU->>Car: Verify signature and decrypt
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
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
      <Box sx={{ width: '100%', padding: '20px', backgroundColor: '#3f51b5', color: 'white', textAlign: 'center' }}>
        <h1>PKI Application in Automotive</h1>
      </Box>
      <Box sx={{ flex: 1, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
        <Box sx={{ 
          width: '80%', 
          height: '80%', 
          overflow: 'auto', 
          backgroundColor: 'white', 
          boxShadow: '0px 0px 10px rgba(0,0,0,0.1)', 
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Box sx={{ transform: `scale(${scale})` }}>
            <Mermaid chart={mermaidCode} />
          </Box>
        </Box>
        <Box sx={{ position: 'absolute', right: '20px', display: 'flex', flexDirection: 'column' }}>
          <IconButton onClick={handleZoomIn} sx={{ backgroundColor: 'white', margin: '5px' }}>
            <ZoomInIcon />
          </IconButton>
          <IconButton onClick={handleZoomOut} disabled={scale <= 0.5} sx={{ backgroundColor: 'white', margin: '5px' }}>
            <ZoomOutIcon />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ width: '100%', padding: '20px', backgroundColor: '#3f51b5', color: 'white', textAlign: 'center' }}>
        <p>PKI Application Sequence Diagram for Automotive Industry</p>
      </Box>
    </Box>
  );
};

mermaid.initialize({
  startOnLoad: true,
  theme: 'default',
  securityLevel: 'loose',
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