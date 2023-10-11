// import React from 'react';
// import './App.css';
// import WaifuCarousel from './components/WaifuCarousel'; // Mise à jour du chemin d'accès
// import TetardCoin from './context/TetardCoin';


// function App() {
//   return (
//     <div className="App">
//       <h1>RemplisTaWaifu</h1>
//       <WaifuCarousel />
//       <TetardCoin />
//     </div>
//   );
// }

// export default App;
import ReactDOM from 'react-dom';
import App from './App';
import { TetardCoinProvider } from './context/TetardCoinProvider'; // Assurez-vous que le chemin est correct
import React, { useState, useEffect } from 'react';
import './App.css';
import WaifuBanq from './components/WaifuBanq';
import Ameliorations from './components/Ameliorations';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TetardCoinProvider>
      <App />
    </TetardCoinProvider>
  </React.StrictMode>
);
