let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const [N] = input[0].split(" ").map(Number);
const [v] = input[2].split(" ").map(Number);

const arr = input[1].split(" ").map(Number);

let count = 0;

arr.forEach(value => {
  if(value === v) {
    count++;
  }
})

console.log(count);