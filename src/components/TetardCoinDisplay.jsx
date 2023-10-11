import React from 'react';
import { useTetardCoin } from './TetardCoinContext';

function TetardCoinDisplay() {
  const { tetardCoin } = useTetardCoin();

  return <p>TetardCoin total: {tetardCoin}</p>;
}

export default TetardCoinDisplay;
