import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const TetardCoinContext = createContext();

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

  const value = {
    tetardCoin,
    setTetardCoin,
    incrementClick,
    incrementTetardCoin,
    setIncrementClick,
    setIncrementPerSecond,
  };

  return (
    <TetardCoinContext.Provider value={value}>
      {children}
    </TetardCoinContext.Provider>
  );
}

TetardCoinProvider.propTypes = {
  children: PropTypes.node,
};
