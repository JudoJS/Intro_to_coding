// let ct = console.table;
let createcard = function (suit, rank) {
  let name = rank;
  switch (rank) {
    case 11:
      name = "Jack";
      break;
    case 12:
      name = "Queen";
      break;
    case 13:
      name = "King";
      break;
    case 14:
      name = "Ace";
    default:
      break;
  }
  {
    switch (suit) {
      case 1:
        suit = "Diamonds";
        break;
      case 2:
        suit = "Hearts";
        break;
      case 3:
        suit = "Clubs";
        break;
      case 4:
        suit = "Spades";
      default:
        break;
    }
  }
  let card = {
    suit: suit,
    rank: rank,
    name: name,
  };
  return card;
};

let deck = [];

for (let newrank = 2; newrank < 15; newrank++) {
  for (let newsuit = 1; newsuit < 5; newsuit++) {
    deck.push(createcard(newsuit, newrank));
  }
}

let GRC = function () {
  let randomcard = Math.floor(Math.random() * deck.length);
  let randomcardarray = deck.splice(randomcard, 1);
  let card = randomcardarray[0];
  return card;
};
let gethand = function () {
  return [GRC(), GRC(), GRC(), GRC(), GRC()];
};

let player1 = gethand();
let player2 = gethand();
console.table(player1);
console.table(player2);

let getHighestCard = function (hand) {
  let highest = hand[0];
  for (let index = 0; index < hand.length; index++) {
    let card = hand[index];
    if (card.rank > highest.rank) {
      highest = card;
    }
  }
  return highest;
};
console.table(getHighestCard(player1));
console.table(getHighestCard(player2));
if (getHighestCard(player1).rank + getHighestCard(player2).rank < 20) {
  console.log("This game wasn't worth playing!");
} else if (getHighestCard(player1).rank > getHighestCard(player2).rank) {
  console.log("Player one is clearly better!");
} else if (getHighestCard(player2).rank > getHighestCard(player1).rank) {
  console.log("Player two is clearly better!");
} else {
  console.log("Good job everyone, you're all winners!");
}
if (getHighestCard(player1).rank > getHighestCard(player2).rank + 4) {
  console.log("What a blowout!");
}
if (getHighestCard(player2).rank > getHighestCard(player1).rank + 4) {
  console.log("What a blowout!");
}
if (getHighestCard(player1).rank < 7) {
  console.log("Player1 is really bad");
}
if (getHighestCard(player2).rank < 7) {
  console.log("player2 is really bad");
}
