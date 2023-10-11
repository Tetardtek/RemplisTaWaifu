import React from 'react';

function Ameliorations({ tetardCoin, setNiveauAmelioration1, setNiveauAmelioration2 }) {
  const calculerPrixAmelioration1 = (niveau) => Math.round(50 * Math.pow(1.1, niveau));
  const calculerPrixAmelioration2 = (niveau) => Math.round(500 * Math.pow(1.1, niveau));

  const achatAmelioration1 = (niveau) => {
    const prix = calculerPrixAmelioration1(niveau);
    if (tetardCoin >= prix) {
      setNiveauAmelioration1(niveau + 1);
    }
  };

  const achatAmelioration2 = (niveau) => {
    const prix = calculerPrixAmelioration2(niveau);
    if (tetardCoin >= prix) {
      setNiveauAmelioration2(niveau + 1);
    }
  };

  return (
    <div>
      <h2>Magasin d'Améliorations</h2>
      <p>TetardCoin: {tetardCoin}</p>
      <div>
        <p>Amélioration Active:</p>
        <p>Niveau: {niveauAmelioration1}</p>
        <p>Prix: {calculerPrixAmelioration1(niveauAmelioration1)} TetardCoin</p>
        <button onClick={() => achatAmelioration1(niveauAmelioration1)}>
          Acheter
        </button>
      </div>
      <div>
        <p>Amélioration Passive:</p>
        <p>Niveau: {niveauAmelioration2}</p>
        <p>Prix: {calculerPrixAmelioration2(niveauAmelioration2)} TetardCoin</p>
        <button onClick={() => achatAmelioration2(niveauAmelioration2)}>
          Acheter
        </button>
      </div>
    </div>
  );
}

export default Ameliorations;
