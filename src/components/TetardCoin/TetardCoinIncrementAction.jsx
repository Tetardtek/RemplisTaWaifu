import { useTetardCoin } from "./contexts/UseTetardCoinContext";

function TetardCoinIncrementAction() {
  const { incrementClick, incrementTetardCoin } = useTetardCoin();

  const handleIncrement = () => {
    incrementTetardCoin(incrementClick);
  };

  return (
    <button className="tetardCoinBtn" onClick={handleIncrement}>
      TetardCoin
    </button>
  );
}

export default TetardCoinIncrementAction;
