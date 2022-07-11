var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var pickNumber = document.querySelector(".img1").setAttribute("src","dice" +randomNumber1+".png");
var pickNumber = document.querySelector(".img2").setAttribute("src","dice" +randomNumber2+".png");

function wins() {
  if (randomNumber1 > randomNumber2 ){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  } else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

wins();
