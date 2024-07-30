const previewPageContentMUI = `
import { Box, Typography, Stack } from '@mui/material';
const PreviewPage = () => {
  return (
    <Box sx={{ p: 4 ,backgroundColor: '#f5f5f5',height:'100%'}}>
      <Stack alignItems="center" spacing={2}>
        <Typography variant="h5">Material-UI</Typography>
      </Stack>
    </Box>
  );
};
export default PreviewPage;`;

const previewPageContentMermaid = `
import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import mermaid from 'mermaid';

const mermaidCode = \`
sequenceDiagram
    participant User
    participant CA
    participant RA
    User->>CA: Request Certificate
    CA->>RA: Forward Request
    RA->>User: Validate Identity
    User->>RA: Provide Identity Proof
    RA->>CA: Approve Request
    CA->>User: Issue Certificate
\`;
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
      <Box sx={{ flex: 1, display: 'flex',height:'100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'auto' }}>
        <Box sx={{ transform: \`scale(\${scale})\`, marginRight: 2 }}>
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

export class Mermaid extends React.Component {
  componentDidMount() {
    mermaid.contentLoaded();
  }
  render() {
    return <div className="mermaid">{this.props.chart}</div>;
  }
}

export default PreviewPage;`;

const previewPageContentPlotly = `import React from 'react';
import Plot from 'react-plotly.js';

function App() {
  const trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 11, 12, 13],
    mode: 'markers',
    marker: {
      color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
      size: [40, 60, 80, 100]
    }
  };

  const data = [trace1];

  const layout = {
    title: 'Bubble Chart',
    showlegend: false,
    height: 600,
    width: 800
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
      }}
    >
      <Plot data={data} layout={layout} />
    </div>
  );
}

export default App;`;

const previewPageContentTailwind = `
export default function App() {
  return (
    <div className="text-black p-4 flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-4">Tailwind</h1>
    </div>
  )
}
`;

module.exports = {
  previewPageContentMUI,
  previewPageContentMermaid,
  previewPageContentPlotly,
  previewPageContentTailwind
};
