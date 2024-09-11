import React, { useState, useEffect } from 'react';
import { Box, IconButton, Typography, TextField, Button } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import mermaid from 'mermaid';

const initialMermaidCode = "erDiagram\n    ECU ||--o{ SENSOR : reads\n    ECU ||--o{ ACTUATOR : controls\n    ECU {\n        string model\n        string manufacturer\n        int processingPower\n        string softwareVersion\n    }\n    SENSOR {\n        string type\n        string location\n        float accuracy\n    }\n    ACTUATOR {\n        string type\n        string location\n        float responseTime\n    }\n    ECU ||--o{ COMMUNICATION_INTERFACE : uses\n    COMMUNICATION_INTERFACE {\n        string protocol\n        int baudRate\n    }\n    ECU ||--o{ MEMORY : contains\n    MEMORY {\n        string type\n        int capacity\n    }\n    ECU ||--o{ DIAGNOSTIC_SYSTEM : implements\n    DIAGNOSTIC_SYSTEM {\n        string protocol\n        string errorCodes\n    }\n    ECU ||--o{ POWER_MANAGEMENT : manages\n    POWER_MANAGEMENT {\n        float voltage\n        float current\n    }\n    ECU ||--o{ SECURITY_MODULE : integrates\n    SECURITY_MODULE {\n        string encryptionType\n        boolean firewallEnabled\n    }";

const PreviewPage = () => {
  const [mermaidCode, setMermaidCode] = useState(initialMermaidCode);
  const [scale, setScale] = useState(1.5);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      er: { 
        useMaxWidth: false,
        layoutDirection: 'TB'
      }
    });
  }, []);

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
        Auto ECU ER Diagram
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
            <Button variant="contained" onClick={handleSaveClick} sx={{ alignSelf: 'flex-end', backgroundColor: '#3498db', '&:hover': { backgroundColor: '#2980b9' } }}>
              Save
            </Button>
          </Box>
        ) : (
          <Box sx={{ width: '90%', height: '90%', overflow: 'auto', border: '1px solid #bdc3c7', borderRadius: '12px', backgroundColor: 'white', boxShadow: '0 6px 12px rgba(0,0,0,0.1)' }}>
            <Box sx={{ transform: `scale(${scale})`, transformOrigin: 'top left', padding: '30px' }}>
              <div className="mermaid">{mermaidCode}</div>
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
            <img src="https://placehold.co/24x24?text=Edit" alt="Edit icon for modifying the ER diagram" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default PreviewPage;