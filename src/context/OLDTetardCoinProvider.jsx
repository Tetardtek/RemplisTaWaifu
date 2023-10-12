import React, { createContext, useContext, useState, useEffect } from 'react';

export const TetardCoinContext = createContext();

export const useTetardCoin = () => {
  const context = useContext(TetardCoinContext);
  if (!context) {
    throw new Error("useTetardCoin must be used within a TetardCoinProvider");
  }
  return context;
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

  const contextValue = {
    tetardCoin,
    setTetardCoin,
    incrementClick,
    setIncrementClick,
    incrementPerSecond,
    setIncrementPerSecond,
    incrementTetardCoin,
  };

  return (
    <TetardCoinContext.Provider value={contextValue}>
      {children}
    </TetardCoinContext.Provider>
  );
}
