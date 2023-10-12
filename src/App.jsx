import React, { useState } from "react";
import { useTetardCoin } from "./context/TetardCoinContext";
import TetardCoin from "./context/TetardCoin";
import Ameliorations from "./components/Ameliorations";
import WaifuCard from "./components/WaifuCard";
import WaifuBanq from "./components/WaifuBanq";

function App() {
  const { incrementClick, incrementPerSecond } = useTetardCoin();

  const [currentWaifu, setCurrentWaifu] = useState(getRandomWaifu());

  function getRandomWaifu() {
    const randomIndex = Math.floor(Math.random() * WaifuBanq.length);
    return { ...WaifuBanq[randomIndex] };
  }

  const handleWaifuUpdate = () => {
    setCurrentWaifu(getRandomWaifu());
  };

  return (
    <div className="App">
      <h1>Waifu : {currentWaifu.name}</h1>
      <img src={currentWaifu.imgSrc} alt={currentWaifu.name} />

      <WaifuCard
        waifu={currentWaifu}
        onRandomWaifu={handleWaifuUpdate}
        onWaifuUpdate={handleWaifuUpdate}
      />

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
