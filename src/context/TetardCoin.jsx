import React from 'react';
import { TetardCoinContext } from './TetardCoinContext';

function TetardCoin() {
  const { tetardCoin, incrementClick, incrementTetardCoin } = React.useContext(TetardCoinContext);

  const handleIncrement = () => {
    incrementTetardCoin(incrementClick);
  };

  return (
    <div>
      <h2>TetardCoin</h2>
      <p>TetardCoin : {tetardCoin}</p>
      <button onClick={handleIncrement}>Cliquez pour obtenir des TetardCoin</button>
    </div>
  );
}

export default TetardCoin;
