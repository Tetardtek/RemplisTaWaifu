import React, { createContext, useContext, useEffect, useState } from 'react';

export const TetardCoinContext = createContext();

export const useTetardCoin = () => {
  return useContext(TetardCoinContext);
};

export function TetardCoinProvider({ children }) {
  const [tetardCoin, setTetardCoin] = useState(0);
  const [ameliorationActivesNiveau, setAmeliorationActivesNiveau] = useState(1);
  const [ameliorationPassivesNiveau, setAmeliorationPassivesNiveau] = useState(1);

  const incrementTetardCoin = (amount) => {
    setTetardCoin((prevTetardCoin) => prevTetardCoin + amount);
  };

  useEffect(() => {
    // Calculez le taux d'incrémentation par seconde en fonction des niveaux actuels
    const incrementPerSecond = ameliorationPassivesNiveau * 1; // Exemple : +1 par niveau
    const passiveGenerationInterval = setInterval(() => {
      incrementTetardCoin(incrementPerSecond);
    }, 1000);

    return () => clearInterval(passiveGenerationInterval);
  }, [ameliorationPassivesNiveau]);

  return (
    <TetardCoinContext.Provider
      value={{
        tetardCoin,
        setTetardCoin,
        ameliorationActivesNiveau,
        setAmeliorationActivesNiveau,
        ameliorationPassivesNiveau,
        setAmeliorationPassivesNiveau,
      }}
    >
      {children}
    </TetardCoinContext.Provider>
  );
}
