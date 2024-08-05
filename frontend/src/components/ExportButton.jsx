import { getSvgAsImage, blobToBase64 } from '../lib/utils';
import { Box, Button, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useEditor } from 'tldraw';
import ImportExportIcon from '@mui/icons-material/ImportExport';
const StyledButton = styled(Button)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(9),
  right: theme.spacing(3),
  zIndex: 1000
}));

function ExportButton({ setFiles }) {
  const editor = useEditor();
  const [loading, setLoading] = useState(false);

  const handleExport = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const svg = await editor.getSvg(
        Array.from(editor.getCurrentPageShapesSorted())
      );

      if (!svg) return;

      const blob = new Blob([svg], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);

      const png = await getSvgAsImage(svg, {
        type: 'png',
        quality: 1,
        scale: 1
      });
      const file = new File([png], 'image.png', { type: 'image/png' });
      setFiles([file]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledButton
      variant="contained"
      color="primary"
      onClick={handleExport}
      disabled={loading}
      startIcon={
        loading ? <CircularProgress size={24} /> : <ImportExportIcon />
      }
    >
      {loading ? 'Exporting' : 'Export'}
    </StyledButton>
  );
}

export default ExportButton;
