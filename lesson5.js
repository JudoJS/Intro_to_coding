let cl = console.log;
cl(Math.round(Math.random() * 1000));
let d = new Date();
cl(d);
let A = [];
for (let count = 0; count < 51; count++) {
  A.push(Math.round(Math.random() * 10));
}
cl(A);

let sum = 0;

for (let count = 0; count < A.length; count++) {
  sum += A[count];
}
cl(sum);
