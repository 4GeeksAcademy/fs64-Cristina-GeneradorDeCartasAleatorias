/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  const palos = ["♠", "♣", "♥", "♦"];
  const paloIndex = Math.floor(Math.random() * 4);
  const numeroCarta = Math.floor(Math.random() * 13) + 1;
  const cartas = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const carta = document.getElementById("carta");
  console.log(carta);
  carta.innerHTML = cartas[numeroCarta];
  const palo = document.querySelectorAll("#palos");
  for (let index = 0; index < palo.length; index++) {
    palo[index].classList.add(palos[paloIndex]);
    palo[index].innerHTML = palos[paloIndex];
  }
};
