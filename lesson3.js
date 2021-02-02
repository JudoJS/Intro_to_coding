let cl = console.log;
let uno = 1;
let dos = uno + uno;
let tres = dos + uno;
let a = 1;
{
  let a = 2;
  cl(a + tres);
}
cl(a + dos);
let x = "joe";
cl(x);
{
  let x = "momma";
  let joe = x;
  cl(joe);

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

  for (let name = 0; name < 4; name++) {
    if (name === 0) {
      cl("J");
    } else if (name === 1) {
      cl("u");
    } else if (name === 2) {
      cl("d");
    } else {
      cl("e");
    }
  }
}
