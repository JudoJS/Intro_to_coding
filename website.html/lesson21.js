class Shape {
  constructor(canvas) {
    this.canvas = canvas;
    // this.x = random(canvas.width);
    // this.y = random(canvas.height);
  }
  x = 100;
  y = 100;
  w = 100;
  h = 200;
  vx = random(-3, 3);
  vy = random(-3, 3);
  c = random(255);
  move() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > this.canvas.width) {
      this.vx = this.vx;
    }
    if (this.y < 0 || this.y > this.canvas.height) {
      this.vy = this.vy;
    }
  }
  draw() {
    this.move();
    fill(this.c);
  }
}

class rectangle extends Shape {
  draw() {
    super.draw;
    this.move();
    square(this.x, this.y, this.w);
  }
}
class Circle extends Shape {
  draw() {
    super.draw;
    this.move();
    circle(this.x, this.y, this.w);
  }
}
let canvas = { width: 800, height: 650 };
let shapes = [];
var setup = function () {
  createCanvas(canvas.width, canvas.height);

  for (let index = 0; index < 1; index++) {
    let box = new rectangle();
    shapes.push(box);
    let cir = new Circle();
    shapes.push(cir);
  }
};
var draw = function () {
  background(100);
  for (let index = 0; index < shapes.length; index++) {
    let Shape = shapes[index];
    shape.draw();
  }
};
