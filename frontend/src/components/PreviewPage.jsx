import React, { useState, useEffect } from 'react';
import { Box, Typography, Stack, IconButton, Slider, Card, CardMedia, CardContent } from '@mui/material';
import { PlayArrow, Pause, SkipPrevious, SkipNext } from '@mui/icons-material';

const PreviewPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(180);

  const songs = [
    { title: 'Starry Night', artist: 'Vincent van Gogh', cover: 'https://placehold.co/300x300?text=Starry+Night' },
    { title: 'Sunflowers', artist: 'Vincent van Gogh', cover: 'https://placehold.co/300x300?text=Sunflowers' },
    { title: 'The Potato Eaters', artist: 'Vincent van Gogh', cover: 'https://placehold.co/300x300?text=The+Potato+Eaters' },
  ];

  const [currentSong, setCurrentSong] = useState(0);

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentTime((prevTime) => {
          if (prevTime >= duration) {
            clearInterval(timer);
            setIsPlaying(false);
            return 0;
          }
          return prevTime + 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, duration]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    setCurrentSong((prev) => (prev === 0 ? songs.length - 1 : prev - 1));
    setCurrentTime(0);
  };

  const handleNext = () => {
    setCurrentSong((prev) => (prev === songs.length - 1 ? 0 : prev + 1));
    setCurrentTime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <Box sx={{ p: 4, backgroundColor: '#f5deb3', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card sx={{ maxWidth: 345, backgroundColor: '#f0e68c', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <CardMedia
          component="img"
          height="300"
          image={songs[currentSong].cover}
          alt={`Album cover for ${songs[currentSong].title}`}
        />
        <CardContent>
          <Typography variant="h5" component="div" sx={{ color: '#8b4513', fontWeight: 'bold' }}>
            {songs[currentSong].title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
            {songs[currentSong].artist}
          </Typography>
          <Slider
            value={currentTime}
            max={duration}
            onChange={(_, newValue) => setCurrentTime(newValue)}
            sx={{
              color: '#8b4513',
              '& .MuiSlider-thumb': {
                width: 12,
                height: 12,
                transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                '&:before': {
                  boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                },
                '&:hover, &.Mui-focusVisible': {
                  boxShadow: '0px 0px 0px 8px rgb(139 69 19 / 16%)',
                },
                '&.Mui-active': {
                  width: 20,
                  height: 20,
                },
              },
              '& .MuiSlider-rail': {
                opacity: 0.28,
              },
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="body2" color="text.secondary">
              {formatTime(currentTime)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {formatTime(duration)}
            </Typography>
          </Box>
          <Stack direction="row" spacing={1} justifyContent="center">
            <IconButton onClick={handlePrevious} sx={{ color: '#8b4513' }}>
              <SkipPrevious />
            </IconButton>
            <IconButton onClick={handlePlayPause} sx={{ color: '#8b4513' }}>
              {isPlaying ? <Pause /> : <PlayArrow />}
            </IconButton>
            <IconButton onClick={handleNext} sx={{ color: '#8b4513' }}>
              <SkipNext />
            </IconButton>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PreviewPage;