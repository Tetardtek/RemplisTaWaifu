import React, { useState, useContext } from "react";
import WaifuBanq from "./WaifuBanq";
import { TetardCoinContext } from "../context/TetardCoinContext";

function WaifuCard({ waifu, onRandomWaifu, onWaifuUpdate }) {
  const [isEnergyFull, setIsEnergyFull] = useState(false);
  const [waifuCurrentCount, setWaifuCurrentCount] = useState(0);

  const tetardCoinContext = useContext(TetardCoinContext);

  const handleRandomWaifu = () => {
    if (isEnergyFull) {
      const randomIndex = Math.floor(Math.random() * WaifuBanq.length);
      onRandomWaifu(WaifuBanq[randomIndex]);
      setIsEnergyFull(false);
      setWaifuCurrentCount(0);
    }
  };

  const handleEnergyClick = () => {
    const cost = 1 + waifu.changeCount * 2;

    if (tetardCoinContext.tetardCoin >= cost && waifuCurrentCount < waifu.count) {
      tetardCoinContext.setTetardCoin(tetardCoinContext.tetardCoin - cost);
      const newCount = waifuCurrentCount + 1;
      setWaifuCurrentCount(newCount);

      if (newCount === waifu.count) {
        setIsEnergyFull(true);
      }
    }
  };

  const handleChangeWaifuClick = () => {
    if (isEnergyFull && typeof onWaifuUpdate === 'function') {
      const randomIndex = Math.floor(Math.random() * WaifuBanq.length);
      const newWaifu = WaifuBanq[randomIndex];
      onRandomWaifu(newWaifu);
      setIsEnergyFull(false);
      onWaifuUpdate({ ...waifu, changeCount: waifu.changeCount + 1 });
      setWaifuCurrentCount(0);
    }
  };

  const energyFillPercentage = (waifuCurrentCount / waifu.count) * 100;

  return (
    <div className="waifu-card">
      <h3>{waifu.name}</h3>
      <img src={waifu.imgSrc} alt={waifu.name} />
      <p>{waifu.type} : {waifuCurrentCount} / {waifu.count}</p>
      <button className="energyBtn" onClick={handleEnergyClick} disabled={isEnergyFull}>
        Incrémenter l'énergie
      </button>

      {isEnergyFull && (
        <button className="waifuSw" onClick={handleChangeWaifuClick}>Changer de Waifu</button>
      )}  
      <div className="energy-bar">
        <div
          className="energy-fill"
          style={{ width: `${energyFillPercentage}%` }}
        />
      </div>
    </div>
  );
}

export default WaifuCard;
