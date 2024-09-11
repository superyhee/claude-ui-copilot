import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import mermaid from 'mermaid';

const mermaidCode = `
mindmap
  root((R155安全规则))
    网络安全管理系统
      安全政策
      风险评估
      安全监控
    车辆类型和ECU
      车辆OTA能力
      ECU更新机制
    软件更新
      更新流程
      验证机制
      回滚能力
    访问控制
      身份认证
      授权管理
    通信安全
      加密传输
      完整性保护
    入侵检测
      异常行为监测
      日志记录
    数据保护
      个人数据加密
      数据最小化
    供应链安全
      供应商评估
      组件追溯
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
        汽车R155安全规则思维导图
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
  mindmap: {
    padding: 20,
    nodeSpacing: 60,
    rankSpacing: 80,
  }
});

const Mermaid = ({ chart }) => {
  React.useEffect(() => {
    mermaid.contentLoaded();
  }, [chart]);

  return <div className="mermaid">{chart}</div>;
};

export default PreviewPage;