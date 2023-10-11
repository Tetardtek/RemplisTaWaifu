import React, { createContext, useContext } from 'react';

export const WaifuBanqContext = createContext();

export const useWaifuBanq = () => {
  return useContext(WaifuBanqContext);
};