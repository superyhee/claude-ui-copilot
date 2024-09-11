import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import mermaid from 'mermaid';

const mermaidCode = `
graph TB
    subgraph "车载设备"
        A[ECU]
        B[IVI]
        C[ADAS]
        D[OBD]
    end
    subgraph "数据收集"
        E[AWS IoT Core]
        F[Amazon Kinesis]
    end
    subgraph "数据存储"
        G[Amazon S3]
        H[Amazon DynamoDB]
    end
    subgraph "数据处理与分析"
        I[AWS Lambda]
        J[Amazon EMR]
        K[Amazon SageMaker]
    end
    subgraph "安全监控"
        L[Amazon GuardDuty]
        M[AWS Security Hub]
        N[Amazon Detective]
    end
    subgraph "可视化与报告"
        O[Amazon QuickSight]
    end
    A --> E
    B --> E
    C --> E
    D --> E
    E --> F
    F --> G
    F --> H
    G --> I
    H --> I
    I --> J
    I --> K
    J --> L
    K --> L
    L --> M
    M --> N
    L --> O
    M --> O
    N --> O
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
        基于AWS安全产品的汽车SOC架构图
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
        此架构图展示了基于AWS安全产品的汽车安全运营中心（SOC）架构，包括数据收集、存储、处理、分析、安全监控和可视化报告等关键组件。
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