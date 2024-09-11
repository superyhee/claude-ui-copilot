import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import mermaid from 'mermaid';

const mermaidCode = `
sequenceDiagram
    participant User as 用户
    participant Vehicle as 车辆
    participant OTA_Server as OTA服务器
    participant Cloud as 云端

    User->>Vehicle: 启动OTA升级
    Vehicle->>OTA_Server: 请求升级包
    OTA_Server->>Cloud: 获取最新固件
    Cloud-->>OTA_Server: 返回固件
    OTA_Server-->>Vehicle: 发送升级包
    Vehicle->>Vehicle: 验证升级包
    Vehicle->>Vehicle: 安装升级
    Vehicle-->>User: 显示升级进度
    Vehicle->>Vehicle: 重启系统
    Vehicle-->>User: 升级完成通知
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
    <Box sx={{ width: '100%', height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f4f8' }}>
      <Typography variant="h4" sx={{ mb: 2, color: '#2c3e50', fontWeight: 'bold' }}>
        汽车OTA升级流程图
      </Typography>
      <Box sx={{ flex: 1, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
        <Box sx={{ width: '90%', height: '90%', overflow: 'auto', border: '1px solid #bdc3c7', borderRadius: '12px', backgroundColor: 'white', boxShadow: '0 6px 12px rgba(0,0,0,0.1)' }}>
          <Box sx={{ transform: `scale(${scale})`, transformOrigin: 'top left', padding: '30px' }}>
            <Mermaid chart={mermaidCode} />
          </Box>
        </Box>
        <Box sx={{ position: 'absolute', right: '30px', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', backgroundColor: 'white', borderRadius: '30px', padding: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <IconButton onClick={handleZoomIn} sx={{ mb: 1, color: '#3498db' }}>
            <ZoomInIcon />
          </IconButton>
          <IconButton onClick={handleZoomOut} disabled={scale <= 0.5} sx={{ color: scale <= 0.5 ? '#bdc3c7' : '#3498db' }}>
            <ZoomOutIcon />
          </IconButton>
        </Box>
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
  }, [chart]);

  return <div className="mermaid">{chart}</div>;
};

export default PreviewPage;