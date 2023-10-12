import React, { useState, useMemo } from "react";

function Ameliorations({ tetardCoin, setTetardCoin }) {
  const [amelioration1Niveau, setAmelioration1Niveau] = useState(1);
  const [amelioration2Niveau, setAmelioration2Niveau] = useState(1);

  const basePrix = 50;
  const tauxIncrementation = 0.1;

  const amelioration1Prix = useMemo(() => Math.floor(basePrix * Math.pow(1 + tauxIncrementation, amelioration1Niveau - 1)), [amelioration1Niveau]);
  const amelioration2Prix = useMemo(() => Math.floor(basePrix * Math.pow(1 + tauxIncrementation, amelioration2Niveau - 1)), [amelioration2Niveau]);

  const acheterAmelioration = (amelioration, amount) => {
    const coutTotal = amelioration === 1 ? amelioration1Prix * amount : amelioration2Prix * amount;

    if (coutTotal <= tetardCoin) {
      if (amelioration === 1) {
        setAmelioration1Niveau(amelioration1Niveau + amount);
      } else if (amelioration === 2) {
        setAmelioration2Niveau(amelioration2Niveau + amount);
      }

      setTetardCoin(tetardCoin - coutTotal);
    } else {
      console.log("Pas assez de TetardCoin pour acheter cette amélioration.");
    }
  }

  return (
    <div className="divMagasinAmelio">
      <h2>Magasin d'Améliorations</h2>
      <div className="divAmelioActives">
        <p>Améliorations Actives :</p>
        {[1, 3, 10, 100].map((amount) => (
          <div key={amount}>
            Price: <button className="amelioActives" onClick={() => acheterAmelioration(1, amount)}>
              {Math.floor(amelioration1Prix * amount)} - (+{amount})
            </button>
          </div>
        ))}
      </div>
      <div className="divAmelioPassives">
        <p>Améliorations Passives :</p>
        {[1, 3, 10, 100].map (amount => (
          <div key={amount}>
            Price: <button className="amelioPassives" onClick={() => acheterAmelioration(2, amount)}>
              {Math.floor(amelioration2Prix * amount)} - (+{amount})
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ameliorations;
