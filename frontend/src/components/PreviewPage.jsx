import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import mermaid from 'mermaid';

const mermaidCode = `
sequenceDiagram
    participant 车辆
    participant 钥匙
    participant ECU
    车辆->>钥匙: 发送挑战信号
    钥匙->>车辆: 返回加密响应
    车辆->>ECU: 转发加密响应
    ECU->>ECU: 验证响应
    ECU-->>车辆: 验证结果
    车辆->>车辆: 根据验证结果决定是否解锁
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
      <Typography variant="h4" sx={{ my: 3, color: '#333' }}>
        汽车电子密钥原理序列图
      </Typography>
      <Box sx={{ width: '80%', height: '70%', display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'white', borderRadius: 2, boxShadow: 3 }}>
        <Box sx={{ flex: 1, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'auto' }}>
          <Box sx={{ transform: `scale(${scale})`, transition: 'transform 0.3s ease' }}>
            <Mermaid chart={mermaidCode} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', mr: 2 }}>
          <IconButton onClick={handleZoomIn} sx={{ mb: 1, bgcolor: '#e0e0e0' }}>
            <ZoomInIcon />
          </IconButton>
          <IconButton onClick={handleZoomOut} disabled={scale <= 0.5} sx={{ bgcolor: '#e0e0e0' }}>
            <ZoomOutIcon />
          </IconButton>
        </Box>
      </Box>
      <Typography variant="body2" sx={{ mt: 3, color: '#666', textAlign: 'center', maxWidth: '80%' }}>
        此序列图展示了汽车电子密钥的基本工作原理，包括车辆、钥匙和ECU之间的交互过程。
      </Typography>
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