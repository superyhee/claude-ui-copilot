import React, { useState, useEffect, useCallback } from 'react';

const GAME_HEIGHT = 600;
const GAME_WIDTH = 400;

const Player = ({ position }) => (
  <div className="absolute" style={{ left: position.x, bottom: 20 }}>
    <img src="https://placehold.co/40x40" alt="Player airplane" className="w-10 h-10" />
  </div>
);

const Enemy = ({ position }) => (
  <div className="absolute" style={{ left: position.x, top: position.y }}>
    <img src="https://placehold.co/30x30" alt="Enemy airplane" className="w-8 h-8" />
  </div>
);

const Bullet = ({ position }) => (
  <div className="absolute bg-yellow-400 w-2 h-4 rounded" style={{ left: position.x, bottom: position.y }} />
);

export default function App() {
  const [playerPosition, setPlayerPosition] = useState({ x: GAME_WIDTH / 2 - 20 });
  const [enemies, setEnemies] = useState([]);
  const [bullets, setBullets] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const movePlayer = useCallback((e) => {
    if (e.key === 'ArrowLeft') {
      setPlayerPosition((prev) => ({ x: Math.max(0, prev.x - 10) }));
    } else if (e.key === 'ArrowRight') {
      setPlayerPosition((prev) => ({ x: Math.min(GAME_WIDTH - 40, prev.x + 10) }));
    } else if (e.key === ' ') {
      setBullets((prev) => [...prev, { x: playerPosition.x + 19, y: 40 }]);
    }
  }, [playerPosition.x]);

  useEffect(() => {
    window.addEventListener('keydown', movePlayer);
    return () => window.removeEventListener('keydown', movePlayer);
  }, [movePlayer]);

  useEffect(() => {
    if (gameOver) return;

    const gameLoop = setInterval(() => {
      setEnemies((prevEnemies) => {
        const newEnemies = prevEnemies
          .map((enemy) => ({ ...enemy, y: enemy.y + 2 }))
          .filter((enemy) => enemy.y < GAME_HEIGHT);

        if (Math.random() < 0.02) {
          newEnemies.push({ x: Math.random() * (GAME_WIDTH - 30), y: 0 });
        }

        return newEnemies;
      });

      setBullets((prevBullets) =>
        prevBullets
          .map((bullet) => ({ ...bullet, y: bullet.y + 5 }))
          .filter((bullet) => bullet.y < GAME_HEIGHT)
      );

      setEnemies((prevEnemies) => {
        let newScore = score;
        const survivingEnemies = prevEnemies.filter((enemy) => {
          const hitByBullet = bullets.some(
            (bullet) =>
              bullet.x < enemy.x + 30 &&
              bullet.x + 2 > enemy.x &&
              bullet.y < enemy.y + 30 &&
              bullet.y + 4 > enemy.y
          );

          if (hitByBullet) {
            newScore += 10;
            return false;
          }
          return true;
        });

        setScore(newScore);
        return survivingEnemies;
      });

      setBullets((prevBullets) =>
        prevBullets.filter((bullet) => !enemies.some((enemy) =>
          bullet.x < enemy.x + 30 &&
          bullet.x + 2 > enemy.x &&
          bullet.y < enemy.y + 30 &&
          bullet.y + 4 > enemy.y
        ))
      );

      if (enemies.some((enemy) =>
        enemy.x < playerPosition.x + 40 &&
        enemy.x + 30 > playerPosition.x &&
        enemy.y + 30 > GAME_HEIGHT - 60
      )) {
        setGameOver(true);
      }
    }, 16);

    return () => clearInterval(gameLoop);
  }, [enemies, bullets, playerPosition, score, gameOver]);

  const restartGame = () => {
    setPlayerPosition({ x: GAME_WIDTH / 2 - 20 });
    setEnemies([]);
    setBullets([]);
    setScore(0);
    setGameOver(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Airplane Battle</h1>
      <div
        className="relative bg-blue-200 border-2 border-blue-500"
        style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}
      >
        {!gameOver ? (
          <>
            <Player position={playerPosition} />
            {enemies.map((enemy, index) => (
              <Enemy key={index} position={enemy} />
            ))}
            {bullets.map((bullet, index) => (
              <Bullet key={index} position={bullet} />
            ))}
            <div className="absolute top-2 left-2 text-lg font-semibold">
              Score: {score}
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
            <h2 className="text-white text-3xl font-bold mb-4">Game Over</h2>
            <p className="text-white text-xl mb-4">Your Score: {score}</p>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={restartGame}
            >
              Play Again
            </button>
          </div>
        )}
      </div>
      <div className="mt-4 text-gray-600">
        Use left and right arrow keys to move, spacebar to shoot
      </div>
    </div>
  );
}