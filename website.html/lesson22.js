class Shape {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = random(700);
    this.y = random(500);
  }
  x = 100;
  y = 100;
  w = 100;
  h = 200;
  vx = (-4, 4);
  vy = (-4, 4);
  c = random(255);
  move() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > 700) {
      this.vx = -this.vx;
      this.c = [random(255), random(255), random(255)];
    }
    if (this.y < 0 || this.y > 500) {
      this.vy = -this.vy;
      this.c = [random(255), random(255), random(255)];
    }
  }

  draw() {
    this.move();
    fill(this.c);
  }
}

class Square extends Shape {
  c = [random(255), random(255), random(255)];
  draw() {
    super.draw();
    square(this.x, this.y, this.w);
  }
}
class Circle extends Shape {
  c = [random(255), random(255), random(255)];

  draw() {
    super.draw();
    circle(this.x, this.y, this.w);
  }
}

let shapes = [];
let canvas = { width: 800, height: 600 };

var setup = function () {
  createCanvas(canvas.width, canvas.height);
  for (let index = 0; index < 1; index++) {
    let box = new Square(canvas);
    shapes.push(box);

    // let cir = new Circle(canvas);
    // shapes.push(cir);
  }
};

var draw = function () {
  background(100);
  for (let index = 0; index < shapes.length; index++) {
    let shape = shapes[index];
    shape.draw();
  }
};
