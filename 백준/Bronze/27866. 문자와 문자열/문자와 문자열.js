let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const i = Number(input[1]);

console.log(input[0][i-1]);