console.log(document.body);
let counterValue = 0;
const displayCounter = document.querySelector("#value");
displayCounter.textContent = counterValue;
const decrement = document.querySelector('button[data-action="decrement"]');
const subtractClick = () => {
  return (counterValue = counterValue -= 1), console.log(counterValue);
};
decrement.addEventListener("click", subtractClick);
const increment = document.querySelector('button[data-action="increment"]');
const addClick = () => {
  return (counterValue = counterValue += 1), console.log(counterValue);
};
increment.addEventListener("click", addClick);
