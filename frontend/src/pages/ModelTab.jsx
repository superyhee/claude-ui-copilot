import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import React, { useState } from 'react';

const ModelTab = ({
  model,
  setModel,
  topK,
  setTopK,
  topP,
  setTopP,
  temperature,
  setTemperature,
  provider,
  setProvider
}) => {
  const [topKValue, setTopKValue] = useState(topK);
  const [topPValue, setTopPValue] = useState(topP);
  const [temperatureValue, setTemperatureValue] = useState(temperature);

  const handleModelSettingChange = (event) => {
    setProvider(event.target.value);
  };

  const handleTemperatureChange = (event, newValue) => {
    setTemperature(newValue);
    setTemperatureValue(newValue);
  };

  const handleTopKChange = (event, newValue) => {
    setTopK(newValue);
    setTopKValue(newValue);
  };

  const handleTopKInputChange = (event) => {
    const value = event.target.value.replace(/\D/, '');
    setTopKValue(value);
    if (value >= 10 && value <= 200) {
      setTopK(parseInt(value));
    }
  };

  const handleTopPChange = (event, newValue) => {
    setTopP(newValue);
    setTopPValue(newValue.toFixed(2));
  };

  const handleTopPInputChange = (event) => {
    const value = event.target.value.replace(/[^0-9.]/g, '');
    setTopPValue(value);
    if (value >= 0 && value <= 1) {
      setTopP(parseFloat(value));
    }
  };

  const handleTemperatureInputChange = (event) => {
    const value = event.target.value.replace(/[^0-9.]/g, '');
    setTemperatureValue(value);
    if (value >= 0 && value <= 1) {
      setTemperature(parseFloat(value));
    }
  };

  return (
    <Stack spacing={1} sx={{ m: 2 }}>
      <Stack spacing={1}>
        <InputLabel>Model Provider</InputLabel>
        <Select
          value={provider}
          onChange={handleModelSettingChange}
          sx={{
            height: 40,
            borderRadius: 2
          }}
        >
          <MenuItem value="Bedrock">AWS Bedrock</MenuItem>
          <MenuItem value="Anthropic">Anthropic AI</MenuItem>
        </Select>
      </Stack>
      <Stack spacing={1}>
        <InputLabel id="model-label">Model</InputLabel>
        <Select
          value={model}
          onChange={(e) => setModel(e.target.value)}
          sx={{
            height: 40,
            borderRadius: 2
          }}
        >
          <MenuItem
            value={
              provider === 'Bedrock'
                ? 'anthropic.claude-3-haiku-20240307-v1:0'
                : 'claude-3-haiku-20240307'
            }
          >
            claude-3-haiku
          </MenuItem>
          <MenuItem
            value={
              provider === 'Bedrock'
                ? 'anthropic.claude-3-sonnet-20240229-v1:0'
                : 'claude-3-sonnet-20240229'
            }
          >
            claude-3-sonnet
          </MenuItem>
          <MenuItem
            value={
              provider === 'Bedrock'
                ? 'anthropic.claude-3-opus-20240229-v1:0'
                : 'claude-3-opus-20240229'
            }
          >
            claude-3-opus
          </MenuItem>
          <MenuItem
            value={
              provider === 'Bedrock'
                ? 'anthropic.claude-3-5-sonnet-20240620-v1:0'
                : 'claude-3-5-sonnet-20240620'
            }
          >
            claude-3.5-sonnet
          </MenuItem>
        </Select>

        <Box
          sx={{
            width: '100%',
            p: 0
          }}
        >
          <InputLabel>Temperature</InputLabel>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Slider
              aria-label="Top K"
              value={temperature}
              onChange={handleTemperatureChange}
              step={0.01}
              min={0}
              max={1}
              valueLabelDisplay="auto"
              marks={[
                {
                  value: 0.2,
                  label: (
                    <Chip
                      size="small"
                      icon={<PlaylistAddCheckCircleIcon />}
                      label={'meticulous'}
                      className="opacity-50"
                    />
                  )
                },
                {
                  value: 0.8,
                  label: (
                    <Chip
                      size="small"
                      icon={<LightbulbCircleIcon />}
                      label={'creative'}
                      className="opacity-50"
                    />
                  )
                }
              ]}
            />
            <TextField
              size="small"
              type="number"
              value={temperatureValue}
              onChange={handleTemperatureInputChange}
              inputProps={{ min: 0, max: 1, step: 0.1 }}
              sx={{ ml: 1, width: '80px' }}
            />
          </Stack>
        </Box>
        <Box
          sx={{
            width: '100%',
            p: 0
          }}
        >
          <InputLabel> Top K</InputLabel>

          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Slider
              aria-label="Top K"
              value={topK}
              onChange={handleTopKChange}
              step={10}
              min={0}
              max={500}
              valueLabelDisplay="auto"
            />
            <TextField
              type="number"
              size="small"
              value={topKValue}
              onChange={handleTopKInputChange}
              inputProps={{ min: 0, max: 500 }}
              sx={{ ml: 1, width: '80px' }}
            />
          </Stack>
        </Box>
        <Box sx={{ margin: '10px', p: 0 }}>
          <InputLabel> Top P</InputLabel>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Slider
              aria-label="Top P"
              value={topP}
              onChange={handleTopPChange}
              step={0.01}
              min={0}
              max={1}
              valueLabelDisplay="auto"
            />
            <TextField
              type="number"
              size="small"
              value={topPValue}
              onChange={handleTopPInputChange}
              inputProps={{ min: 0, max: 1, step: 0.1 }}
              sx={{ ml: 1, width: '80px' }}
            />
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};

export default ModelTab;
