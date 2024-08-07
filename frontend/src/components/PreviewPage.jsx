import React from 'react';
import { Box, Typography, Stack, TextField, Button, IconButton, Slider } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PreviewPage = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: '#ffffff', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
          <Box component="img" src="https://placehold.co/20x20" alt="Amazon logo" sx={{ mr: 1 }} />
          Titan Image Generator G1 v1 | ODT
        </Typography>
        <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>
          更改
        </Typography>
      </Stack>

      <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }}>
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Stack direction="row" justifyContent="flex-end" spacing={1} mb={2}>
            <IconButton size="small"><ZoomOutIcon /></IconButton>
            <IconButton size="small"><ZoomInIcon /></IconButton>
          </Stack>
          <Box sx={{ flexGrow: 1, border: '1px solid #e0e0e0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="https://placehold.co/300x300" alt="Preview of a blue backpack" style={{ maxWidth: '100%', maxHeight: '100%' }} />
          </Box>
        </Box>

        <Stack spacing={2} sx={{ width: 300 }}>
          <Box sx={{ backgroundColor: '#f5f5f5', p: 2, borderRadius: 1 }}>
            <Typography variant="subtitle1" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              配置
              <IconButton size="small"><InfoOutlinedIcon fontSize="small" /></IconButton>
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={1}>
              重置
            </Typography>
            <Typography variant="subtitle2" mb={1}>
              Action
            </Typography>
            <TextField
              select
              fullWidth
              size="small"
              defaultValue="Replace object"
              SelectProps={{
                native: true,
                IconComponent: ExpandMoreIcon
              }}
            >
              <option>Replace object</option>
            </TextField>
          </Box>

          <Box sx={{ backgroundColor: '#f5f5f5', p: 2, borderRadius: 1 }}>
            <Typography variant="subtitle2" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              Mask tools
              <InfoOutlinedIcon fontSize="small" color="disabled" />
            </Typography>
          </Box>

          <Box sx={{ backgroundColor: '#f5f5f5', p: 2, borderRadius: 1 }}>
            <Typography variant="subtitle2" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              否定提示
              <InfoOutlinedIcon fontSize="small" color="disabled" />
            </Typography>
            <TextField
              multiline
              rows={2}
              fullWidth
              placeholder="Add negative prompt"
              variant="outlined"
              size="small"
            />
          </Box>

          <Box sx={{ backgroundColor: '#f5f5f5', p: 2, borderRadius: 1 }}>
            <Typography variant="subtitle2" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              推理图像
              <InfoOutlinedIcon fontSize="small" color="disabled" />
            </Typography>
            <Box sx={{ border: '1px solid #e0e0e0', borderRadius: 1, p: 1, display: 'flex', alignItems: 'center' }}>
              <img src="https://placehold.co/40x40" alt="Thumbnail of a blue backpack" style={{ marginRight: 8 }} />
              <Typography variant="body2">Blue backpack</Typography>
            </Box>
          </Box>

          <Box sx={{ backgroundColor: '#f5f5f5', p: 2, borderRadius: 1 }}>
            <Typography variant="subtitle2" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              高级配置
              <InfoOutlinedIcon fontSize="small" color="disabled" />
            </Typography>
            <Typography variant="body2" mb={1}>提示强度</Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Slider defaultValue={8} min={0} max={10} valueLabelDisplay="auto" />
              <Typography variant="body2">8</Typography>
            </Stack>
            <Typography variant="body2" mt={2} mb={1}>种子</Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Slider defaultValue={0} min={0} max={10} valueLabelDisplay="auto" />
              <Typography variant="body2">0</Typography>
            </Stack>
          </Box>
        </Stack>
      </Stack>

      <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          placeholder="Change flowers to orange"
          sx={{ mr: 2 }}
        />
        <Button variant="contained" color="warning" sx={{ minWidth: 100 }}>
          运行
        </Button>
      </Box>
    </Box>
  );
};

export default PreviewPage;