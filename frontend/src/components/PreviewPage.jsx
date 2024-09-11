import React, { useState } from 'react';
import { Box, IconButton, Typography, Paper, Grid, Tooltip } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import InfoIcon from '@mui/icons-material/Info';
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
    <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', bgcolor: '#f0f4f8' }}>
      <Paper elevation={3} sx={{ width: '90%', maxWidth: 1200, p: 4, borderRadius: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom sx={{ color: '#1a237e', fontWeight: 'bold', textAlign: 'center' }}>
              软件开发生命周期
              <Tooltip title="软件开发生命周期是一个完整的软件开发过程，从需求分析到维护的循环流程">
                <IconButton size="small" sx={{ ml: 1, verticalAlign: 'super' }}>
                  <InfoIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ width: '100%', height: 500, bgcolor: 'white', borderRadius: 2, boxShadow: 1, p: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
              <Box sx={{ flex: 1, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'auto' }}>
                <Box sx={{ transform: `scale(${scale})`, transition: 'transform 0.3s ease' }}>
                  <Mermaid chart={mermaidCode} />
                </Box>
              </Box>
              <Box sx={{ position: 'absolute', right: 16, bottom: 16, display: 'flex', flexDirection: 'column', bgcolor: 'rgba(255,255,255,0.9)', borderRadius: 2, p: 1, boxShadow: 2 }}>
                <Tooltip title="放大">
                  <IconButton onClick={handleZoomIn} size="small" sx={{ mb: 1 }}>
                    <ZoomInIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="缩小">
                  <IconButton onClick={handleZoomOut} size="small" disabled={scale <= 0.5}>
                    <ZoomOutIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" sx={{ mt: 2, color: '#455a64', textAlign: 'center' }}>
              点击缩放按钮可调整图表大小，拖动可移动图表位置
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
        {['需求分析', '设计', '编码实现', '测试', '部署', '维护'].map((stage, index) => (
          <Paper key={index} elevation={2} sx={{ p: 2, bgcolor: '#e3f2fd', borderRadius: 2 }}>
            <Typography variant="subtitle1" sx={{ color: '#0d47a1', fontWeight: 'medium' }}>
              {stage}
            </Typography>
          </Paper>
        ))}
      </Box>
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