import React, { useState, useEffect, useCallback } from 'react';

const GRID_SIZE = 20;
const CELL_SIZE = 30;

const Direction = {
  UP: 'UP',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
};

const Tank = ({ x, y, direction, isPlayer }) => {
  const tankColor = isPlayer ? 'bg-blue-500' : 'bg-red-500';
  const tankStyle = {
    left: `${x * CELL_SIZE}px`,
    top: `${y * CELL_SIZE}px`,
    width: `${CELL_SIZE}px`,
    height: `${CELL_SIZE}px`,
    transform: `rotate(${
      direction === Direction.UP ? 0 :
      direction === Direction.RIGHT ? 90 :
      direction === Direction.DOWN ? 180 :
      270
    }deg)`,
  };

  return (
    <div className={`absolute ${tankColor} transition-all duration-200`} style={tankStyle}>
      <div className="w-3/4 h-1/2 bg-gray-700 absolute top-1/4 left-1/8"></div>
      <div className="w-1/4 h-3/4 bg-gray-700 absolute top-1/8 left-3/8"></div>
    </div>
  );
};

const Bullet = ({ x, y }) => {
  const bulletStyle = {
    left: `${x * CELL_SIZE + CELL_SIZE / 2}px`,
    top: `${y * CELL_SIZE + CELL_SIZE / 2}px`,
  };

  return (
    <div className="absolute w-2 h-2 bg-yellow-400 rounded-full" style={bulletStyle}></div>
  );
};

const TankGame = () => {
  const [playerTank, setPlayerTank] = useState({ x: 0, y: 0, direction: Direction.RIGHT });
  const [enemyTank, setEnemyTank] = useState({ x: GRID_SIZE - 1, y: GRID_SIZE - 1, direction: Direction.LEFT });
  const [bullets, setBullets] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const moveTank = useCallback((tank, direction) => {
    let newX = tank.x;
    let newY = tank.y;

    switch (direction) {
      case Direction.UP:
        newY = Math.max(0, tank.y - 1);
        break;
      case Direction.DOWN:
        newY = Math.min(GRID_SIZE - 1, tank.y + 1);
        break;
      case Direction.LEFT:
        newX = Math.max(0, tank.x - 1);
        break;
      case Direction.RIGHT:
        newX = Math.min(GRID_SIZE - 1, tank.x + 1);
        break;
    }

    return { ...tank, x: newX, y: newY, direction };
  }, []);

  const handleKeyPress = useCallback((e) => {
    if (gameOver) return;

    switch (e.key) {
      case 'ArrowUp':
        setPlayerTank((prev) => moveTank(prev, Direction.UP));
        break;
      case 'ArrowDown':
        setPlayerTank((prev) => moveTank(prev, Direction.DOWN));
        break;
      case 'ArrowLeft':
        setPlayerTank((prev) => moveTank(prev, Direction.LEFT));
        break;
      case 'ArrowRight':
        setPlayerTank((prev) => moveTank(prev, Direction.RIGHT));
        break;
      case ' ':
        fireBullet(playerTank);
        break;
    }
  }, [gameOver, moveTank, playerTank]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  useEffect(() => {
    if (gameOver) return;

    const enemyMove = setInterval(() => {
      const directions = [Direction.UP, Direction.DOWN, Direction.LEFT, Direction.RIGHT];
      const randomDirection = directions[Math.floor(Math.random() * directions.length)];
      setEnemyTank((prev) => moveTank(prev, randomDirection));
    }, 1000);

    return () => clearInterval(enemyMove);
  }, [gameOver, moveTank]);

  const fireBullet = (tank) => {
    const newBullet = { x: tank.x, y: tank.y, direction: tank.direction };
    setBullets((prev) => [...prev, newBullet]);
  };

  useEffect(() => {
    if (gameOver) return;

    const bulletInterval = setInterval(() => {
      setBullets((prevBullets) => {
        const newBullets = prevBullets.map((bullet) => {
          let newX = bullet.x;
          let newY = bullet.y;

          switch (bullet.direction) {
            case Direction.UP:
              newY--;
              break;
            case Direction.DOWN:
              newY++;
              break;
            case Direction.LEFT:
              newX--;
              break;
            case Direction.RIGHT:
              newX++;
              break;
          }

          return { ...bullet, x: newX, y: newY };
        }).filter((bullet) => 
          bullet.x >= 0 && bullet.x < GRID_SIZE && bullet.y >= 0 && bullet.y < GRID_SIZE
        );

        // Check for collisions
        newBullets.forEach((bullet) => {
          if (bullet.x === enemyTank.x && bullet.y === enemyTank.y) {
            setGameOver(true);
          }
          if (bullet.x === playerTank.x && bullet.y === playerTank.y) {
            setGameOver(true);
          }
        });

        return newBullets;
      });
    }, 100);

    return () => clearInterval(bulletInterval);
  }, [gameOver, enemyTank, playerTank]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Tank Battle</h1>
      <div 
        className="relative bg-green-200 border-4 border-green-600"
        style={{ width: `${GRID_SIZE * CELL_SIZE}px`, height: `${GRID_SIZE * CELL_SIZE}px` }}
      >
        <Tank {...playerTank} isPlayer={true} />
        <Tank {...enemyTank} isPlayer={false} />
        {bullets.map((bullet, index) => (
          <Bullet key={index} {...bullet} />
        ))}
      </div>
      {gameOver && (
        <div className="mt-4 text-2xl font-bold text-red-600">Game Over!</div>
      )}
      <div className="mt-4">
        <p>Use arrow keys to move and spacebar to shoot</p>
      </div>
    </div>
  );
};

export default TankGame;