let ct = console.table;
let tt = [];
for (let across = 0; across <= 12; across++) {
  tt[across] = [];
  for (let down = 0; down <= 12; down++) {
    tt[across][down] = across * down;
  }
}
ct(tt);
