let p1score = 0;
let p2score = 0;

function rolldice() {
  let random1 = Math.floor(Math.random() * 6 + 1);
  let random2 = Math.floor(Math.random() * 6 + 1);
  let img1 = "./assests/images/dice" + random1 + ".png";
  let img2 = "./assests/images/dice" + random2 + ".png";

  document.getElementsByClassName("img1")[0].setAttribute("src", img1);
  document.getElementsByClassName("img2")[0].setAttribute("src", img2);

  if (random1 > random2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    p1score++;
  } else if (random2 > random1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    p2score++;
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
  document.getElementById("player1").innerHTML = "player 1 score: " + p1score;
  document.getElementById("player2").innerHTML = "player 1 score: " + p2score;
}

function reset() {
  document.querySelector("h1").innerHTML = "<h1>Roll the dice </h1>";
  p1score = 0;
  p2score = 0;
  document.getElementById("player1").innerHTML = "player 1 score: " + p1score;
  document.getElementById("player2").innerHTML = "player 2 score: " + p2score;
}
function winner() {
  if (p1score > p2score) {
    document.querySelector("h1").innerHTML = "🚩Winner:-Player 1!";
    p1score++;
  } else if (p2score > p1score) {
    document.querySelector("h1").innerHTML = "Winner:-Player 2!🚩";
    p2score++;
  } else {
    document.querySelector("h1").innerHTML = "🏳️Draw!🏳️";
  }
}
