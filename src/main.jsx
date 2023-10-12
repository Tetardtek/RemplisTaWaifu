import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { TetardCoinProvider } from './context/TetardCoinContext';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <React.StrictMode>
    <TetardCoinProvider>
      <App />
    </TetardCoinProvider>
  </React.StrictMode>
);
