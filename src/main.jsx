import React from 'react';
import { createRoot } from "react-dom/client"; // Importez createRoot depuis react-dom/client
import App from './App';
import { TetardCoinProvider } from './context/TetardCoinProvider';

createRoot(document.getElementById('root')).render( // Utilisez createRoot au lieu de ReactDOM.createRoot
  <React.StrictMode>
    <TetardCoinProvider>
      <App />
    </TetardCoinProvider>
  </React.StrictMode>
);
