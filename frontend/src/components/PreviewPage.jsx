import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import mermaid from 'mermaid';

const mermaidCode = "classDiagram\n    class User {\n        +String id\n        +String name\n        +String email\n        +String password\n        +register()\n        +login()\n        +updateProfile()\n    }\n    class Product {\n        +String id\n        +String name\n        +Number price\n        +String description\n        +String category\n        +addToCart()\n        +removeFromCart()\n    }\n    class Cart {\n        +String id\n        +User user\n        +List<Product> items\n        +Number total\n        +addItem()\n        +removeItem()\n        +updateQuantity()\n        +checkout()\n    }\n    class Order {\n        +String id\n        +User user\n        +List<Product> items\n        +Number total\n        +String status\n        +Date orderDate\n        +placeOrder()\n        +cancelOrder()\n        +trackOrder()\n    }\n    class Payment {\n        +String id\n        +Order order\n        +Number amount\n        +String paymentMethod\n        +String status\n        +processPayment()\n        +refundPayment()\n    }\n    User \"1\" -- \"*\" Order : places\n    User \"1\" -- \"1\" Cart : has\n    Cart \"1\" -- \"*\" Product : contains\n    Order \"1\" -- \"*\" Product : includes\n    Order \"1\" -- \"1\" Payment : has";

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
  classDiagram: {
    useMaxWidth: false,
    diagramPadding: 20,
    boxMargin: 10,
    boxPadding: 10,
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