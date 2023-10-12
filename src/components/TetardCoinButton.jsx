import React, { useState } from "react";

function TetardCoinButton() {
  // État local pour suivre le nombre de TetardCoin gagnés en cliquant sur le bouton.
  const [tetardCoinGained, setTetardCoinGained] = useState(0);

  // Fonction pour gagner des TetardCoin en cliquant sur le bouton.
  const handleIncrementTetardCoin = () => {
    // Utilisez la fonction de mise à jour avec une fonction pour éviter les problèmes d'asynchronisme.
    setTetardCoinGained((prevTetardCoinGained) => prevTetardCoinGained + 1);
  };

  return (
    <div>
      <p>TetardCoin gagnés : {tetardCoinGained}</p>
      <button onClick={handleIncrementTetardCoin}>Cliquez pour gagner des TetardCoin</button>
    </div>
  );
}

export default TetardCoinButton;
