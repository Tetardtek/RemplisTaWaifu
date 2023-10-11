import React from "react";

function Energie({ tetardCoin, incrementPerSecond }) {
  return (
    <div>
      <h2>Energie</h2>
      <p>Inciter l'Energy</p>
      <button onClick={() => console.log('Incrémenter Energy')}>
        Incrémenter Energy
      </button>
      <p>TetardCoin généré par l'Energy: {tetardCoin}</p>
      <p>Incrémentation passive : {incrementPerSecond} TetardCoin/s</p>
    </div>
  );
}

export default Energie;