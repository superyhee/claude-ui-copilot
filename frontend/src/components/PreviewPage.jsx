import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import mermaid from 'mermaid';

const mermaidCode = `
mindmap
  root((GAI))
    自然语言处理
      机器翻译
      文本分类
      情感分析
      问答系统
    计算机视觉
      图像识别
      目标检测
      图像分割
      人脸识别
    语音技术
      语音识别
      语音合成
      声纹识别
    强化学习
      游戏AI
      机器人控制
      自动驾驶
    生成式AI
      图像生成
      文本生成
      音乐生成
    伦理与安全
      数据隐私
      算法偏见
      AI监管
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
    <Box sx={{ width: '100%', height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
      <Box sx={{ fontSize: '24px', fontWeight: 'bold', mb: 2 }}>GAI 思维导图</Box>
      <Box sx={{ flex: 1, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
        <Box sx={{ width: '90%', height: '90%', overflow: 'auto', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <Box sx={{ transform: `scale(${scale})`, transformOrigin: 'top left', padding: '20px' }}>
            <Mermaid chart={mermaidCode} />
          </Box>
        </Box>
        <Box sx={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', backgroundColor: 'white', borderRadius: '20px', padding: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <IconButton onClick={handleZoomIn} sx={{ mb: 1 }}>
            <ZoomInIcon />
          </IconButton>
          <IconButton onClick={handleZoomOut} disabled={scale <= 0.5}>
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
  flowchart: {
    curve: 'basis'
  },
  mindmap: {
    padding: 20,
    nodeSpacing: 100,
    rankSpacing: 100
  }
});

const Mermaid = ({ chart }) => {
  React.useEffect(() => {
    mermaid.contentLoaded();
  }, [chart]);

  return <div className="mermaid">{chart}</div>;
};

export default PreviewPage;