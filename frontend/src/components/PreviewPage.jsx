import React, { useState, useEffect } from 'react';
import { Box, Typography, Stack, IconButton, Slider, Card, CardMedia, CardContent, LinearProgress, Grid } from '@mui/material';
import { PlayArrow, Pause, SkipPrevious, SkipNext, Repeat, Shuffle } from '@mui/icons-material';

const PreviewPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(180);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);

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
            if (repeat) {
              return 0;
            } else {
              handleNext();
              return 0;
            }
          }
          return prevTime + 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, duration, repeat]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    setCurrentSong((prev) => (prev === 0 ? songs.length - 1 : prev - 1));
    setCurrentTime(0);
  };

  const handleNext = () => {
    if (shuffle) {
      const nextSong = Math.floor(Math.random() * songs.length);
      setCurrentSong(nextSong);
    } else {
      setCurrentSong((prev) => (prev === songs.length - 1 ? 0 : prev + 1));
    }
    setCurrentTime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <Box sx={{ p: 4, backgroundColor: '#1e1e1e', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card sx={{ width: '100%', maxWidth: 400, backgroundColor: '#2a2a2a', boxShadow: '0 8px 16px rgba(0,0,0,0.3)', borderRadius: 4 }}>
        <CardMedia
          component="img"
          height="300"
          image={songs[currentSong].cover}
          alt={`Album cover for ${songs[currentSong].title}`}
          sx={{ objectFit: 'cover', borderRadius: '4px 4px 0 0' }}
        />
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h5" component="div" sx={{ color: '#ffffff', fontWeight: 'bold', mb: 1 }}>
            {songs[currentSong].title}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#b3b3b3', mb: 2 }}>
            {songs[currentSong].artist}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={(currentTime / duration) * 100}
            sx={{
              mb: 2,
              height: 4,
              borderRadius: 2,
              '& .MuiLinearProgress-bar': {
                borderRadius: 2,
                backgroundColor: '#1db954',
              },
            }}
          />
          <Grid container justifyContent="space-between" sx={{ mb: 2 }}>
            <Typography variant="body2" sx={{ color: '#b3b3b3' }}>
              {formatTime(currentTime)}
            </Typography>
            <Typography variant="body2" sx={{ color: '#b3b3b3' }}>
              {formatTime(duration)}
            </Typography>
          </Grid>
          <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
            <IconButton onClick={() => setShuffle(!shuffle)} sx={{ color: shuffle ? '#1db954' : '#b3b3b3' }}>
              <Shuffle />
            </IconButton>
            <IconButton onClick={handlePrevious} sx={{ color: '#ffffff' }}>
              <SkipPrevious fontSize="large" />
            </IconButton>
            <IconButton onClick={handlePlayPause} sx={{ color: '#1db954', backgroundColor: '#ffffff', p: 2, '&:hover': { backgroundColor: '#f0f0f0' } }}>
              {isPlaying ? <Pause fontSize="large" /> : <PlayArrow fontSize="large" />}
            </IconButton>
            <IconButton onClick={handleNext} sx={{ color: '#ffffff' }}>
              <SkipNext fontSize="large" />
            </IconButton>
            <IconButton onClick={() => setRepeat(!repeat)} sx={{ color: repeat ? '#1db954' : '#b3b3b3' }}>
              <Repeat />
            </IconButton>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PreviewPage;