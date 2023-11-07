import { useContext } from "react";
import { TetardCoinContext } from "./TetardCoinContext";

export const useTetardCoin = () => {
  return useContext(TetardCoinContext);
};
