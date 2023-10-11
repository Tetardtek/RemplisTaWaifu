import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TetardCoinProvider } from './context/TetardCoinProvider'; // Utilisez le chemin correct

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TetardCoinProvider>
      <App />
    </TetardCoinProvider>
  </React.StrictMode>
);