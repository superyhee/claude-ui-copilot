import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import mermaid from 'mermaid';

const mermaidCode = `
timeline
    title 五代十国变更时间线
    907 : 后梁建立
    923 : 后唐建立
    936 : 后晋建立
    947 : 后汉建立
    951 : 后周建立
    960 : 北宋建立，五代结束
    907-979 : 十国并存时期
      : 前蜀 (907-925)
      : 后蜀 (934-965)
      : 吴 (902-937)
      : 南唐 (937-975)
      : 武朗 (907-951)
      : 闽 (909-945)
      : 楚 (907-951)
      : 南汉 (917-971)
      : 南平 (924-963)
      : 北汉 (951-979)
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
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant="h4" gutterBottom>
        五代十国变更时间线
      </Typography>
      <Box sx={{ width: '100%', height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ flex: 1, display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', overflow: 'auto' }}>
          <Box sx={{ transform: `scale(${scale})`, marginRight: 2 }}>
            <Mermaid chart={mermaidCode} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <IconButton onClick={handleZoomOut} disabled={scale <= 0.5}>
            <ZoomOutIcon />
          </IconButton>
          <IconButton onClick={handleZoomIn}>
            <ZoomInIcon />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2">
          点击 + 或 - 按钮可以放大或缩小时间线视图
        </Typography>
      </Box>
    </Box>
  );
};

mermaid.initialize({
  startOnLoad: true,
  theme: 'default',
  flowchart: {
    useMaxWidth: false,
    htmlLabels: true
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