let cl = document.write;
for (let count = 1; count < 101; count++) {
  if (count % 15 === 0) {
    cl("fizzbuzz");
  } else if (count % 3 === 0) {
    cl("fizz");
  } else if (count % 5 === 0) {
    cl("buzz");
  } else {
    cl(count);
  }
}
