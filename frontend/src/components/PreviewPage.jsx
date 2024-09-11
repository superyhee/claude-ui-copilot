import React, { useState } from 'react';
import { Box, IconButton, Typography, TextField, Button } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import mermaid from 'mermaid';

const initialMermaidCode = `
flowchart TD
    A[智能汽车] --> B[车载系统]
    A --> C[车联网平台]
    A --> D[云服务]
    B --> E[infotainment系统]
    B --> F[ADAS系统]
    B --> G[车身控制系统]
    C --> H[V2X通信]
    C --> I[远程诊断]
    C --> J[OTA升级]
    D --> K[大数据分析]
    D --> L[AI服务]
    D --> M[车队管理]
`;

const PreviewPage = () => {
  const [mermaidCode, setMermaidCode] = useState(initialMermaidCode);
  const [scale, setScale] = useState(1.5);
  const [isEditing, setIsEditing] = useState(false);

  const handleZoomIn = () => {
    setScale(scale + 0.1);
  };

  const handleZoomOut = () => {
    setScale(Math.max(scale - 0.1, 0.5));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    mermaid.contentLoaded();
  };

  const handleCodeChange = (event) => {
    setMermaidCode(event.target.value);
  };

  return (
    <Box sx={{ width: '100%', height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f4f8' }}>
      <Typography variant="h4" sx={{ mb: 2, color: '#2c3e50', fontWeight: 'bold' }}>
        车联网架构流程图
      </Typography>
      <Box sx={{ flex: 1, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
        {isEditing ? (
          <Box sx={{ width: '90%', height: '90%', display: 'flex', flexDirection: 'column' }}>
            <TextField
              multiline
              rows={20}
              value={mermaidCode}
              onChange={handleCodeChange}
              variant="outlined"
              sx={{ mb: 2, backgroundColor: 'white' }}
            />
            <Button variant="contained" onClick={handleSaveClick} sx={{ alignSelf: 'flex-end' }}>
              保存
            </Button>
          </Box>
        ) : (
          <Box sx={{ width: '90%', height: '90%', overflow: 'auto', border: '1px solid #bdc3c7', borderRadius: '12px', backgroundColor: 'white', boxShadow: '0 6px 12px rgba(0,0,0,0.1)' }}>
            <Box sx={{ transform: `scale(${scale})`, transformOrigin: 'top left', padding: '30px' }}>
              <Mermaid chart={mermaidCode} />
            </Box>
          </Box>
        )}
        <Box sx={{ position: 'absolute', right: '30px', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', backgroundColor: 'white', borderRadius: '30px', padding: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <IconButton onClick={handleZoomIn} sx={{ mb: 1, color: '#3498db' }}>
            <ZoomInIcon />
          </IconButton>
          <IconButton onClick={handleZoomOut} disabled={scale <= 0.5} sx={{ color: scale <= 0.5 ? '#bdc3c7' : '#3498db' }}>
            <ZoomOutIcon />
          </IconButton>
          <IconButton onClick={handleEditClick} sx={{ mt: 1, color: '#3498db' }}>
            <img src="https://placehold.co/24x24?text=Edit" alt="Edit icon" />
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
  }
});

const Mermaid = ({ chart }) => {
  React.useEffect(() => {
    mermaid.contentLoaded();
  }, [chart]);

  return <div className="mermaid">{chart}</div>;
};

export default PreviewPage;