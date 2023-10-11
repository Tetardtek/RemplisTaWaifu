import React from 'react';

function Energie({ tetardCoin }) {
  return (
    <div>
      <h2>Energie</h2>
      <p>Inciter l'Energy</p>
      <button onClick={() => console.log('Incrémenter Energy')}>
        Incrémenter Energy
      </button>
      <p>TetardCoin généré par l'Energy: {tetardCoin}</p>
    </div>
  );
}

export default Energie;
