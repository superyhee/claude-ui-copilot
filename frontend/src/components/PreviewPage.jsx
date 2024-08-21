import React, { useState, useEffect } from 'react';

const players = [
  { id: 1, name: 'Player 1', role: 'Villager' },
  { id: 2, name: 'Player 2', role: 'Werewolf' },
  { id: 3, name: 'Player 3', role: 'Seer' },
  { id: 4, name: 'Player 4', role: 'Villager' },
  { id: 5, name: 'Player 5', role: 'Werewolf' },
  { id: 6, name: 'Player 6', role: 'Villager' },
];

const App = () => {
  const [gameState, setGameState] = useState('lobby');
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [time, setTime] = useState(60);

  useEffect(() => {
    if (gameState === 'night' || gameState === 'day') {
      const timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            setGameState(gameState === 'night' ? 'day' : 'night');
            return 60;
          }
          return prevTime - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [gameState]);

  const startGame = () => {
    setGameState('night');
  };

  const handlePlayerClick = (playerId) => {
    setSelectedPlayer(playerId);
  };

  const handleVote = () => {
    if (selectedPlayer) {
      // Handle voting logic here
      setSelectedPlayer(null);
      setCurrentPlayer((prev) => (prev % players.length) + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-indigo-700">狼人杀</h1>
      
      {gameState === 'lobby' && (
        <div className="text-center">
          <p className="text-xl mb-4">欢迎来到狼人杀游戏！</p>
          <button
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            onClick={startGame}
          >
            开始游戏
          </button>
        </div>
      )}

      {(gameState === 'night' || gameState === 'day') && (
        <div className="w-full max-w-3xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">
              {gameState === 'night' ? '夜晚' : '白天'}
            </h2>
            <p className="text-xl">剩余时间: {time}秒</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            {players.map((player) => (
              <div
                key={player.id}
                className={`p-4 rounded-lg cursor-pointer ${
                  selectedPlayer === player.id
                    ? 'bg-indigo-200 border-2 border-indigo-600'
                    : 'bg-white hover:bg-gray-100'
                }`}
                onClick={() => handlePlayerClick(player.id)}
              >
                <img
                  src={`https://placehold.co/100x100?text=${player.name}`}
                  alt={`Avatar of ${player.name}`}
                  className="w-16 h-16 rounded-full mx-auto mb-2"
                />
                <p className="text-center font-semibold">{player.name}</p>
                {currentPlayer === player.id && (
                  <p className="text-center text-sm text-indigo-600 mt-1">
                    当前玩家
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-gray-400"
              onClick={handleVote}
              disabled={!selectedPlayer}
            >
              {gameState === 'night' ? '使用技能' : '投票'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;