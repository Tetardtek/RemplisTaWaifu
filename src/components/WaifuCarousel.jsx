// import React, { useState } from 'react';
// import WaifuCard from './WaifuCard';

// function WaifuCarousel() {
//   const [currentWaifu, setCurrentWaifu] = useState(0);

//   const handleNextWaifu = () => {
//     setCurrentWaifu((prev) => (prev + 1) % WaifuBanq.length);
//   };

//   return (
//     <div className="waifu-carousel">
//       <WaifuCard currentWaifu={currentWaifu} />
//       <button onClick={handleNextWaifu}>Changer de Waifu</button>
//     </div>
//   );
// }

// export default WaifuCarousel;
import React from 'react';
import { WaifuContext } from './WaifuContext';

function WaifuCarousel() {
  const { waifus, selectedWaifu, changeWaifu } = React.useContext(WaifuContext);

  return (
    <div>
      <h2>Choisissez votre Waifu</h2>
      <div className="waifu-carousel">
        {waifus.map((waifu) => (
          <div
            key={waifu.id}
            className={`waifu-card ${selectedWaifu === waifu.id ? 'selected' : ''}`}
            onClick={() => changeWaifu(waifu.id)}
          >
            <img src={waifu.imgSrc} alt={waifu.name} />
            <h3>{waifu.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WaifuCarousel;
