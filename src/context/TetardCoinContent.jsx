import React, { createContext, useContext, useState, useEffect } from 'react';

export const TetardCoinContext = createContext();

export const useTetardCoin = () => {
  return useContext(TetardCoinContext);
};

export function TetardCoinProvider({ children }) {
  const [tetardCoin, setTetardCoin] = useState(0);

  const incrementTetardCoin = (amount) => {
    setTetardCoin((prevTetardCoin) => prevTetardCoin + amount);
  }

  useEffect(() => {
    const passiveGenerationInterval = setInterval(() => {
      incrementTetardCoin(1); // Augmente le TetardCoin passivement
    }, 1000);

    return () => clearInterval(passiveGenerationInterval);
  }, []);

  return (
    <TetardCoinContext.Provider value={{ tetardCoin, setTetardCoin, incrementTetardCoin }}>
      {children}
    </TetardCoinContext.Provider>
  );
}
