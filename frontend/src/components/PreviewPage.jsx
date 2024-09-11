import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import mermaid from 'mermaid';

const mermaidCode = `
mindmap
  root((Amazon Leadership Principles))
    Customer Obsession
      :: Start with the customer and work backwards
      :: Work vigorously to earn and keep customer trust
    Ownership
      :: Think long term
      :: Act on behalf of the entire company
    Invent and Simplify
      :: Expect and require innovation from your team
      :: Always find ways to simplify
    Are Right, A Lot
      :: Have strong judgment and good instincts
      :: Seek diverse perspectives
    Learn and Be Curious
      :: Never stop learning
      :: Be curious about new possibilities
    Hire and Develop the Best
      :: Raise the performance bar with every hire
      :: Recognize exceptional talent
    Insist on the Highest Standards
      :: Have relentlessly high standards
      :: Continually raise the bar
    Think Big
      :: Create and communicate a bold direction
      :: Think differently and look around corners
    Bias for Action
      :: Speed matters in business
      :: Many decisions are reversible and do not need extensive study
    Frugality
      :: Accomplish more with less
      :: Constraints breed resourcefulness, self-sufficiency, and invention
    Earn Trust
      :: Listen attentively, speak candidly, and treat others respectfully
      :: Be vocally self-critical
    Dive Deep
      :: Operate at all levels, stay connected to the details
      :: Audit frequently, and skeptically
    Have Backbone; Disagree and Commit
      :: Challenge decisions when you disagree, even when doing so is uncomfortable
      :: Commit wholly once a decision is made
    Deliver Results
      :: Focus on key inputs for your business
      :: Deliver with the right quality and in a timely fashion
`;

const PreviewPage = () => {
  const [scale, setScale] = useState(1);

  const handleZoomIn = () => {
    setScale(prevScale => Math.min(prevScale + 0.1, 2));
  };

  const handleZoomOut = () => {
    setScale(prevScale => Math.max(prevScale - 0.1, 0.5));
  };

  return (
    <Box sx={{ width: '100%', height: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ width: '100%', height: '85vh', overflow: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ transform: `scale(${scale})`, transformOrigin: 'center center' }}>
          <Mermaid chart={mermaidCode} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <IconButton onClick={handleZoomOut} disabled={scale <= 0.5}>
          <ZoomOutIcon />
        </IconButton>
        <IconButton onClick={handleZoomIn} disabled={scale >= 2}>
          <ZoomInIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

mermaid.initialize({
  startOnLoad: true,
  theme: 'default',
  mindmap: {
    padding: 20,
    curve: 'bump'
  }
});

const Mermaid = ({ chart }) => {
  React.useEffect(() => {
    mermaid.contentLoaded();
  }, [chart]);

  return <div className="mermaid">{chart}</div>;
};

export default PreviewPage;