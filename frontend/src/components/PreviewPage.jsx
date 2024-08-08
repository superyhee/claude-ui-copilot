import React, { useState } from 'react';
import { Box, Typography, Stack, Button, Paper, Stepper, Step, StepLabel } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const mockData = [
  { year: '2017', models: 2 },
  { year: '2018', models: 5 },
  { year: '2019', models: 10 },
  { year: '2020', models: 20 },
  { year: '2021', models: 50 },
  { year: '2022', models: 100 },
];

const steps = ['Introduction', 'Timeline', 'Key Developments', 'Impact'];

const PreviewPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Stack spacing={2}>
            <Typography variant="h4">Introduction to Large Language Models</Typography>
            <Typography variant="body1">
              Large Language Models (LLMs) have revolutionized natural language processing and AI capabilities.
            </Typography>
            <img src="https://placehold.co/600x400" alt="Conceptual image of AI and language processing" style={{ maxWidth: '100%', height: 'auto' }} />
          </Stack>
        );
      case 1:
        return (
          <Stack spacing={2}>
            <Typography variant="h4">Timeline of LLM Development</Typography>
            <BarChart width={600} height={300} data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="models" fill="#8884d8" />
            </BarChart>
          </Stack>
        );
      case 2:
        return (
          <Stack spacing={2}>
            <Typography variant="h4">Key Developments in LLMs</Typography>
            <Typography variant="body1">
              - 2018: BERT introduced by Google
              - 2019: GPT-2 released by OpenAI
              - 2020: GPT-3 showcases remarkable capabilities
              - 2022: ChatGPT launches, gaining widespread attention
            </Typography>
          </Stack>
        );
      case 3:
        return (
          <Stack spacing={2}>
            <Typography variant="h4">Impact of Large Language Models</Typography>
            <Typography variant="body1">
              LLMs have significantly impacted various fields including:
              - Natural Language Processing
              - Content Generation
              - Code Assistance
              - Educational Tools
            </Typography>
            <img src="https://placehold.co/600x400" alt="Infographic showing the impact of LLMs across different industries" style={{ maxWidth: '100%', height: 'auto' }} />
          </Stack>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100%', minHeight: '100vh' }}>
      <Paper elevation={3} sx={{ p: 3, backgroundColor: '#ffffff' }}>
        <Stack spacing={3}>
          <Typography variant="h3" align="center">Large Language Models: A Brief History</Typography>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box sx={{ mt: 2 }}>
            {renderStepContent(activeStep)}
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>
            <Button
              variant="contained"
              onClick={activeStep === steps.length - 1 ? () => {} : handleNext}
            >
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};

export default PreviewPage;