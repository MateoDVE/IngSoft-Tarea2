import sumar from "./sumador";
import Multiplicar from "./Multiplicar";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

const firstMultiplicar = document.querySelector("#primer-numero-multiplicar");
const secondMultiplicar = document.querySelector("#segundo-numero-multiplicar");
const formMultiplicar = document.querySelector("#multiplicar-form");
const divMultiplicar = document.querySelector("#resultado-div-multiplicar");

formMultiplicar.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstMultiplicar.value);
  const secondNumber = Number.parseInt(secondMultiplicar.value);

  divMultiplicar.innerHTML = "<p>" + Multiplicar(firstNumber, secondNumber) + "</p>";
});
