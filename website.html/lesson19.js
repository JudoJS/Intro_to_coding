const { FILL } = require("./p5");

var setup = function () {
  createCanvas(1000, 1000);
  background(100);
};
var draw = function () {
  for (let index = 0; index < 100; index++) {
    fill(random(255), random(255), random(255));
    ellipse(index * 10, 100, 50);
  }
};
