import React from "react";
import { useTetardCoin } from "../context/TetardCoinContext";

function WaifuCard({ waifu }) {
  const { tetardCoin, setTetardCoin, incrementClick } = useTetardCoin();

  const handleIncrement = () => {
    setTetardCoin((prevTetardCoin) => prevTetardCoin + incrementClick);
    // Créez une nouvelle copie de l'objet waifu avec la propriété changeCount mise à jour.
    const updatedWaifu = { ...waifu, changeCount: waifu.changeCount + incrementClick };
    // Appel d'une fonction de mise à jour fournie par votre composant parent pour mettre à jour le waifu.
    onWaifuUpdate(updatedWaifu);
  };

  return (
    <div className="waifu-card">
      <h3>{waifu.name}</h3>
      <img src={waifu.imgSrc} alt={waifu.name} />
      <p>Type: {waifu.type}</p>
      <p>Count: {waifu.count}</p>
      <button onClick={handleIncrement}>Cliquez pour obtenir des TetardCoin</button>
    </div>
  );
}

export default WaifuCard;
