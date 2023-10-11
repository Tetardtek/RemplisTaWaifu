import React, { createContext, useContext, useState, useEffect } from 'react';

export const TetardCoinContext = createContext();

export const useTetardCoin = () => {
  return useContext(TetardCoinContext);
};

export function TetardCoinProvider({ children }) {
  const [tetardCoin, setTetardCoin] = useState(0);
  const [incrementClick, setIncrementClick] = useState(1);
  const [incrementPerSecond, setIncrementPerSecond] = useState(1);

  const incrementTetardCoin = (amount) => {
    setTetardCoin((prevTetardCoin) => prevTetardCoin + amount);
  };

  useEffect(() => {
    const passiveGenerationInterval = setInterval(() => {
      incrementTetardCoin(incrementPerSecond);
    }, 1000);

    return () => clearInterval(passiveGenerationInterval);
  }, [incrementPerSecond]);

  // Fonctions pour mettre à jour les améliorations
  const upgradeIncrementPerSecond = (amount) => {
    setIncrementPerSecond((prevIncrementPerSecond) => prevIncrementPerSecond + amount);
  };

  const upgradeIncrementClick = (amount) => {
    setIncrementClick((prevIncrementClick) => prevIncrementClick + amount);
  };

  return (
    <TetardCoinContext.Provider
      value={{
        tetardCoin,
        incrementClick,
        incrementPerSecond,
        incrementTetardCoin,
        upgradeIncrementPerSecond,
        upgradeIncrementClick,
      }}
    >
      {children}
    </TetardCoinContext.Provider>
  );
}
