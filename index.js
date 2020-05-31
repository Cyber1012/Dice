var player1 = prompt("Who will be player 1?");

var player2 = prompt("Who will be player 2?");

var player1Sliced = player1.slice(0, 1);

var player2Sliced = player2.slice(0, 1);

var player1UpperCased = player1Sliced.toUpperCase();

var player2UpperCased = player2Sliced.toUpperCase();

var player1LowerCase = player1.slice(1, player1.length);

var player2LowerCase = player2.slice(1, player2.length);

player1 = player1UpperCased + player1LowerCase;

player2 = player2UpperCased + player2LowerCase;

document.querySelectorAll(".p")[0].innerHTML = player1;

document.querySelectorAll(".p")[1].innerHTML = player2;

var randomNumberP1 = Math.floor(Math.random() * 6) + 1;

var randomImageP1 = "images/dice" + randomNumberP1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageP1);

var randomNumberP2 = Math.floor(Math.random() * 6) + 1;

var randomImageP2 = "images/dice" + randomNumberP2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageP2);

if (randomNumberP1 > randomNumberP2){
  document.querySelector("h1").innerHTML = "🌠 " + player1 + " Wins!";
}
else if(randomNumberP1 < randomNumberP2){
  document.querySelector("h1").innerHTML = player2 + " Wins! 🌠";
}
else {
  document.querySelector("h1").innerHTML = "🌠 Draw! 🌠";
}
