let value1 = ["Apple", 1, false];
let value2 = ["Fries", 2, true];
let value3 = ["Mars", 9, "Apple"];

for (let i of value1) {
  for (let j of value3) {
    if (i === j) {
      console.log("A");
    } else {
      console.log("N");
    }
  }
}
