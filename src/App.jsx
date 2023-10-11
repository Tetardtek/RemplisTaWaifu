import React, { useState, useEffect } from 'react';
import './App.css';
import WaifuBanq from './components/WaifuBanq';
import Ameliorations from './components/Ameliorations';

function App() {
  const [tetardCoin, setTetardCoin] = useState(0);
  const [niveauAmelioration1, setNiveauAmelioration1] = useState(0);
  const [niveauAmelioration2, setNiveauAmelioration2] = useState(0);

  // Cette fonction gère l'incrémentation du TetardCoin lorsque l'utilisateur clique
  const handleIncrement = () => {
    setTetardCoin((prevTetardCoin) => prevTetardCoin + 1);
  };

  useEffect(() => {
    // Cette fonction augmente le niveau des améliorations passives et actives toutes les secondes
    const interval = setInterval(() => {
      setTetardCoin((prevTetardCoin) => prevTetardCoin + niveauAmelioration1 + niveauAmelioration2);
    }, 1000);

    return () => clearInterval(interval);
  }, [niveauAmelioration1, niveauAmelioration2]);

  return (
    <div className="App">
      <h1>Waifu : {WaifuBanq[0].name}</h1>
      <img src={WaifuBanq[0].imgSrc} alt={WaifuBanq[0].desc} />

      <button onClick={handleIncrement}>
        Waifu : {WaifuBanq[0].name} {Math.floor(tetardCoin)}/{WaifuBanq[0].count}
      </button>

      <Ameliorations
        tetardCoin={Math.floor(tetardCoin)}
        setNiveauAmelioration1={setNiveauAmelioration1}
        setNiveauAmelioration2={setNiveauAmelioration2}
      />
    </div>
  );
}

export default App;
