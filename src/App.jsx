import React, { useEffect } from "react";
import "./App.css";
import { useTetardCoin } from "./context/TetardCoinContext";
import WaifuBanq from "./components/WaifuBanq";
import Ameliorations from "./components/Ameliorations";

function App() {
  const {
    tetardCoin,
    incrementTetardCoin,
    incrementPerSecond,
    incrementClick,
    setIncrementClick,
  } = useTetardCoin();

 useEffect(() => {
  const passiveGenerationInterval = setInterval(() => {
    incrementTetardCoin(tetardCoin + incrementPerSecond); // Utilisez incrementPerSecond pour incrémenter tetardCoin.
  }, 1000);

  return () => clearInterval(passiveGenerationInterval);
}, [incrementPerSecond, tetardCoin, incrementTetardCoin]);


  const handleIncrement = () => {
    incrementTetardCoin(incrementClick);
  };

  return (
    <div className="App">
      <h1>Waifu : {WaifuBanq[0].name}</h1>
      <img src={WaifuBanq[0].imgSrc} alt={WaifuBanq[0].name} />

      <p className="tetardCoin">TetardCoin : {tetardCoin}</p>

      <button className="tetardCoinBtn" onClick={handleIncrement}>
        TetardCoin
      </button>

      <p className="tetardCoinClick">
        Taux de génération actif : Lv.{incrementClick} par onClick
      </p>
      <p className="tetardCoinPassif">
        Taux de génération passif : Lv.({incrementPerSecond}) par seconde
      </p>

      <Ameliorations />
    </div>
  );
}

export default App;
