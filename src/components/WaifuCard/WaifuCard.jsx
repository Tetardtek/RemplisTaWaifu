import { useState, useContext } from "react";
import WaifuBanq from "./WaifuBanq";
import { TetardCoinContext } from "../TetardCoin/contexts/TetardCoinContext";
import PropTypes from "prop-types";

function WaifuCard({ waifu, onRandomWaifu, onWaifuUpdate }) {
  const [isEnergyFull, setIsEnergyFull] = useState(false);
  const [waifuCurrentCount, setWaifuCurrentCount] = useState(0);

  const tetardCoinContext = useContext(TetardCoinContext);

  const handleEnergyClick = () => {
    const cost = 1 + waifu.changeCount * 2;

    if (
      tetardCoinContext.tetardCoin >= cost &&
      waifuCurrentCount < waifu.count
    ) {
      tetardCoinContext.setTetardCoin(tetardCoinContext.tetardCoin - cost);
      const newCount = waifuCurrentCount + 1;
      setWaifuCurrentCount(newCount);

      if (newCount === waifu.count) {
        setIsEnergyFull(true);
      }
    }
  };

  const handleChangeWaifuClick = () => {
    if (isEnergyFull && typeof onWaifuUpdate === "function") {
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
      <p>
        {waifu.type} : {waifuCurrentCount} / {waifu.count}
      </p>
      <button
        className="energyBtn"
        onClick={handleEnergyClick}
        disabled={isEnergyFull}
      >
        Incrémenter l&apos;énergie
      </button>

      {isEnergyFull && (
        <button className="waifuSw" onClick={handleChangeWaifuClick}>
          Changer de Waifu
        </button>
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

WaifuCard.propTypes = {
  waifu: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    changeCount: PropTypes.number.isRequired,
  }).isRequired,
  onRandomWaifu: PropTypes.func.isRequired,
  onWaifuUpdate: PropTypes.func,
};

export default WaifuCard;
