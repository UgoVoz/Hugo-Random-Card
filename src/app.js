/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector(".card").classList.add(randomCardType());
  document.querySelector(".card").innerHTML = randomNumber();
  console.log("Hello Rigo from the console!");
};

function randomNumber() {
  let numbers = [
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
  let cardNumber = Math.floor(Math.random() * numbers.length);
  console.log(numbers[cardNumber]);
  return numbers[cardNumber];
}
function randomCardType() {
  let cardType = ["diamond", "club", "heart", "spade"];
  let cardTypeNumber = Math.floor(Math.random() * cardType.length);
  return cardType[cardTypeNumber];
}

const refreshButton = document.getElementById("refreshButton");

refreshButton.addEventListener("click", () => {
  location.reload();
});
