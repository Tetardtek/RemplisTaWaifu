import React from "react";
import { useTetardCoin } from "./TetardCoinContext";

function TetardCoinIncrementAction() {
  const { incrementClick, incrementTetardCoin } = useTetardCoin();

  const handleIncrement = () => {
    incrementTetardCoin(incrementClick);
  };

  return (
    <button className="tetardCoinBtn" onClick={handleIncrement}>
      TetardCoin
    </button>
  );
}

export default TetardCoinIncrementAction;