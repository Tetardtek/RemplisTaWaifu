import { useTetardCoin } from "./contexts/UseTetardCoinContext";

function Ameliorations() {
  const {
    tetardCoin,
    incrementClick,
    setTetardCoin,
    setIncrementClick,
    incrementPerSecond,
    setIncrementPerSecond,
  } = useTetardCoin();

  const activePrices = [50, 150, 500, 5000];
  const passivePrices = [50, 150, 500, 5000];
  const activeIncrementValues = [1, 3, 10, 100];
  const passiveIncrementValues = [1, 3, 10, 100];

  const acheterAmelioration = (type, amount) => {
    const prices = type === "actif" ? activePrices : passivePrices;
    const incrementValues =
      type === "actif" ? activeIncrementValues : passiveIncrementValues;

    const price = prices[amount - 1];
    const incrementValue = incrementValues[amount - 1];

    if (tetardCoin >= price) {
      if (type === "actif") {
        setIncrementClick(incrementClick + incrementValue);
      } else if (type === "passif") {
        setIncrementPerSecond(incrementPerSecond + incrementValue);
      }
      setTetardCoin(tetardCoin - price);
    } else {
      console.log("Pas assez de TetardCoin pour acheter cette amélioration.");
    }
  };

  return (
    <div className="divMagasinAmelio">
      <h2>Magasin d&apos;Améliorations</h2>
      <div className="divAmelioActives">
        <p>Améliorations Actives :</p>
        {[1, 2, 3, 4].map((amount) => (
          <div key={amount}>
            Price: {activePrices[amount - 1]} - (+
            {activeIncrementValues[amount - 1]})
            <button
              className="amelioActives"
              onClick={() => acheterAmelioration("actif", amount)}
            >
              Acheter
            </button>
          </div>
        ))}
      </div>
      <div className="divAmelioPassives">
        <p>Améliorations Passives :</p>
        {[1, 2, 3, 4].map((amount) => (
          <div key={amount}>
            Price: {passivePrices[amount - 1]} - (+
            {passiveIncrementValues[amount - 1]})
            <button
              className="amelioPassives"
              onClick={() => acheterAmelioration("passif", amount)}
            >
              Acheter
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ameliorations;
