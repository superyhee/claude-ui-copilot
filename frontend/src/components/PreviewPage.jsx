import React, { useState, useEffect, useCallback } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;
const BLOCK_SIZE = 30;

const SHAPES = [
  [[1, 1, 1, 1]],
  [[1, 1], [1, 1]],
  [[1, 1, 1], [0, 1, 0]],
  [[1, 1, 1], [1, 0, 0]],
  [[1, 1, 1], [0, 0, 1]],
  [[1, 1, 0], [0, 1, 1]],
  [[0, 1, 1], [1, 1, 0]]
];

const COLORS = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500'];

const PreviewPage = () => {
  const [board, setBoard] = useState(createEmptyBoard());
  const [currentShape, setCurrentShape] = useState(null);
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const createEmptyBoard = () => {
    return Array(BOARD_HEIGHT).fill().map(() => Array(BOARD_WIDTH).fill(0));
  };

  const getRandomShape = () => {
    const randomIndex = Math.floor(Math.random() * SHAPES.length);
    return SHAPES[randomIndex];
  };

  const isValidMove = (shape, position) => {
    for (let y = 0; y < shape.length; y++) {
      for (let x = 0; x < shape[y].length; x++) {
        if (shape[y][x]) {
          const newX = x + position.x;
          const newY = y + position.y;
          if (newX < 0 || newX >= BOARD_WIDTH || newY >= BOARD_HEIGHT || (newY >= 0 && board[newY][newX])) {
            return false;
          }
        }
      }
    }
    return true;
  };

  const placeShape = useCallback(() => {
    const newBoard = [...board];
    for (let y = 0; y < currentShape.length; y++) {
      for (let x = 0; x < currentShape[y].length; x++) {
        if (currentShape[y][x]) {
          const boardY = y + currentPosition.y;
          const boardX = x + currentPosition.x;
          if (boardY >= 0) {
            newBoard[boardY][boardX] = 1;
          }
        }
      }
    }
    setBoard(newBoard);
    checkLines();
    spawnNewShape();
  }, [board, currentShape, currentPosition]);

  const moveShape = (dx, dy) => {
    const newPosition = { x: currentPosition.x + dx, y: currentPosition.y + dy };
    if (isValidMove(currentShape, newPosition)) {
      setCurrentPosition(newPosition);
    } else if (dy > 0) {
      placeShape();
    }
  };

  const rotateShape = () => {
    const rotatedShape = currentShape[0].map((_, index) =>
      currentShape.map(row => row[index]).reverse()
    );
    if (isValidMove(rotatedShape, currentPosition)) {
      setCurrentShape(rotatedShape);
    }
  };

  const checkLines = () => {
    let linesCleared = 0;
    const newBoard = board.filter(row => {
      if (row.every(cell => cell === 1)) {
        linesCleared++;
        return false;
      }
      return true;
    });
    while (newBoard.length < BOARD_HEIGHT) {
      newBoard.unshift(Array(BOARD_WIDTH).fill(0));
    }
    setBoard(newBoard);
    setScore(prevScore => prevScore + linesCleared * 100);
  };

  const spawnNewShape = () => {
    const newShape = getRandomShape();
    const newPosition = { x: Math.floor(BOARD_WIDTH / 2) - Math.floor(newShape[0].length / 2), y: -newShape.length };
    if (isValidMove(newShape, newPosition)) {
      setCurrentShape(newShape);
      setCurrentPosition(newPosition);
    } else {
      setGameOver(true);
    }
  };

  const handleKeyDown = useCallback((e) => {
    if (!gameOver) {
      switch (e.key) {
        case 'ArrowLeft':
          moveShape(-1, 0);
          break;
        case 'ArrowRight':
          moveShape(1, 0);
          break;
        case 'ArrowDown':
          moveShape(0, 1);
          break;
        case 'ArrowUp':
          rotateShape();
          break;
        default:
          break;
      }
    }
  }, [gameOver, moveShape, rotateShape]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    if (!gameOver) {
      const timer = setInterval(() => {
        moveShape(0, 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [gameOver, moveShape]);

  useEffect(() => {
    if (!currentShape) {
      spawnNewShape();
    }
  }, [currentShape]);

  const renderBoard = () => {
    const boardWithShape = [...board.map(row => [...row])];
    if (currentShape) {
      for (let y = 0; y < currentShape.length; y++) {
        for (let x = 0; x < currentShape[y].length; x++) {
          if (currentShape[y][x]) {
            const boardY = y + currentPosition.y;
            const boardX = x + currentPosition.x;
            if (boardY >= 0 && boardY < BOARD_HEIGHT && boardX >= 0 && boardX < BOARD_WIDTH) {
              boardWithShape[boardY][boardX] = 2;
            }
          }
        }
      }
    }
    return boardWithShape.map((row, y) => (
      <Grid container key={y} justifyContent="center">
        {row.map((cell, x) => (
          <Box
            key={`${x}-${y}`}
            sx={{
              width: BLOCK_SIZE,
              height: BLOCK_SIZE,
              border: '1px solid #ccc',
              backgroundColor: cell === 1 ? '#333' : cell === 2 ? COLORS[SHAPES.indexOf(currentShape)] : 'white',
            }}
          />
        ))}
      </Grid>
    ));
  };

  const restartGame = () => {
    setBoard(createEmptyBoard());
    setCurrentShape(null);
    setCurrentPosition({ x: 0, y: 0 });
    setGameOver(false);
    setScore(0);
    spawnNewShape();
  };

  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" gutterBottom>Tetris</Typography>
      <Box sx={{ border: '2px solid #333', mb: 2 }}>
        {renderBoard()}
      </Box>
      <Typography variant="h6" gutterBottom>Score: {score}</Typography>
      {gameOver && (
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>Game Over</Typography>
          <Button variant="contained" onClick={restartGame}>Restart</Button>
        </Box>
      )}
    </Box>
  );
};

export default PreviewPage;