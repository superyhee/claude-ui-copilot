import React, { useState, useEffect } from 'react';
import { Box, IconButton, TextField, Button } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import mermaid from 'mermaid';

const mermaidCode = `
graph TD
    A[Connected Car] -->|Data| B(AWS IoT Core)
    B -->|Process| C{AWS Lambda}
    C -->|Store| D[(Amazon DynamoDB)]
    C -->|Analyze| E[Amazon Kinesis]
    E -->|Process| F[Amazon EMR]
    F -->|Store| G[(Amazon S3)]
    B -->|Visualize| H[Amazon QuickSight]
    I[Amazon Cognito] -->|Authenticate| J[AWS AppSync]
    J -->|Query| D
    K[Amazon API Gateway] -->|Expose| C
    L[AWS CloudWatch] -->|Monitor| B
    M[AWS CloudTrail] -->|Audit| B
`;

const PreviewPage = () => {
  const [scale, setScale] = useState(1.5);
  const [userInput, setUserInput] = useState('');
  const [generatedCode, setGeneratedCode] = useState(mermaidCode);

  const handleZoomIn = () => {
    setScale(scale + 0.1);
  };

  const handleZoomOut = () => {
    setScale(Math.max(scale - 0.1, 0.5));
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleGenerate = () => {
    // Mock generation of Mermaid code based on user input
    const newCode = `
      graph TD
        A[${userInput}] -->|Data| B(AWS IoT Core)
        B -->|Process| C{AWS Lambda}
        C -->|Store| D[(Amazon DynamoDB)]
        C -->|Analyze| E[Amazon Kinesis]
    `;
    setGeneratedCode(newCode);
  };

  useEffect(() => {
    mermaid.contentLoaded();
  }, [generatedCode]);

  return (
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
        <TextField
          label="Enter your requirements"
          variant="outlined"
          value={userInput}
          onChange={handleInputChange}
          sx={{ marginRight: 2 }}
        />
        <Button variant="contained" onClick={handleGenerate}>Generate</Button>
      </Box>
      <Box sx={{ width: '100%', height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ flex: 1, display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', overflow: 'auto' }}>
          <Box sx={{ transform: `scale(${scale})`, marginRight: 2 }}>
            <div className="mermaid">{generatedCode}</div>
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
    </Box>
  );
};

mermaid.initialize({
  startOnLoad: true,
});

export default PreviewPage;