let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

console.log(Math.abs(N-M))