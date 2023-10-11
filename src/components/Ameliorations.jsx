import React from 'react';
import { useTetardCoin } from '../context/TetardCoin';

function Ameliorations() {
  const { tetardCoin, upgradeIncrementPerSecond, upgradeIncrementClick } = useTetardCoin();

  const acheterAmelioration = (prix, increment, type) => {
    if (tetardCoin >= prix) {
      // Dépensez les TetardCoins et mettez à jour les améliorations
      setTetardCoin((prevTetardCoin) => prevTetardCoin - prix);
      if (type === 'active') {
        upgradeIncrementClick(increment);
      } else if (type === 'passive') {
        upgradeIncrementPerSecond(increment);
      }
    } else {
      alert("Vous n'avez pas assez de TetardCoin pour acheter cette amélioration.");
    }
  }

  return (
    <div>
      <h2>Magasin d'Améliorations</h2>
      <p>TetardCoin: {tetardCoin}</p>
      <div>
        <p>Améliorations Actives:</p>
        <button onClick={() => acheterAmelioration(prixActive1, incrementActive1, 'active')}>
          Acheter Niveau 1 (+1)
        </button>
        {/* Ajoutez d'autres boutons d'amélioration active ici */}
      </div>
      <div>
        <p>Améliorations Passives:</p>
        <button onClick={() => acheterAmelioration(prixPassive1, incrementPassive1, 'passive')}>
          Acheter Niveau 1 (+1)
        </button>
        {/* Ajoutez d'autres boutons d'amélioration passive ici */}
      </div>
    </div>
  );
}

export default Ameliorations;
