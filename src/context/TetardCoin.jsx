import React from "react";
import { useTetardCoin } from "./TetardCoinContext";

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
