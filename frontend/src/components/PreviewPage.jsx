import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import mermaid from 'mermaid';
import { icons } from '@iconify-json/logos';

mermaid.registerIconPacks([
  {
    name: icons.prefix,
    icons,
  },
]);

const mermaidCode = `
architecture-beta
    group presentation(logos:react)[Presentation Layer]
        service client(logos:chrome)[Web Browser] in presentation
    end

    group application(logos:nodejs)[Application Layer]
        service server(logos:aws-ec2)[Application Server] in application
    end

    group data(logos:aws-rds)[Data Layer]
        service db(logos:aws-aurora)[Database] in data
        service disk1(logos:aws-glacier)[Storage] in data
        service disk2(logos:aws-s3)[Storage] in data
    end

    client --> server
    server --> db
    server --> disk1
    server --> disk2
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
    <Box sx={{ width: '100%', height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
      <Box sx={{ flex: 1, display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', overflow: 'auto', border: '1px solid #e0e0e0', borderRadius: '8px', backgroundColor: '#ffffff' }}>
        <Box sx={{ transform: `scale(${scale})`, margin: 2, transition: 'transform 0.3s ease' }}>
          <Mermaid chart={mermaidCode} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: 2 }}>
        <IconButton onClick={handleZoomIn} sx={{ backgroundColor: '#e0e0e0', marginBottom: 1, '&:hover': { backgroundColor: '#d5d5d5' } }}>
          <ZoomInIcon />
        </IconButton>
        <IconButton onClick={handleZoomOut} disabled={scale <= 0.5} sx={{ backgroundColor: '#e0e0e0', '&:hover': { backgroundColor: '#d5d5d5' }, '&:disabled': { backgroundColor: '#f0f0f0' } }}>
          <ZoomOutIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

mermaid.initialize({
  startOnLoad: true,
  theme: 'neutral',
  flowchart: {
    curve: 'basis',
  },
});

const Mermaid = React.memo(({ chart }) => {
  React.useEffect(() => {
    mermaid.contentLoaded();
  }, [chart]);

  return <div className="mermaid">{chart}</div>;
});

export default PreviewPage;