import React from "react";
import WaifuCard from "./WaifuCard";

function WaifuCarousel({ waifus, activeWaifu, onWaifuSelect }) {
  return (
    <div className="waifu-carousel">
      {waifus.map((waifu) => (
        <WaifuCard
          key={waifu.id} // Vous pouvez utiliser une propriété unique pour la clé
          waifu={waifu}
          isActive={waifu.id === activeWaifu}
          onWaifuSelect={onWaifuSelect}
        />
      ))}
    </div>
  );
}

export default WaifuCarousel;
