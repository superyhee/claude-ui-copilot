import React, { useState, useEffect, useCallback } from 'react';

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const PLAYER_SIZE = 40;
const ENEMY_SIZE = 30;
const ENEMY_SPEED = 2;

export default function App() {
  const [playerPosition, setPlayerPosition] = useState({ x: GAME_WIDTH / 2, y: GAME_HEIGHT / 2 });
  const [enemies, setEnemies] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const movePlayer = useCallback((e) => {
    if (gameOver) return;
    const { clientX, clientY } = e;
    const gameContainer = e.currentTarget.getBoundingClientRect();
    const newX = Math.max(0, Math.min(clientX - gameContainer.left, GAME_WIDTH - PLAYER_SIZE));
    const newY = Math.max(0, Math.min(clientY - gameContainer.top, GAME_HEIGHT - PLAYER_SIZE));
    setPlayerPosition({ x: newX, y: newY });
  }, [gameOver]);

  const spawnEnemy = useCallback(() => {
    const side = Math.floor(Math.random() * 4);
    let x, y;
    switch (side) {
      case 0: // Top
        x = Math.random() * GAME_WIDTH;
        y = -ENEMY_SIZE;
        break;
      case 1: // Right
        x = GAME_WIDTH;
        y = Math.random() * GAME_HEIGHT;
        break;
      case 2: // Bottom
        x = Math.random() * GAME_WIDTH;
        y = GAME_HEIGHT;
        break;
      case 3: // Left
        x = -ENEMY_SIZE;
        y = Math.random() * GAME_HEIGHT;
        break;
    }
    return { x, y, direction: Math.atan2(playerPosition.y - y, playerPosition.x - x) };
  }, [playerPosition]);

  useEffect(() => {
    if (gameOver) return;

    const enemyInterval = setInterval(() => {
      setEnemies(prevEnemies => [...prevEnemies, spawnEnemy()]);
    }, 2000);

    const gameLoop = setInterval(() => {
      setEnemies(prevEnemies => {
        return prevEnemies.filter(enemy => {
          const dx = playerPosition.x - enemy.x;
          const dy = playerPosition.y - enemy.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < (PLAYER_SIZE + ENEMY_SIZE) / 2) {
            if (PLAYER_SIZE > ENEMY_SIZE) {
              setScore(prevScore => prevScore + 1);
              return false;
            } else {
              setGameOver(true);
              return true;
            }
          }

          const newX = enemy.x + Math.cos(enemy.direction) * ENEMY_SPEED;
          const newY = enemy.y + Math.sin(enemy.direction) * ENEMY_SPEED;

          if (newX < -ENEMY_SIZE || newX > GAME_WIDTH || newY < -ENEMY_SIZE || newY > GAME_HEIGHT) {
            return false;
          }

          return { ...enemy, x: newX, y: newY };
        });
      });
    }, 1000 / 60);

    return () => {
      clearInterval(enemyInterval);
      clearInterval(gameLoop);
    };
  }, [gameOver, playerPosition, spawnEnemy]);

  const restartGame = () => {
    setPlayerPosition({ x: GAME_WIDTH / 2, y: GAME_HEIGHT / 2 });
    setEnemies([]);
    setScore(0);
    setGameOver(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Big Fish Eat Small Fish</h1>
      <div
        className="relative bg-blue-200 cursor-none"
        style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}
        onMouseMove={movePlayer}
      >
        {!gameOver && (
          <img
            src="https://placehold.co/40x40"
            alt="Orange player fish"
            className="absolute"
            style={{
              width: PLAYER_SIZE,
              height: PLAYER_SIZE,
              left: playerPosition.x,
              top: playerPosition.y,
              transform: 'translate(-50%, -50%) rotate(90deg)',
              transition: 'left 0.1s, top 0.1s',
            }}
          />
        )}
        {enemies.map((enemy, index) => (
          <img
            key={index}
            src="https://placehold.co/30x30"
            alt="Green enemy fish"
            className="absolute"
            style={{
              width: ENEMY_SIZE,
              height: ENEMY_SIZE,
              left: enemy.x,
              top: enemy.y,
              transform: `translate(-50%, -50%) rotate(${enemy.direction * (180 / Math.PI)}deg)`,
            }}
          />
        ))}
        {gameOver && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Game Over</h2>
              <p className="text-xl mb-4">Your Score: {score}</p>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={restartGame}
              >
                Play Again
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="mt-4 text-xl font-bold">Score: {score}</div>
    </div>
  );
}