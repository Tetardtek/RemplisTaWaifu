import React from "react";

function Ameliorations({ tetardCoin, onAmelioration1, onAmelioration2 }) {
  return (
    <div>
      <h2>Magasin d'Améliorations</h2>
      <p>TetardCoin: {tetardCoin}</p>
      <div>
        <p>Améliorations Actives:</p>
        <button onClick={() => onAmelioration1(1)}>Acheter Niveau 1 (+1)</button>
        <button onClick={() => onAmelioration1(10)}>Acheter Niveau 10 (+10)</button>
        <button onClick={() => onAmelioration1(100)}>Acheter Niveau 100 (+100)</button>
      </div>
      <div>
        <p>Améliorations Passives:</p>
        <button onClick={() => onAmelioration2(1)}>Acheter Niveau 1 (+1)</button>
        <button onClick={() => onAmelioration2(10)}>Acheter Niveau 10 (+10)</button>
        <button onClick={() => onAmelioration2(100)}>Acheter Niveau 100 (+100)</button>
      </div>
    </div>
  );
}

export default Ameliorations;