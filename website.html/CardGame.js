class VisualCard {
  constructor(card) {
    this.card = card;
  }

  x = 50;
  y = 20;

  isDragging = false;
  xOffset = 0;
  yOffset = 0;
  dragging() {
    if (
      mouseX > this.x &&
      mouseX < this.x + 150 &&
      mouseY > this.y &&
      mouseY < this.y + 200
    ) {
      this.isDragging = true;
      this.xOffset = mouseX - this.x;
      this.yOffset = mouseY - this.y;
      return true;
    } else {
      return false;
    }
  }
  move() {
    if (this.isDragging) {
      this.x = mouseX - this.xOffset;
      this.y = mouseY - this.yOffset;
    }
  }

  getIcon() {
    if (this.card.suit === "Diamonds") {
      return "♦";
    } else if (this.card.suit === "Hearts") {
      return "♥";
    } else if (this.card.suit === "Spades") {
      return "♠";
    } else if (this.card.suit === "Clubs") {
      return "♣";
    }
    // ♥ ♦ ♠ ♣
  }

  draw() {
    this.move();
    push();
    translate(this.x, this.y);
    fill("white");
    rect(0, 0, 150, 200, 7);

    fill(this.card.color);
    textSize(100);
    textAlign(CENTER);
    text(this.getIcon(), 70, 120);
    textSize(30);
    textAlign(LEFT);
    text(this.card.name, 20, 35);
    textAlign(RIGHT);
    text(this.card.name, 140, 190);
    pop();
  }
}
let dealer = new Dealer();

let hand = dealer.getHand();

let visHand = [];
// for (let index = 0; index < hand.length; index++) {
//   const card = array[index];
//   let card = dealer.getCard();
//   visHand.push;
// }
for (let index = 0; index < hand.length; index++) {
  let card = hand[index];
  let visCard = new VisualCard(card);
  visCard.x = 170 * index + 20;
  visHand.push(visCard);
}

// let card = dealer.getCard();
// let card2 = dealer.getCard()

// let visCard = new VisualCard(card);
// let visCard2 = new VisualCard(card2);
// visCard2.x = 250;

var setup = function () {
  createCanvas(1000, 800);
};
var draw = function () {
  background("forestgreen");

  for (let index = 0; index < visHand.length; index++) {
    const visCard = visHand[index];
    visCard.draw();
  }
};

window.mousePressed = function () {
  for (let index = 0; index < visHand.length; index++) {
    const vc = visHand[index];
    vc.dragging();
  }
};
//   visCard.isDragging = true;
//   // visCard2.isDragging = true;
// };
window.mouseReleased = function () {
  for (let index = 0; index < visHand.length; index++) {
    const vc = visHand[index];
    vc.isDragging = false;
  }
};
//   visCard.isDragging = false;
//   // visCard2.isDragging = false;
// };
