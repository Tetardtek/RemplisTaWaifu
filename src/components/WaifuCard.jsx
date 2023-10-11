import React from 'react';
import WaifuBanq from '../components/WaifuBanq';

function WaifuCard({ currentWaifu }) {
  const imageSrc = WaifuBanq[currentWaifu].imgSrc;
  const isImageAvailable = imageSrc !== undefined && imageSrc !== '';

  return (
    <div className="waifu-card">
      <h3>{WaifuBanq[currentWaifu].name}</h3>
      {isImageAvailable ? (
        <img src={imageSrc} alt={WaifuBanq[currentWaifu].name} />
      ) : (
        <p>Image non disponible</p>
      )}
      <p>Type d'énergie : {WaifuBanq[currentWaifu].type}</p>
      <p>Count : {WaifuBanq[currentWaifu].count}</p>
    </div>
  );
}

export default WaifuCard;
