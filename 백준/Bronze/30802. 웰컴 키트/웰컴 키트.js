let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);

const arr = input[1].split(" ").map(Number);

const [T, P] = input[2].split(" ").map(Number);

let count = 0;

arr.map((num) => {
  count += Math.ceil(num / T);
})

console.log(count);
console.log(Math.floor(N / P) , N % P);
