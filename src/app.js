/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let numero = [
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

  let simbolo = [
    { S: "♦", C: "red" },
    { S: "♥", C: "red" },
    { S: "♠", C: "black" },
    { S: "♣", C: "black" }
  ];

  let numero1 = numero[Math.floor(Math.random() * numero.length)];
  let simbolo1 = simbolo[Math.floor(Math.random() * simbolo.length)];

  document.querySelector(".letra").innerHTML = numero1;

  document.querySelectorAll(".icono").forEach((elem, index) => {
    elem.innerHTML = simbolo1.S;
    elem.style.color = simbolo1.C;
  });
};
