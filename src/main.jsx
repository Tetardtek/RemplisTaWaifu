import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TetardCoinProvider } from "./components/TetardCoin/contexts/TetardCoinContext";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <TetardCoinProvider>
      <App />
    </TetardCoinProvider>
  </React.StrictMode>
);
