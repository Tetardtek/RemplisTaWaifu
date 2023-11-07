import { useTetardCoin } from "./contexts/UseTetardCoinContext";
import TetardCoinIncrementAction from "./TetardCoinIncrementAction";

function TetardCoin() {
  const { tetardCoin } = useTetardCoin();

  return (
    <div className="tetardCoin">
      <h2>TetardCoin</h2>
      <p>TetardCoin : {tetardCoin}</p>
      <TetardCoinIncrementAction />
    </div>
  );
}

export default TetardCoin;
