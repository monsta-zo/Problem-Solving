let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);

const factorial = (num) => {
  return num > 1 ? BigInt(factorial(num-1)) * BigInt(num) : 1n;
}

let answer = 0;
let cur = factorial(N);

while(cur % 10n === 0n) {
  answer++;
  cur /= 10n;
}

console.log(answer);