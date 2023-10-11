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

  return (
    <TetardCoinContext.Provider value={{ tetardCoin, setTetardCoin, incrementClick, incrementTetardCoin }}>
      {children}
    </TetardCoinContext.Provider>
  );
}