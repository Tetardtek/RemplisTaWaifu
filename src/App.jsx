import React, { useState, useEffect } from "react";
import "./App.css";
import WaifuCarousel from "./components/WaifuCarousel";
import TetardCoin from "./context/TetardCoin";
import WaifuBanq from "./components/WaifuBanq";
import Ameliorations from "./components/Ameliorations";

function App() {
  const [tetardCoin, setTetardCoin] = useState(0);
  const [niveauAmelioration1, setNiveauAmelioration1] = useState(1);
  const [niveauAmelioration2, setNiveauAmelioration2] = useState(1);

  const acheterAmelioration1 = (amount) => {
    const coutTotal = Math.floor(50 * Math.pow(1.1, niveauAmelioration1)) * amount;
    if (tetardCoin >= coutTotal) {
      setTetardCoin(tetardCoin - coutTotal);
      setNiveauAmelioration1(niveauAmelioration1 + amount);
    }
  };

  const acheterAmelioration2 = (amount) => {
    const coutTotal = Math.floor(50 * Math.pow(1.1, niveauAmelioration2)) * amount;
    if (tetardCoin >= coutTotal) {
      setTetardCoin(tetardCoin - coutTotal);
      setNiveauAmelioration2(niveauAmelioration2 + amount);
    }
  };

  const handleIncrement = () => {
    setTetardCoin(tetardCoin + niveauAmelioration1);
  };

  useEffect(() => {
    const passiveGenerationInterval = setInterval(() => {
      setTetardCoin((prevTetardCoin) => prevTetardCoin + niveauAmelioration2);
    }, 1000);

    return () => clearInterval(passiveGenerationInterval);
  }, [niveauAmelioration1, niveauAmelioration2]);

  return (
    <div className="App">
      <h1>Waifu : {WaifuBanq[0].name}</h1>
      <img src={WaifuBanq[0].imgSrc} alt={WaifuBanq[0].name} />

      <button onClick={handleIncrement}>
        Cliquez pour obtenir des TetardCoin (Niveau {niveauAmelioration1})
      </button>

      <Ameliorations
        tetardCoin={tetardCoin} // Utilisez tetardCoin directement ici
        onAmelioration1={acheterAmelioration1}
        onAmelioration2={acheterAmelioration2}
        niveauAmelioration2={niveauAmelioration2} // Passez le niveau d'Amelioration 2
        setTetardCoin={setTetardCoin} // Assurez-vous que setTetardCoin est correctement transmis
      />
    </div>
  );
}

export default App;
