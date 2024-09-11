import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import mermaid from 'mermaid';

const mermaidCode = `
graph TD
    A[需求分析] --> B[设计]
    B --> C[编码实现]
    C --> D[测试]
    D --> E[部署]
    E --> F[维护]
    F -.-> A
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
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', bgcolor: '#f5f5f5' }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#333', fontWeight: 'bold' }}>
        软件开发生命周期
      </Typography>
      <Box sx={{ width: '80%', height: '70%', bgcolor: 'white', borderRadius: 2, boxShadow: 3, p: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
        <Box sx={{ flex: 1, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'auto' }}>
          <Box sx={{ transform: `scale(${scale})` }}>
            <Mermaid chart={mermaidCode} />
          </Box>
        </Box>
        <Box sx={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', bgcolor: 'rgba(255,255,255,0.7)', borderRadius: 1, p: 0.5 }}>
          <IconButton onClick={handleZoomIn} size="small">
            <ZoomInIcon />
          </IconButton>
          <IconButton onClick={handleZoomOut} size="small" disabled={scale <= 0.5}>
            <ZoomOutIcon />
          </IconButton>
        </Box>
      </Box>
      <Typography variant="body2" sx={{ mt: 2, color: '#666' }}>
        点击缩放按钮可调整图表大小
      </Typography>
    </Box>
  );
};

mermaid.initialize({
  startOnLoad: true,
  theme: 'neutral',
  flowchart: {
    curve: 'basis'
  }
});

const Mermaid = ({ chart }) => {
  React.useEffect(() => {
    mermaid.contentLoaded();
  }, []);

  return <div className="mermaid">{chart}</div>;
};

export default PreviewPage;