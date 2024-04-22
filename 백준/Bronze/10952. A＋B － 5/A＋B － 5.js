let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let idx = 0;

while(input[idx] !== "0 0"){
  const [A, B] = input[idx].split(" ").map(Number);
  console.log(A+B);
  idx++;
}