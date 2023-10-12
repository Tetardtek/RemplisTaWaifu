import React from "react";
import { useTetardCoin } from "./TetardCoinContext";

function TetardCoinIncrementAction() {
  const { incrementClick, incrementTetardCoin } = useTetardCoin();

  const handleIncrement = () => {
    incrementTetardCoin(incrementClick);
  };

  return (
    <button onClick={handleIncrement}>Cliquez pour obtenir plus de TetardCoin</button>
  );
}

export default TetardCoinIncrementAction;
