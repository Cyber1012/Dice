var player1 = prompt("Who will be player 1?");

var player2 = prompt("Who will be player 2?");

var player1Pt1 = player1.slice(0, 1);

var player2Pt1 = player2.slice(0, 1);

var player1UpperCased = player1Pt1.toUpperCase();

var player2UpperCased = player2Pt1.toUpperCase();

var player1Pt2 = player1.slice(1, player1.length);

var player2Pt2 = player2.slice(1, player2.length);

var player1LowerCased = player1Pt2.toLowerCase();

var player2LowerCased = player2Pt2.toLowerCase();

player1 = player1UpperCased + player1LowerCased;

player2 = player2UpperCased + player2LowerCased;

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
