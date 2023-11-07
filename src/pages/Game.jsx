import { useState } from "react";
import { useTetardCoin } from "../components/TetardCoin/contexts/UseTetardCoinContext";
import TetardCoin from "../components/TetardCoin/TetardCoin";
import Ameliorations from "../components/TetardCoin/Ameliorations";
import WaifuCard from "../components/WaifuCard/WaifuCard";
import WaifuBanq from "../components/WaifuCard/WaifuBanq";

function Game() {
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
    <>
      <div className="Game">
        <h1>Remplis : {currentWaifu.name}</h1>

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
    </>
  );
}

export default Game;
