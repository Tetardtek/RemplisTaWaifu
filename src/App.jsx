import React, { useState } from "react";
import { useTetardCoin } from "./components/TetardCoin/TetardCoinContext";
import TetardCoin from "./components/TetardCoin/TetardCoin";
import Ameliorations from "./components/TetardCoin/Ameliorations";
import WaifuCard from "./components/WaifuCard/WaifuCard";
import WaifuBanq from "./components/WaifuCard/WaifuBanq";

// API

const apiUrl = "https://api.waifu.im/search";
const params = {
  included_tags: "maid",
  height: ">=2000",
};

const queryParams = new URLSearchParams(params);
const requestUrl = `${apiUrl}?${queryParams}`;

fetch(requestUrl)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Request failed with status code: " + response.status);
    }
  })
  .then((data) => {
    if (
      data &&
      data.images &&
      Array.isArray(data.images) &&
      data.images.length > 0
    ) {
      const url = data.images[0];
      console.log("Extracted URL:", url);
    } else {
      console.log("No URL found in the response.");
    }
  })
  .catch((error) => {
    console.error("An error occurred:", error.message);
  });

// FONCTION

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
  );
}

export default App;
