let canvas = { width: 1000, height: 1000 };
let boxes = [];
var setup = function () {
  createCanvas(canvas.width, canvas.height);
  for (let index = 0; index < 100; index++) {
    boxes.push({ x: 100, y: 100, w: 200, h: 150 });
  }
};
var draw = function () {
  for (let index = 0; index < boxes.length; index++) {
    const box = boxes[index];
  }
  background(10);
  rect(box.x, box.y, box.w, box.h);
  box.x = random(
    max(box.x - box.s, 0),
    min(box.x + box.s, canvas.width - box.w)
  );
  box.y = random(
    max(box.y - box.s, 0),
    min(box.y + box.s, canvas.width - box.h)
  );
  fill(random(255), random(255), random(255));
};
