import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const TetardCoinContext = createContext();

export function TetardCoinProvider({ children }) {
  const initialState = {
    tetardCoin: 0,
    incrementClick: 1,
    incrementPerSecond: 0,
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

  const setIncrementClick = (amount) => {
    setState((prev) => ({
      ...prev,
      incrementClick: amount,
    }));
  };

  const setIncrementPerSecond = (amount) => {
    setState((prev) => ({
      ...prev,
      incrementPerSecond: amount,
    }));
  };

  const setTetardCoin = (amount) => {
    setState((prev) => ({
      ...prev,
      tetardCoin: amount,
    }));
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
    setIncrementClick,
    setIncrementPerSecond,
    setTetardCoin,
  };

  return (
    <TetardCoinContext.Provider value={contextValue}>
      {children}
    </TetardCoinContext.Provider>
  );
}

TetardCoinProvider.propTypes = {
  children: PropTypes.node,
};
