var setup = function () {
  createCanvas(1000, 1000);
  background(1);
};

var draw = function () {
  for (let index = 0; index < 1; index++) {
    fill(random(255), random(255), random(255));
    ellipse(random(100) * random(100), random(1000), random(10));
  }
};
