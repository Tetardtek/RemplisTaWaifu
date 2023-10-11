
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { TetardCoinProvider } from './components/TetardCoinContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TetardCoinProvider>
      <App />
    </TetardCoinProvider>
  </React.StrictMode>
);
