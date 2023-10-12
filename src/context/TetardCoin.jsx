import React from "react";
import { useTetardCoin } from "./TetardCoinContext";
import TetardCoinIncrementAction from "./TetardCoinIncrementAction";

function TetardCoin() {
  const { tetardCoin } = useTetardCoin();

  return (
    <div>
      <h2>TetardCoin</h2>
      <p>TetardCoin : {tetardCoin}</p>
      <TetardCoinIncrementAction />
    </div>
  );
}

export default TetardCoin;
