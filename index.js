var randomNumberP1 = Math.floor(Math.random() * 6) + 1;

var randomImageP1 = "images/dice" + randomNumberP1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageP1);

var randomNumberP2 = Math.floor(Math.random() * 6) + 1;

var randomImageP2 = "images/dice" + randomNumberP2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageP2);

if (randomNumberP1 > randomNumberP2){
  document.querySelector("h1").innerHTML = "🌠 Player 1 Wins!";
}
else if(randomNumberP1 < randomNumberP2){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🌠";
}
else {
  document.querySelector("h1").innerHTML = "🌠 Draw! 🌠";
}
