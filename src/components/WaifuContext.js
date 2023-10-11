import React, { useState, useEffect, useContext } from 'react';

export const WaifuContext = React.createContext();

export const useWaifu = () => {
  return useContext(WaifuContext);
};

export function WaifuProvider({ children }) {
  const [waifus, setWaifus] = useState([]);
  const [selectedWaifu, setSelectedWaifu] = useState(1);

  const changeWaifu = (waifuId) => {
    setSelectedWaifu(waifuId);
  };

  useEffect(() => {
    // Mettez ici le code pour charger la liste de waifus depuis une API ou une source de données
  }, []);

  return (
    <WaifuContext.Provider value={{ waifus, selectedWaifu, changeWaifu }}>
      {children}
    </WaifuContext.Provider>
  );
}
