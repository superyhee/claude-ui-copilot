// @mui
import { Box, Typography, Stack } from '@mui/material';
// assets
import { UploadIllustration } from '../../assets';

// ----------------------------------------------------------------------

export default function BlockContent({ isDragActive }) {
  return (
    <Stack
      spacing={1}
      alignItems="center"
      justifyContent="center"
      direction={{ xs: 'column', md: 'column' }}
    >
      <UploadIllustration sx={{ width: 100 }} />

      {/* <Typography gutterBottom variant="subtitle1">
        Drop or select file
      </Typography> */}
      {isDragActive ? (
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Drop the image files here...
        </Typography>
      ) : (
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Drop files here or click to browse through your machine.
        </Typography>
      )}
    </Stack>
  );
}
