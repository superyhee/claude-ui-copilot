import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import mermaid from 'mermaid';

const mermaidCode = `
graph TB
    subgraph "Presentation Layer"
        A[Route 53]
        B[CloudFront]
    end
    subgraph "Application Layer"
        C[Elastic Load Balancer]
        D[EC2 Instances]
        E[Auto Scaling]
    end
    subgraph "Data Layer"
        F[RDS]
        G[S3]
    end
    A --> B
    B --> C
    C --> D
    D --> E
    D --> F
    D --> G
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
      <Typography variant="h4" gutterBottom sx={{ color: '#0f3057', fontWeight: 'bold' }}>
        AWS-Based Three-Tier Web Application Architecture
      </Typography>
      <Box sx={{ width: '80%', height: '70%', bgcolor: 'white', borderRadius: 4, boxShadow: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ transform: `scale(${scale})`, transition: 'transform 0.3s ease' }}>
          <Mermaid chart={mermaidCode} />
        </Box>
        <Box sx={{ position: 'absolute', right: 16, bottom: 16, display: 'flex', flexDirection: 'column', bgcolor: 'rgba(255,255,255,0.8)', borderRadius: 2, p: 1 }}>
          <IconButton onClick={handleZoomIn} size="small" sx={{ color: '#008080' }}>
            <ZoomInIcon />
          </IconButton>
          <IconButton onClick={handleZoomOut} size="small" disabled={scale <= 0.5} sx={{ color: '#008080' }}>
            <ZoomOutIcon />
          </IconButton>
        </Box>
      </Box>
      <Typography variant="body2" sx={{ mt: 2, color: '#555', maxWidth: '80%', textAlign: 'center' }}>
        This diagram illustrates a three-tier web application architecture using AWS services. 
        It showcases how Route 53 and CloudFront handle the presentation layer, 
        EC2 instances with Auto Scaling manage the application layer, 
        and RDS and S3 comprise the data layer.
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