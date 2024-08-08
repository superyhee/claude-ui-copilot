import React, { useState, useEffect } from 'react';

const MAZE_SIZE = 10;
const PLAYER = 'P';
const WALL = '#';
const EXIT = 'E';
const EMPTY = ' ';

const generateMaze = () => {
  const maze = Array(MAZE_SIZE).fill().map(() => Array(MAZE_SIZE).fill(EMPTY));
  
  // Add walls
  for (let i = 0; i < MAZE_SIZE; i++) {
    maze[0][i] = WALL;
    maze[MAZE_SIZE - 1][i] = WALL;
    maze[i][0] = WALL;
    maze[i][MAZE_SIZE - 1] = WALL;
  }

  // Add random walls
  for (let i = 1; i < MAZE_SIZE - 1; i++) {
    for (let j = 1; j < MAZE_SIZE - 1; j++) {
      if (Math.random() < 0.3) {
        maze[i][j] = WALL;
      }
    }
  }

  // Set player start position
  maze[1][1] = PLAYER;

  // Set exit
  maze[MAZE_SIZE - 2][MAZE_SIZE - 2] = EXIT;

  return maze;
};

export default function App() {
  const [maze, setMaze] = useState(generateMaze());
  const [playerPos, setPlayerPos] = useState({ x: 1, y: 1 });
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (gameWon) return;

      const newPos = { ...playerPos };

      switch (e.key) {
        case 'ArrowUp':
          newPos.y--;
          break;
        case 'ArrowDown':
          newPos.y++;
          break;
        case 'ArrowLeft':
          newPos.x--;
          break;
        case 'ArrowRight':
          newPos.x++;
          break;
        default:
          return;
      }

      if (maze[newPos.y][newPos.x] !== WALL) {
        const newMaze = maze.map(row => [...row]);
        newMaze[playerPos.y][playerPos.x] = EMPTY;
        newMaze[newPos.y][newPos.x] = PLAYER;
        setMaze(newMaze);
        setPlayerPos(newPos);

        if (maze[newPos.y][newPos.x] === EXIT) {
          setGameWon(true);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [maze, playerPos, gameWon]);

  const resetGame = () => {
    setMaze(generateMaze());
    setPlayerPos({ x: 1, y: 1 });
    setGameWon(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">Maze Game</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        {maze.map((row, i) => (
          <div key={i} className="flex">
            {row.map((cell, j) => (
              <div
                key={`${i}-${j}`}
                className={`w-8 h-8 flex items-center justify-center border border-gray-300
                  ${cell === WALL ? 'bg-gray-800' : ''}
                  ${cell === EXIT ? 'bg-green-500' : ''}
                  ${cell === PLAYER ? 'bg-blue-500' : ''}
                `}
              >
                {cell === PLAYER && <div className="w-4 h-4 rounded-full bg-yellow-400"></div>}
                {cell === EXIT && 'Exit'}
              </div>
            ))}
          </div>
        ))}
      </div>
      {gameWon && (
        <div className="mt-8 text-2xl font-bold text-green-600">
          Congratulations! You've reached the exit!
        </div>
      )}
      <button
        onClick={resetGame}
        className="mt-8 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
      >
        Reset Game
      </button>
      <div className="mt-4 text-gray-600">
        Use arrow keys to move the player (yellow dot) to the exit.
      </div>
    </div>
  );
}