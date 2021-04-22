for (let count = 1; count < 101; count++) {
  if (count % 15 === 0) {
    document.write("<h1>fizzBuzz  </h1>");
  } else if (count % 3 === 0) {
    document.write("<h2>fizz  </h2>");
  } else if (count % 5 === 0) {
    document.write("<h2>buzz  </h2>");
  } else {
    document.write(count + " ");
  }
}
