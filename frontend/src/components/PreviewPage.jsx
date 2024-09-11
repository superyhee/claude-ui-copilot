import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import mermaid from 'mermaid';

const mermaidCode = `
sequenceDiagram
    participant 车辆
    participant OTA服务器
    participant ECU
    车辆->>OTA服务器: 请求更新
    OTA服务器->>车辆: 发送更新包
    车辆->>ECU: 传输更新包
    ECU->>ECU: 验证更新包
    ECU->>ECU: 安装更新
    ECU-->>车辆: 更新状态
    车辆->>OTA服务器: 报告更新结果
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
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f0f4f8' }}>
      <Typography variant="h4" sx={{ my: 3, color: '#2c3e50', fontWeight: 'bold' }}>
        汽车OTA升级详细原理序列图
      </Typography>
      <Box sx={{ width: '90%', height: '75%', display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'white', borderRadius: 4, boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <Box sx={{ flex: 1, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'auto' }}>
          <Box sx={{ transform: `scale(${scale})`, transition: 'transform 0.3s ease' }}>
            <Mermaid chart={mermaidCode} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', mr: 2 }}>
          <IconButton onClick={handleZoomIn} sx={{ mb: 1, bgcolor: '#ecf0f1', '&:hover': { bgcolor: '#bdc3c7' } }}>
            <ZoomInIcon />
          </IconButton>
          <IconButton onClick={handleZoomOut} disabled={scale <= 0.5} sx={{ bgcolor: '#ecf0f1', '&:hover': { bgcolor: '#bdc3c7' } }}>
            <ZoomOutIcon />
          </IconButton>
        </Box>
      </Box>
      <Typography variant="body1" sx={{ mt: 4, color: '#34495e', textAlign: 'center', maxWidth: '80%', lineHeight: 1.6 }}>
        此序列图展示了汽车OTA (Over-The-Air) 升级的详细原理，包括车辆、OTA服务器和ECU之间的交互过程。
        从请求更新到安装更新，再到报告更新结果，整个流程清晰呈现。
      </Typography>
      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: 3 }}>
        <Box sx={{ textAlign: 'center' }}>
          <img src="https://placehold.co/100x100?text=OTA" alt="OTA升级示意图" style={{ borderRadius: '50%', marginBottom: '10px' }} />
          <Typography variant="subtitle2">OTA升级</Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <img src="https://placehold.co/100x100?text=ECU" alt="ECU更新示意图" style={{ borderRadius: '50%', marginBottom: '10px' }} />
          <Typography variant="subtitle2">ECU更新</Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <img src="https://placehold.co/100x100?text=安全" alt="安全验证示意图" style={{ borderRadius: '50%', marginBottom: '10px' }} />
          <Typography variant="subtitle2">安全验证</Typography>
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
    mirrorActors: true,
    actorFontSize: 14,
    actorFontWeight: 'bold',
    noteFontSize: 14,
    messageFontSize: 16
  }
});

const Mermaid = ({ chart }) => {
  React.useEffect(() => {
    mermaid.contentLoaded();
  }, []);

  return <div className="mermaid">{chart}</div>;
};

export default PreviewPage;