// let card = {
//   rank: 2,
//   suit: "Heart",
//   color: "red",
//   name: "2",
// };
let createcard = function (suit, rank) {
  let deck = [];
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
    Suit: suit,
    Rank: rank,
    Name: name,
  };
  return card;

  for (let newSuit = 1; newSuit < 5; newSuit++) {
    for (let newRank = 1; newRank < 15; newRank++) {
      deck;
    }
  }
  return card;
};

// output a deck of cards
