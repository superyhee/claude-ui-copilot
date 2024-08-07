import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import mermaid from 'mermaid';

const mermaidCode = `
erDiagram
    CUSTOMER ||--o{ ORDER : places
    CUSTOMER {
        string customerID PK
        string name
        string email
        string address
    }
    ORDER ||--|{ ORDER_ITEM : contains
    ORDER {
        string orderID PK
        string customerID FK
        date orderDate
        string status
    }
    PRODUCT ||--o{ ORDER_ITEM : includes
    PRODUCT {
        string productID PK
        string name
        number price
        string description
    }
    ORDER_ITEM {
        string orderItemID PK
        string orderID FK
        string productID FK
        number quantity
    }
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
    <Box sx={{ width: '100%', height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f4f8' }}>
      <Box sx={{ flex: 1, display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', overflow: 'auto', border: '1px solid #d0d9e6', borderRadius: '12px', backgroundColor: '#ffffff', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <Box sx={{ transform: `scale(${scale})`, margin: 2 }}>
          <Mermaid chart={mermaidCode} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: 2 }}>
        <IconButton onClick={handleZoomOut} disabled={scale <= 0.5} sx={{ backgroundColor: '#e0e0e0', marginBottom: 1, '&:hover': { backgroundColor: '#d0d0d0' } }}>
          <ZoomOutIcon />
        </IconButton>
        <IconButton onClick={handleZoomIn} sx={{ backgroundColor: '#e0e0e0', '&:hover': { backgroundColor: '#d0d0d0' } }}>
          <ZoomInIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

mermaid.initialize({
  startOnLoad: true,
  theme: 'neutral',
  er: {
    useMaxWidth: false,
    layoutDirection: 'TB',
    entityPadding: 15,
    stroke: '#3080b5',
    fill: '#f4f9fd'
  }
});

const Mermaid = ({ chart }) => {
  React.useEffect(() => {
    mermaid.contentLoaded();
  }, []);

  return <div className="mermaid">{chart}</div>;
};

export default PreviewPage;