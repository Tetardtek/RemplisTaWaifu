import waifuBanq from "./WaifuBanq";

/* RANDOMIZER */

function Randomizer(waifuBanq) {
  const randomIndex = Math.floor(Math.random() * waifuBanq.length);
 return waifuBanq[randomIndex];
}




export default Randomizer;