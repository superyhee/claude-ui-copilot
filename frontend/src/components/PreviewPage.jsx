import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import mermaid from 'mermaid';

const mermaidCode = `
erDiagram
    CUSTOMER ||--o{ ORDER : places
    CUSTOMER {
        int id
        string name
        string email
        string address
    }
    ORDER ||--|{ ORDER_ITEM : contains
    ORDER {
        int id
        date orderDate
        string status
        float totalAmount
    }
    ORDER_ITEM {
        int id
        int orderId
        int productId
        int quantity
        float price
    }
    PRODUCT ||--o{ ORDER_ITEM : "is part of"
    PRODUCT {
        int id
        string name
        string description
        float price
        int stockQuantity
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
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', bgcolor: '#f0f4f8' }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#2c3e50', fontWeight: 'bold', mb: 3 }}>
        Order System ER Diagram
      </Typography>
      <Box sx={{ width: '90%', height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'white', borderRadius: 4, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <Box sx={{ flex: 1, display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', overflow: 'auto' }}>
          <Box sx={{ transform: `scale(${scale})`, marginRight: 2 }}>
            <Mermaid chart={mermaidCode} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', mr: 2 }}>
          <IconButton onClick={handleZoomOut} disabled={scale <= 0.5} sx={{ bgcolor: '#ecf0f1', mb: 1, '&:hover': { bgcolor: '#bdc3c7' } }}>
            <ZoomOutIcon />
          </IconButton>
          <IconButton onClick={handleZoomIn} sx={{ bgcolor: '#ecf0f1', '&:hover': { bgcolor: '#bdc3c7' } }}>
            <ZoomInIcon />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
          Use the + and - buttons to zoom in or out of the ER diagram
        </Typography>
      </Box>
    </Box>
  );
};

mermaid.initialize({
  startOnLoad: true,
  theme: 'neutral',
  er: {
    useMaxWidth: false,
    htmlLabels: true,
    diagramPadding: 20
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