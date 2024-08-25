let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const A = input[0];
const B = input[1];
const C = input[2]

console.log(Number(A)+Number(B)-Number(C));
console.log(Number(A+B)-Number(C));
