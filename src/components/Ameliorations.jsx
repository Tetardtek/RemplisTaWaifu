// Ameliorations.jsx
import React, { useState } from "react";

function Ameliorations({ tetardCoin, onAmelioration1, onAmelioration2, setTetardCoin, niveauAmelioration2 }) {
  const [amelioration1Niveau, setAmelioration1Niveau] = useState(1);
  const [amelioration2Niveau, setAmelioration2Niveau] = useState(1);

  const amelioration1Prix = Math.floor(50 * Math.pow(1.1, amelioration1Niveau));
  const amelioration2Prix = Math.floor(50 * Math.pow(1.1, niveauAmelioration2));

  const acheterAmelioration1 = (amount) => {
    const coutTotal = amelioration1Prix * amount;
    if (tetardCoin >= coutTotal) {
      setTetardCoin(tetardCoin - coutTotal); // Décrémente TetardCoin
      onAmelioration1(amount);
      setAmelioration1Niveau(amelioration1Niveau + amount);
    }
  };

  const acheterAmelioration2 = (amount) => {
    const coutTotal = amelioration2Prix * amount;
    if (tetardCoin >= coutTotal) {
      setTetardCoin(tetardCoin - coutTotal); // Décrémente TetardCoin
      onAmelioration2(amount);
      setAmelioration2Niveau(amelioration2Niveau + amount);
    }
  }

  return (
    <div>
      <h2>Magasin d'Améliorations</h2>
      <p>TetardCoin: {tetardCoin}</p>
      <div>
        <p>Améliorations Actives (Niveau {amelioration1Niveau}) :</p>
        <button onClick={() => acheterAmelioration1(1)}>
          (+1) - {amelioration1Prix} TetardCoin
        </button>
        <button onClick={() => acheterAmelioration1(10)}>
          (+10) - {Math.floor(amelioration1Prix * 10)} TetardCoin
        </button>
        <button onClick={() => acheterAmelioration1(100)}>
          (+100) - {Math.floor(amelioration1Prix * 100)} TetardCoin
        </button>
      </div>
      <div>
        <p>Améliorations Passives (Niveau {amelioration2Niveau}) :</p>
        <button onClick={() => acheterAmelioration2(1)}>
          (+1) - {amelioration2Prix} TetardCoin
        </button>
        <button onClick={() => acheterAmelioration2(10)}>
          (+10) - {Math.floor(amelioration2Prix * 10)} TetardCoin
        </button>
        <button onClick={() => acheterAmelioration2(100)}>
          (+100) - {Math.floor(amelioration2Prix * 100)} TetardCoin
        </button>
      </div>
    </div>
  );
}

export default Ameliorations;
