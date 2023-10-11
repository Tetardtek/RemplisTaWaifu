import React, { useState, useEffect } from 'react';
import './App.css';
import WaifuCarousel from './components/WaifuCarousel';
import { TetardCoinProvider } from './context/TetardCoinProvider';
import WaifuBanq from './components/WaifuBanq';
import Ameliorations from './components/Ameliorations'; // Assurez-vous que le chemin est correct

function App() {
  return (
    <div className="App">
      <h1>Waifu : {WaifuBanq[0].name}</h1>
      <img src={WaifuBanq[0].imgSrc} alt={WaifuBanq[0].desc} />

      <TetardCoinProvider>
        {({ tetardCoin, incrementClick, incrementTetardCoin, acheterAmelioration1, acheterAmelioration2 }) => (
          <div>
            <p>TetardCoin : {tetardCoin}</p>
            <button onClick={handleIncrement}>Cliquez pour obtenir des TetardCoin</button>

            <Ameliorations
              tetardCoin={tetardCoin}
              incrementClick={incrementClick}
              acheterAmelioration1={acheterAmelioration1}
              acheterAmelioration2={acheterAmelioration2}
            />
          </div>
        )}
      </TetardCoinProvider>
    </div>
  );
}

export default App;
