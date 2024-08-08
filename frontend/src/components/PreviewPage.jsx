import React, { useState, useEffect, useCallback } from 'react';

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = 'RIGHT';
const INITIAL_FOOD = { x: 15, y: 15 };

const App = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const moveSnake = useCallback(() => {
    const newSnake = [...snake];
    const head = { ...newSnake[0] };

    switch (direction) {
      case 'UP':
        head.y -= 1;
        break;
      case 'DOWN':
        head.y += 1;
        break;
      case 'LEFT':
        head.x -= 1;
        break;
      case 'RIGHT':
        head.x += 1;
        break;
      default:
        break;
    }

    newSnake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      setFood(generateFood());
      setScore(prevScore => prevScore + 1);
    } else {
      newSnake.pop();
    }

    if (
      head.x < 0 ||
      head.x >= GRID_SIZE ||
      head.y < 0 ||
      head.y >= GRID_SIZE ||
      newSnake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
    ) {
      setGameOver(true);
    } else {
      setSnake(newSnake);
    }
  }, [snake, direction, food]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          setDirection(prevDirection => prevDirection !== 'DOWN' ? 'UP' : prevDirection);
          break;
        case 'ArrowDown':
          setDirection(prevDirection => prevDirection !== 'UP' ? 'DOWN' : prevDirection);
          break;
        case 'ArrowLeft':
          setDirection(prevDirection => prevDirection !== 'RIGHT' ? 'LEFT' : prevDirection);
          break;
        case 'ArrowRight':
          setDirection(prevDirection => prevDirection !== 'LEFT' ? 'RIGHT' : prevDirection);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    if (!gameOver) {
      const gameLoop = setInterval(moveSnake, 200);
      return () => clearInterval(gameLoop);
    }
  }, [moveSnake, gameOver]);

  const generateFood = () => {
    let newFood;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
    } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  };

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood(INITIAL_FOOD);
    setGameOver(false);
    setScore(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-indigo-500 to-purple-600">
      <h1 className="text-5xl font-bold mb-6 text-white text-shadow-lg">Snake Game</h1>
      <div className="relative w-[400px] h-[400px] bg-gray-800 border-4 border-gray-300 rounded-lg shadow-lg">
        {snake.map((segment, index) => (
          <div
            key={index}
            className="absolute bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-200 ease-linear"
            style={{
              left: segment.x * CELL_SIZE,
              top: segment.y * CELL_SIZE,
              width: CELL_SIZE,
              height: CELL_SIZE,
            }}
          />
        ))}
        <div
          className="absolute bg-gradient-to-r from-red-400 to-red-600 rounded-full"
          style={{
            left: food.x * CELL_SIZE,
            top: food.y * CELL_SIZE,
            width: CELL_SIZE,
            height: CELL_SIZE,
          }}
        />
      </div>
      <div className="mt-4 text-white text-2xl font-semibold">Score: {score}</div>
      {gameOver && (
        <div className="mt-6 text-center">
          <p className="text-3xl font-bold mb-4 text-white">Game Over!</p>
          <button
            className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xl font-bold rounded-full hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 shadow-lg"
            onClick={resetGame}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default App;