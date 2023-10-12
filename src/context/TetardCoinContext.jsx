// TetardCoinContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

export const TetardCoinContext = createContext();

export const useTetardCoin = () => {
  return useContext(TetardCoinContext);
};

export function TetardCoinProvider({ children }) {
  const initialState = {
    tetardCoin: 0,
    incrementClick: 1,
    incrementPerSecond: 1,
  };

  const [state, setState] = useState(initialState);

  const updateTetardCoin = (amount) => {
    setState((prev) => ({
      ...prev,
      tetardCoin: prev.tetardCoin + amount,
    }));
  };

  const incrementTetardCoin = (amount) => {
    updateTetardCoin(amount);
  };

  useEffect(() => {
    const passiveGenerationInterval = setInterval(() => {
      updateTetardCoin(state.incrementPerSecond);
    }, 1000);

    return () => clearInterval(passiveGenerationInterval);
  }, [state.incrementPerSecond]);

  const contextValue = {
    ...state,
    incrementTetardCoin,
  };

  return (
    <TetardCoinContext.Provider value={contextValue}>
      {children}
    </TetardCoinContext.Provider>
  );
}
