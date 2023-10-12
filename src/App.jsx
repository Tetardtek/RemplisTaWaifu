import React from "react";
import { useTetardCoin } from "./context/TetardCoinContext";
import TetardCoin from "./context/TetardCoin";
import Ameliorations from "./components/Ameliorations";

function App() {
  const { incrementClick, incrementPerSecond } = useTetardCoin();

  return (
    <div className="App">
      <h1>Waifu : Nom de votre Waifu</h1>
      <img src="url_de_votre_image" alt="Nom de votre Waifu" />

      <TetardCoin />

      <p className="tetardCoinClick">
        Taux de génération actif : Lv.{incrementClick} par onClick
      </p>

      <p className="tetardCoinPassif">
        Taux de génération passif : Lv.{incrementPerSecond} par seconde
      </p>

      <Ameliorations />
    </div>
  );
}

export default App;
