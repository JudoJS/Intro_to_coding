let cl = console.log;

let GRC = function () {
  let choices = ["rock", "paper", "scissors"];
  let randomchoice = Math.floor(Math.random() * 3);
  let choice = choices[randomchoice];
  return choice;
};

let declarewinner = function (player1, player2) {
  let whatbeatswhat = {};
  whatbeatswhat.rock = "scissors";
  whatbeatswhat.paper = "rock";
  whatbeatswhat.scissors = "paper";
  if (whatbeatswhat[player1] === player2) {
    return "Player 1 wins!";
  } else if (whatbeatswhat[player2] === player1) {
    return "Player 2 wins!";
  } else {
    return "Nobody";
  }
};
let player1 = GRC();
let player2 = GRC();
cl(player1, player2);
cl(declarewinner(player1, player2));
