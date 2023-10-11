import React, { useState, useEffect } from "react";
import "./App.css";
import WaifuCarousel from "./components/WaifuCarousel";
import TetardCoin from "./context/TetardCoin"; // Assurez-vous que le chemin est correct
import WaifuBanq from "./components/WaifuBanq";
import Ameliorations from "./components/Ameliorations"; // Ajout du composant Ameliorations

function App() {
  const [tetardCoin, setTetardCoin] = useState(0); // État de TetardCoin
  const [niveauAmelioration1, setNiveauAmelioration1] = useState(1); // Niveau d'amélioration 1

  const acheterAmelioration1 = (amount) => {
    // Fonction pour acheter des améliorations actives
    // Mettez en œuvre la logique d'achat ici
  };

  const acheterAmelioration2 = (amount) => {
    // Fonction pour acheter des améliorations passives
    // Mettez en œuvre la logique d'achat ici
  };

  const handleIncrement = () => {
    // Logique pour gagner des TetardCoin
    // Mettez en œuvre la logique d'incrémentation ici
    setTetardCoin(tetardCoin + 1); // Incrémente TetardCoin
  };

  useEffect(() => {
    // Mettez en place la génération passive de TetardCoin ici
    const passiveGenerationInterval = setInterval(() => {
      setTetardCoin((prevTetardCoin) => prevTetardCoin + 1); // Incrémente TetardCoin passivement
    }, 1000); // Incrémente chaque seconde (1000 ms)

    return () => clearInterval(passiveGenerationInterval);
  }, []);

 return (
    <div className="App">
      <h1>Waifu : {WaifuBanq[0].name}</h1>
      <img src={WaifuBanq[0].imgSrc} alt={WaifuBanq[0].name} />

      <button onClick={handleIncrement}>
        Cliquez pour obtenir des TetardCoin (Niveau {niveauAmelioration1})
      </button>

      <Ameliorations
        tetardCoin={Math.floor(tetardCoin)}
        onAmelioration1={acheterAmelioration1}
        onAmelioration2={acheterAmelioration2}
        setTetardCoin={setTetardCoin} // Passez la fonction de décrémentation
      />
    </div>
  );
}

export default App;
