import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import mermaid from 'mermaid';

const mermaidCode = `
graph TB
    subgraph "Data Collection"
        A[AWS IoT Core]
        B[Amazon Kinesis]
    end
    subgraph "Data Storage"
        C[Amazon S3]
        D[Amazon DynamoDB]
    end
    subgraph "Data Processing & Analysis"
        E[AWS Lambda]
        F[Amazon EMR]
        G[Amazon SageMaker]
    end
    subgraph "AI/ML Services"
        H[Amazon Comprehend]
        I[Amazon Rekognition]
        J[Amazon Transcribe]
    end
    subgraph "Visualization & Reporting"
        K[Amazon QuickSight]
    end
    subgraph "Security & Compliance"
        L[AWS IAM]
        M[Amazon GuardDuty]
    end
    A --> B
    B --> C
    B --> D
    C --> E
    D --> E
    E --> F
    E --> G
    F --> H
    G --> I
    G --> J
    H --> K
    I --> K
    J --> K
    L --> A
    L --> B
    L --> C
    L --> D
    L --> E
    M --> A
    M --> B
    M --> C
    M --> D
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
        AWS Generative AI Solution Architecture
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
        This architecture diagram illustrates the AWS Generative AI solution, showcasing key components for data collection, storage, processing, AI/ML services, visualization, and security.
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