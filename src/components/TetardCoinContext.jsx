import React, { createContext, useContext, useState } from 'react';

export const TetardCoinContext = createContext();

export const useTetardCoin = () => {
  return useContext(TetardCoinContext);
};

export function TetardCoinProvider({ children }) {
  const [tetardCoin, setTetardCoin] = useState(0);

  return (
    <TetardCoinContext.Provider value={{ tetardCoin, setTetardCoin }}>
      {children}
    </TetardCoinContext.Provider>
  );
}
