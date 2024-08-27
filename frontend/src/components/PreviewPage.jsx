import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import mermaid from 'mermaid';

const mermaidCode = `
classDiagram
    class User {
        +String username
        +String email
        +String password
        +register()
        +login()
        +updateProfile()
    }
    class Product {
        +String name
        +Number price
        +String description
        +Number stock
        +addToCart()
        +updateStock()
    }
    class Cart {
        +Array items
        +Number totalPrice
        +addItem()
        +removeItem()
        +checkout()
    }
    class Order {
        +String orderId
        +Array products
        +String status
        +Date orderDate
        +processOrder()
        +updateStatus()
    }
    class Payment {
        +String paymentMethod
        +Number amount
        +processPayment()
        +refund()
    }
    User "1" -- "0..*" Order
    User "1" -- "1" Cart
    Cart "1" -- "0..*" Product
    Order "1" -- "1..*" Product
    Order "1" -- "1" Payment
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
  );
};

mermaid.initialize({
  startOnLoad: true,
});

const Mermaid = ({ chart }) => {
  React.useEffect(() => {
    mermaid.contentLoaded();
  }, []);

  return <div className="mermaid">{chart}</div>;
};

export default PreviewPage;